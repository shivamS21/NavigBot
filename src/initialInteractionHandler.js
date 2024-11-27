const helloWorldCard = require("./adaptiveCards/helloworldCommand.json");
const { CardFactory, MessageFactory } = require("botbuilder");
const ACData = require("adaptivecards-templating");

class InitialInteractionHandler {
  triggerPatterns = "sharma";

  async handleCommandReceived(context, message) {
    // verify the command arguments which are received from the client if needed.
    console.log(`App received message: ${message.text}`);

    // do something to process your command and return message activity as the response

    // render your adaptive card for reply message
    const cardData = {
      title: "Welcome to NavigBud Universe🙏",
      body: "I am your navigation buddy. I will help you reach your destination conference room in just 2 steps.",
    };

    const cardJson = new ACData.Template(helloWorldCard).expand({ $root: cardData });
    return MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
  }
}

module.exports = {
  InitialInteractionHandler,
};
