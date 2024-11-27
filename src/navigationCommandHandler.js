const {Graph} = require('./Graph')
const graph = new Graph();

class NavigationCommandHandler {
  constructor() {
    this.sourceLocation = null;
    this.destinationLocation = null;
    this.triggerPatterns = /^\/(source|destination):/;
  }

  async handleCommandReceived(context, message) {
    const text = message.text.trim();
    console.log(`Navigation msg received: ${text}`);
    
    if (text.startsWith("/source:")) {
      this.sourceLocation = text.substring(8).trim();
      console.log(`Source location set to: ${this.sourceLocation}`);
      await context.sendActivity(`Source location set to: ${this.sourceLocation}`);
    } else if (text.startsWith("/destination:")) {
      this.destinationLocation = text.substring(13).trim();
      console.log(`Destination location set to: ${this.destinationLocation}`);
      await context.sendActivity(`Destination location set to: ${this.destinationLocation}`);
    }

    if (this.sourceLocation && this.destinationLocation) {
      const path = graph.findShortestPath(this.sourceLocation, this.destinationLocation);
      
      if (path) {
        const directions = graph.getDirections(path);
        // const response = `Shortest path from **${this.sourceLocation}** to **${this.destinationLocation}**: \n${path.join(' -> ')}.`;
        const response = `Shortest path from **${this.sourceLocation}** to **${this.destinationLocation}**:\n\n${path.join(' -> ')}.`;
        const directionsResponse = `**Directions:**\n- ${directions.join('\n- ')}`;
        
        await context.sendActivity(response);
        await context.sendActivity(directionsResponse);
      } else {
        await context.sendActivity(`No path exists from **${this.sourceLocation}** to **${this.destinationLocation}**.`);
      }

      // Reset locations after processing
      this.sourceLocation = null;
      this.destinationLocation = null;
    }
  }
}

module.exports = {
  NavigationCommandHandler,
};