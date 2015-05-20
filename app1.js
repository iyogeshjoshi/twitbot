var Twit = require('twit');
var Config = require('./config');
var Feed = require('./feed');

// create a new bot
var Bot = new Twit({
	consumer_key: Config.consumer_key,
	consumer_secret: Config.consumer_secret,
	access_token: Config.access_token,
	access_token_secret: Config.access_token_secret
});

//sending message to the followers
var stream = Bot.stream('user');
stream.on('follow', function (eventMsg) {
	 var username = eventMsg.source.screen_name;
	 Bot.post('direct_messages/new',{ screen_name: username, text:"Thank You for following me have a nice day"},function (err, data, response){
				if(err === null)
				{
					console.log("message posted");
				}
				else
				{
					console.log(err.message);
				}
	});
})
