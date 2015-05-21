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

/*Bot.get('search/tweets', {q:'learnise since:2014-01-01', count:10},function(err, data, res){
	if(err){
		console.error(err);
	}
	console.log(data);
});
*/

/*Bot.get('following/ids', {screen_name: 'iyogeshjoshi'}, function(err, data, res){
	if(err) console.error(err);
	console.log('Users following @iyogeshjoshi', data);
});
*/

/*Bot.post('statuses/update', {status: 'Living Life #MohMaaya ;)'}, function(err, data, res){
	if(err) {
		console.error(err);
	}
	console.log(data);
});*/

// getting random message
/*var status = null,
		username = null;

setInterval(function(){
	status = Feed.messages[Math.floor(Math.random() * Feed.messages.length)];
	username = Feed.usernames[Math.floor(Math.random() * Feed.usernames.length)];

	status += ' @'+username + ' #testingApi';
	postStatus(status, function(err, data, res){
		if(err){
			console.error(err);
		} else {
			console.log(data);
		}
	});
}, 10*1000 );

var postStatus = function(status, cb) {
	if(status)
		Bot.post('statuses/update', {status: status}, cb);
	else
		cb('No status provided!!');
};
*/

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
