const { TeamsActivityHandler } = require("botbuilder");
const { InitialInteractionHandler } = require("./initialInteractionHandler");

class TeamsBot extends TeamsActivityHandler {
  constructor() {
    super();

    this.commandHandler = new InitialInteractionHandler();

    // Handle new members being added
    this.onMembersAdded(async (context, next) => {
      const membersAdded = context.activity.membersAdded;
      for (let cnt = 0; cnt < membersAdded.length; cnt++) {
        if (membersAdded[cnt].id !== context.activity.recipient.id) {
          // Use the HelloWorldCommandHandler to create the card
          const response = await this.commandHandler.handleCommandReceived(context, context.activity);
          await context.sendActivity(response);
          break;
        }
      }
      await next();
    });
  }
}

module.exports.TeamsBot = TeamsBot;