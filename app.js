/**
 * Twitter bot for learnise
 *
 * What bot should do:
 *
 * 1. When given list of twitter handles, @mentionsthem while maintaining rate limits.
 * 2. Automatically sends a DM, if the user follows back.
 * 3. can do @mentions by picking the messages that are givrn to the bot
 *
 * @author Yogesh Joshi <iyogeshjoshi@gmail.com>
 */

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
	 Bot.post('direct_messages/new',{ screen_name: username, text:"Heya wassup ;)"},function (err, data, response){
				if(err === null)
				{
					console.log("message posted");
				}
				else
				{
					console.log(err.message);
				}
	});
});
