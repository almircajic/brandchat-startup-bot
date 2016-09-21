
var core = require("brandchat-bot-core");

//Initiate and connect to the Brandchat server
var messageManager = new core.MessageManager();
var brandchatManager = new core.BrandchatManager({bot_key:"your_bot_key", secret_key:"secret_key"});

brandchatManager.connect(function(loginInfo){}, messageManager);

//Welcome message from the Bot
messageManager.welcomeMessage = function(question){
   messageManager.sendMessageText(question.id, "Hi. I'm Startup Bot");
};

//Bot correspondence flow
messageManager.onMessage(function(message){
   if(message.text=="hello"){
      messageManager.sendMessageText(message.questionId, "Hello to you too");   
   }
});


