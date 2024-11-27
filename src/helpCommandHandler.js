const { MessageFactory } = require("botbuilder");

class HelpCommandHandler {
  triggerPatterns = "/help";

  async handleCommandReceived(context, message) {
    // Log the received message for debugging purposes
    console.log(`App received message: ${message.text} shivam`);

    // Define the response message
    const response =
      "Here's a list of commands I can help you with:\n" +
      "- 'hi': Say hi, and I'll greet you with a random fun-fact.\n" +
      "- '/source': Asks your current location\n" +
      "- '/destination': Asks your destination spot in the office, and gives you the path to help you reach there \n" +
      "- '/help': Get a list of available commands.\n" +
      "\nFeel free to ask for help anytime you need it!";

    // Return the response as a simple text message
    return MessageFactory.text(response);
  }
}

module.exports = {
  HelpCommandHandler,
};