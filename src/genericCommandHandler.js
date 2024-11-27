class GenericCommandHandler {
  triggerPatterns = new RegExp(/^.+$/);

  async handleCommandReceived(context, message) {
    // verify the command arguments which are received from the client if needed.
    console.log(`App received message: ${message.text}`);

    let response = "";
    switch (message.text) {
      case "hi":
        response =
          "Hi there! I'm your NavigBud Bot, here to assist you finding the spot in the office. Type 'help' for a list of available commands.";
        break;
      case "/help":
        response =
          "Here's a list of commands I can help you with:\n" +
      "- 'hi': Say hi, and I'll greet you with a random fun-fact.\n" +
      "- '/source': Asks your current location\n" +
      "- '/destination': Asks your destination spot in the office, and gives you the path to help you reach there \n" +
      "- '/help': Get a list of available commands.\n" +
      "\nFeel free to ask for help anytime you need it!";
        break;
      default:
        response = `Sorry, command unknown. Please type '/help' to see the list of available commands.`;
    }
    return response;
  }
}

module.exports = {
  GenericCommandHandler,
};
