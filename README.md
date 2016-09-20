# brandchat-startup-bot
## Introduction
NOTE: This document is work in progress and not ready for usage yet. 
This document provides instructions on how to develop your first Brandchat Bot using NodeJS.

## Prerequisits
In order to develop and run a Bot on Brandchat, you need these three things: 
-	A valid Brandchat Account (see how to [sign up for Brandchat](https://www.brandchat.co/brands)).
-	Create a new Bot Agent (Under 'Agents' menu of your Brand Administration console) (TODO: See how to create new bot agent)
-	Download and Install NodeJS onto your target environment ([see how to install and setup NodeJS on your environment](https://nodejs.org/en/download/package-manager/))


## Your first Brandchat Bot
```javascript
//Include required components
var BrandchatManager = require("./app/brandchatManager");
var MessageManager = require("./app/messageManager");

//Initiate and connect to the Brandchat server
var messageManager = new MessageManager();
var brandchatManager = new BrandchatManager({bot_key:"bot_key", secret_key:"secret_key"});
brandchatManager.connect(function(loginInfo){}, messageManager);

//Welcome message from the Bot
messageManager.welcomeMessage = function(question){
   messageManager.sendMessage(question.id, "Hi. Im am Startup Bot");
};

//Bot correspondence flow
messageManager.onMessage(function(message){
   if(message.text=="hello"){
      messageManager.sendMessage(message.questionId, "Hellow to you too");   
   }
});
```
