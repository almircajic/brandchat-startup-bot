# brandchat-startup-bot
## Introduction
NOTE: This document is work in progress and not ready for usage yet. 
This document provides instructions on how to develop your first Brandchat Bot using NodeJS.

## Requirements
In order to develop and run a Bot on Brandchat, you require few things as per below: 
-	A valid Brandchat Account (see how to [sign up for Brandchat](https://www.brandchat.co/brands)).
-	Create a new Bot Agent (Under 'Agents' menu of your Brand Administration console) (TODO: See how to create new bot agent)
-	Download and Install NodeJS onto your target environment ([see how to install and setup NodeJS on your environment](https://nodejs.org/en/download/package-manager/))
-  Download and install Git from <https://git-scm.com/download> so you can clone this repository onto your machine. 

## Your first Brandchat Bot

#### Download Startup Template
To start your first bot, assuming you already completed above steps, you can download this startup template into your local working directory by cloning the :

`git clone git://github.com/almircajic/brandchat-startup-bot.git`

This will create folder **brandchat-startup-bot** and inside it a few files. Go into newly created folder and run command `npm install` to get and install dependencies.

#### Run First Bot 
If dependencies are installed correctly, change bot_key and secret_key as per values provided while creating Bot Agent. Then, run `node index.js`.
 
If you see something like this as the output, then you are ready to roll:

```
Setting up Brandchat Manager Instance
chatServerUrl: https://chat.brandchat.co:443
logging in...
Hi there! Im bot and im connected.
```

This is all you need to run your first bot. 

For developing more complex Bot interactions, stay tuned for How-to (TODO: link to How to resources) documentations coming soon.

