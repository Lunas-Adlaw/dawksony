const Discord = require('discord.js');
const bot = new Discord.Client();

const YouTube = require('discord-youtube-api');
const youtube = new YouTube("AIzaSyDuUcLSeTA349gnXwsr5-EMvf1SfWZU5qg");

const fs = require('fs');
const jsonfile = require('jsonfile');

const PREFIX = '?';
const prefix = '?';

const random = require('random');
const { allowedNodeEnvironmentFlags } = require('process');
const { STATUS_CODES } = require('http');

var version = '1.0.0';

var serverlink = 'https://discord.com/invite/fVAAMyP';
 
var serverversion = '1.0.0';

var servername = "Dawk's Discord";

var servers = {};

var stats = {};

bot.on('ready', () => {
	console.log('Your bot is ready.' + ' This is the current version: ' + version);
	bot.user.setActivity("Watching Dawk's best videos");
});

bot.on('message', message=> {

	if(message.content.includes("gay")) {
		message.reply('no you.')
	}
});

bot.on('message', message=> {

	if(message.content.includes("SIMP")) {
		message.reply('is it Shizu?')
	}
});

bot.on('message', message=> {

	if(message.content.includes("simp9000")) {
		message.reply(' HES OVER 90000000000000000000000000000000000000000000000')
	}
});

bot.on('message', message=> {

	if(message.content.includes("simping")) {
		message.reply(' wtf Shizu?! Chill ffs')
	}
});

bot.on('guildMemberAdd', member =>{

	const channel = member.guild.channels.cache.find(channel => channel.name === "Welcome");
	if(!channel) return;
		
	channel.send(`Welcome to hell, ${member}, hope you enjoy your stay, and read the rules for more information.`)
});

async function testAll() {
	const video1 = await youtube.getVideo("https://www.youtube.com/watch?v=VYKEoITRLLc");
	const video2 = await youtube.getVideoByID("VYKEoITRLLc");
	const video3 = await youtube.searchVideos("Dawk");
	const videoArray1 = await youtube.getPlaylist("https://www.youtube.com/c/Dawky/playlists");
	const videoArray2 = await youtube.getPlaylistByID("Dawky/playlists");

	console.log(video1, video2, video3, videoArray1, videoArray2);
}

bot.on('message', message => {
	let args = message.content.substring(PREFIX.length).split(" ");

	switch (args[0]) {

		case "poll":
			const Embed =  new Discord.MessageEmbed()
			.setColor(0x809fff)
			.setTitle("Initiate Poll")
			.setDescription("!poll to initiate a simple yes or no poll");
	  
		  if (!args[1]) {
			message.channel.send(Embed);
			break;
		  }
		  
		  let msgArgs = args.slice(1).join(" ");
		  
		  message.channel.send("📋 " + "**" + msgArgs + "**").then(messageReaction => {
			messageReaction.react("✔️");
			messageReaction.react("❌");
			message.delete(3000).catch(console.error);
		  });
		  break;
		}
	  });

 bot.on('message', (message) => {

    if (message.author.id == bot.user.id)
       return;
    if (message.guild.id in stats === false) {
        stats[message.guild.id] = {};
    }

    const guildStats = stats[message.guild.id];
    if (message.author.id in guildStats === false) {
        guildStats[message.author.id] = {
            xp: 0,
            level: 0,
            last_message: 0
        };
    }

    const userStats = guildStats[message.author.id];
    if (Date.now() - userStats.last_message > 60000) {
        userStats.xp += random.int(15, 25);
        userStats.last_message = Date.now();

    const xpToNextLevel = 5 * Math.pow(userStats.level, 2) + 50 * userStats.level + 100;
    if (userStats.xp >= xpToNextLevel) {
        userStats.level++;
        userStats.xp = userStats.xp - xpToNextLevel;
        message.channel.send(message.author.username + ' has reached level ' + userStats.level + '.');     
    }
        jsonfile.writeFileSync('stats.json', stats);

        console.log(message.author.username + ' now has ' + userStats.xp);
        console.log(xpToNextLevel + ' XP needed for next level!');
    }
 
	let args = message.content.slice(PREFIX.length).split(" ");

    switch(args[0]) {
    case 'profile':
        if(args[1]) return message.reply(` sorry but you can't mention other users, not yet!`)
        const embed = new Discord.MessageEmbed()
        .setTitle("Dawks personal Maid;🎇")
		.addField('Nickname', message.author.username)
		.addField('User ID', message.author.id)
        .setColor(0xccd9ff)
        .setThumbnail(message.author.displayAvatarURL())
        .addField('Our Server', message.guild.name, true)
        .addField('Server Version', serverversion, true)
		.addField('Level', userStats.level, true)
		.addField("Currently Playing: ", message.author.presence.game || "Nothing", true)
		.setFooter("Created by Luna (Not the chosen one)#0345", bot.user.avatarURL)
        message.channel.send(embed);
		break;
	case 'Shizu':
		if(args[1]) return message.reply(' sorry, I dont know that command.')
		message.reply (' he is the cutest!');
		break;
	case 'Ivo':
		if(args[1]) return message.reply(' sorry, I dont know that command.')
		message.reply (' the secret commands were found! :o And Ivo is a cute angel!');
		break;
	case 'Luna':
			if(args[1]) return message.reply(' sorry, I dont know that command.')
			message.reply (' MY QUEEN, MY CREATOOOOOR.');
			break;
	case 'Turkey':
		    if(args[1]) return message.reply(' sorry, I dont know that command.')
			message.reply (' 🦃');
			break; 
	case 'DaddyTurkey':
		    if(args[1]) return message.reply(' sorry, I dont know that command.')
			message.reply (' my colar is under the bed, daddy~');
			break;
	case 'DaddyTurkey2':
			if(args[1]) return message.reply(' sorry, I dont know that command.')
			message.reply (' the butt plug... does it has a tail on it?~');
			break;
	case 'DaddyTurkey3':
			if(args[1]) return message.reply(' sorry, I dont know that command.')
			message.reply (' I probably cant take it all. >-<');
			break;
	case 'DaddyTurkey4':
	      	if(args[1]) return message.reply(' sorry, I dont know that command.')
		    message.reply (' IM TALKING ABOUT THE FOOD SHIZU, THE BUNS.');
			break;
	case 'DaddyTurkey5':
	        if(args[1]) return message.reply(' sorry, I dont know that command.')
            message.reply (' daddy... i-inside humm~~ I dont want to mess up my shirt.');
			break;
	case 'DaddyTurkey6':
			if(args[1]) return message.reply(' sorry, I dont know that command.')
			message.reply (' take it slow, put it down on me, you said jump on it, ride like a pony, lights down low...~');
			break;
	case 'ShizuBottom':
		    if(args[1]) return message.reply(' sorry, I dont know that command.')
			message.reply (' mommy be careful with the tip i-its too sensitiv-AnhhYaAaaa m-mommy a-ahm....~');
			break;
	case 'Dawk':
		    if(args[1]) return message.reply(' sorry, I dont know that command.')
	     	message.reply (" DISGOSTENG. Jk he's my father, he is also very old");
				break;
    case 'level':
        if(args[1]) return message.reply(' sorry, I couldnt read the second argument...')
        message.reply (' your pp is ' + userStats.level + ' inch long💦.');
        break;
    }
});

bot.on('message', message => {

  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'kick':

      const user = message.mentions.users.first();
    
      if(user){
        const member = message.guild.member(user);

        if(member){
          member.kick('You where kicked!').then(() =>{
          message.reply(`sucessfuly kicked ${user.tag}`);
        }).catch(er =>{
          message.reply('I was unable to kick the member');
          console.log(err);
        });
      } else {
        message.reply("That user isn\'t in this guild.")
      }
    } else {
        message.reply('you need to specify a member!')
    }

  break;
}
});

bot.on('message', message => {

  let args = message.content.substring(PREFIX.length).split(" ");
  
  switch (args[0]) {

  case 'ban':

    const user = message.mentions.users.first();
  
    if(user){
      const member = message.guild.member(user);

      if(member){
        member.ban({ression: 'you were banned!'}).then(() =>{
          message.reply(`${user.tag} was banned!`)
        })
    } else {
      message.reply("That user isn\'t in this guild.")
	}
	
    } else {
      message.reply('you need to specify a member!')
	}
break;
}
});

bot.on('message', (message) => {
	
	let args = message.content.slice(PREFIX.length).split(" ");

	switch(args[0]){
		case 'twitch':
		    message.channel.send('https://www.twitch.tv/dawky');
		    break;
		case 'twitter':
			message.channel.send('https://twitter.com/dawkbtw');
			break;
		case 'youtube':
			message.channel.send('https://www.youtube.com/channel/UCi-MMAUN6IwetsWS9ym5kCg');
			break;
		case 'yt':
			message.channel.send('https://www.youtube.com/channel/UCi-MMAUN6IwetsWS9ym5kCg');
			break;
		case 'instagram':
			message.channel.send('https://www.instagram.com/dawkbtw/');
			break;
		case 'server':
			message.channel.send("You are in Dawk's discord, plz follow the guide lines");
			break;
		case 'server-info':
			const embed = new Discord.MessageEmbed()
			.setTitle("Server Info;🐋")
			.setColor(0x38669f)
			.setThumbnail(message.guild.iconURL())
			.addField('Server Name', message.guild.name)
			.addField('Member Count', message.guild.memberCount)
			message.channel.send(embed);
			break;
		case 'clear':
			if(!args[1]) return message.reply('theres an error! Second argument not found.')
			message.channel.bulkDelete(args[1]);
			break;
		case 'info':
			const exampleEmbed = new Discord.MessageEmbed()
			.setTitle("Bot info")
			.setColor(0x3366ff)
			.setURL(serverlink)
			.setAuthor("Dawk's bot info.")
			.setDescription('Information')
			.addFields(
				{ name: 'Main command:', value: '!help' },
				{ name: 'Bot name:', value: "Dawk's Son", inline: true},
				{ name: 'Bot version:', value: version, inline: true},
				{ name: 'Bot state', value: 'Online', inline: true},
				{ name: 'Bot programmer', value: 'Luna', inline: true},
			)
			.addField('Server', message.guild.name, true)
			.setFooter(`Don't forget to keep up for a future only fans.`, '');
			message.channel.send(exampleEmbed);
			break;
		case 'help':
			const messageEmbed = new Discord.MessageEmbed()
			.setTitle('All of the current commands.')
			.setColor(0x1a4fff)
			.setURL(serverlink)
			.setAuthor("Dawk's son; Bot commands.")
            .setDescription(`Enjoy my commands!`) 
            .addFields(
              { name: 'Main commands:', value: '?help \n ?info (bot info) \n ?profile (show your server profile!) \n ?level (check your server level!) \n ?clear (amount of messages that you wanna clear) \n ?server-info (check all the server info)' },
			  { name: "Dawk's Socials:", value: '?twitch \n ?yt/?youtube \n ?twitter \n ?instagram.'},
			  { name: "Secret Commands:", value: "They are secret for a reason. :v "}
			)
			.addField('Our Server', message.guild.name, true)
			message.channel.send(messageEmbed);
			break;
	}
});

 bot.login('process.env.token');

