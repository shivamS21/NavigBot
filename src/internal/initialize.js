const { BotBuilderCloudAdapter } = require("@microsoft/teamsfx");
const ConversationBot = BotBuilderCloudAdapter.ConversationBot;
const { InitialInteractionHandler } = require("../initialInteractionHandler");
const { GenericCommandHandler } = require("../genericCommandHandler");
const { NavigationCommandHandler } = require("../navigationCommandHandler");
const config = require("./config");

// Create the command bot and register the command handlers for your app.
const commandApp = new ConversationBot({
  adapterConfig: config,
  command: {
    enabled: true,
    commands: [
      new InitialInteractionHandler(),
      new NavigationCommandHandler(),
      new GenericCommandHandler(),
    ],
  },
});

module.exports = {
  commandApp,
};