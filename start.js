//discord import
const Discord = require('discord.js');
const client = new Discord.Client();

//bot token...do not share
client.login('--');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', (message) => {
	if(!message.author.bot) { //this line prevents the bot from responding to itself
		var lowerCaseMessage = message.content.toLowerCase();
		var min;
		var max;
		
		function createPizza() {
			min = 1; 
			max = 3;  
			var random = Math.floor(Math.random() * (+max - +min)) + +min; 
			
			if(random == 1) {
				message.channel.send("you get pepperoni pizza!");
			}
			else if(random == 2) {
				message.channel.send("you get cheese pizza, bitch");
			}
			else if(random == 3) {
				message.channel.send("you get sausage pizza!");
			}
			
		}
		
		function roseLikes() {
			min = 1; 
			max = 20;  
			var random = Math.floor(Math.random() * (+max - +min)) + +min; 
			
			if(random == 1){
				message.channel.send("No one today. :(");
			}
			else if(random == 2){
				message.channel.send("The ghost next to you.");
			}
			else {
				message.channel.send("YOU! <:legsyrun:537691796655046687>");
			}
		}
		
		function d20() {
			min = 1; 
			max = 20;  
			var random = Math.floor(Math.random() * (+max - +min)) + +min; 
			
			message.channel.send(random);
		}
		
		
		function starboard() {
			//code here
		}
		
		
		if (message.content.includes("\uD83E\uDD86")){
			
			if(lowerCaseMessage.includes("\uD83C\uDF55") || lowerCaseMessage.includes("pizza")) {
				createPizza();
			}
			else if(lowerCaseMessage.includes("d20")) {
				d20();
			}
			else if(lowerCaseMessage.includes("commands")) {
				message.channel.send("WAAZZZZUPPPP. Here are the current commands I can do: \n" 
									+ "`:duck:d20 \n" 
									+ "duck \n"
									+ "legsy \n"
									+ ":duck:pizza \n"
									+ "quack \n"
									+ "what does rose like? \n"
									+ "when is roses birthday? \n"
									+ "when does rose like? \n"
									+ "who does rose like? \n"
									+ "what is dan allergic to? \n"
									+ "what does wei like? \n"
									+ "yas`");
			}
			
		}
		//fun stuff that I should put into a method somehow
		if (lowerCaseMessage.includes('duck')){
			message.react("\uD83E\uDD86");
		}
		if (lowerCaseMessage.includes('legsy')){
			message.react("537691796617166878");
		}
		if (lowerCaseMessage.includes('quack')){
			message.channel.send("QUACK MOTHERFUCKER :duck:");
		}
		if (lowerCaseMessage.includes('yas')){
			message.channel.send("queeeeeennnnnnn");
		}
		if (lowerCaseMessage.includes('yas')){
			message.channel.send("queeeeeennnnnnn");
			//add some variations here
		}
		
		//fun facts!
		if (lowerCaseMessage.includes('when is roses birthday?')){
			message.channel.send("August 15th");
		}
		if (lowerCaseMessage.includes('when does rose like?')){
			message.channel.send("August 15th");
		}
		if (lowerCaseMessage.includes('who does rose like?')){
			roseLikes();
		}
		if (lowerCaseMessage.includes('what does rose like?')){
			message.channel.send("Sleep! Good night! <:legsyrun:537691796655046687>");
		}
		if (lowerCaseMessage.includes('what is dan allergic to?')){
			message.channel.send("Lots of things");
		}
		if (lowerCaseMessage.includes('what does wei like?')){
			message.channel.send("Hugs <:hug:552341981435789312>");
		}		
	}
	
});

/**

TO DO:
Jumbo pics
Jumbo legsy
8ball
:duck:laugh
love react:muchlove:
when someone says owo react :kms:
starboard
yard sale
Suggestions
More fun facts
**/