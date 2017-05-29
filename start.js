//discord import
const Discord = require('discord.js');
const client = new Discord.Client();

//bot token...do not share
client.login('--');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', (message) => {
	var lowerCaseMessage = message.content.toLowerCase();
	
	//duck commands
	if (message.content.includes('🦆') && message.member.hasPermission('KICK_MEMBERS')){
        if (lowerCaseMessage.includes("kick")) {
            let userToKick = message.mentions.users.first();
            message.guild.member(userToKick).kick();
        }
	}
	if (message.content.includes('🦆') && message.member.hasPermission('BAN_MEMBERS')){
        if (lowerCaseMessage.includes("ban")) {
            let userToBan = message.mentions.users.first();
            message.guild.member(userToBan).ban();
		}
		else if(lowerCaseMessage.includes("unban")) {
			//unban code here
		}
	}
	if (message.content.includes('🦆')){
		if(lowerCaseMessage.includes("template")) {
			message.channel.send("http://pxls-template-dotted.tk/");
		}
		else if(lowerCaseMessage.includes("suggestions")) {
			//allow suggestions here
		}
		
	}
	
	//fun stuff
	if (message.content.includes('duck')){
		message.react('🦆');
	}
	if (message.content.includes('quack')){
		message.channel.send("QUACK MOTHERFUCKER");
	}
});

/**

TO DO:
Mod commands:
Kick
Ban
Unban
Mute -temp
Mute -perm
Unmute
Softban
Verified duck command:
Warn 
Call mods
Apply for promotion
Other commands:
template
suggestions
games/leveling
log join and leaving
help

**/