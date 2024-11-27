const {Graph} = require('./Graph')
const graph = new Graph();
console.log(graph)
// class NavigationCommandHandler {
//   constructor() {
//     this.sourceLocation = null;
//     this.destinationLocation = null;
//     this.triggerPatterns = /^\/(source|destination):/;
//   }

//   async handleCommandReceived(context, message) {
//     const text = message.text.trim();
//     console.log(`Navigation msg received: ${text}`)
//     if (text.startsWith("/source:")) {
//       // Capture the source location
//       this.sourceLocation = text.substring(8).trim();
//       console.log(`source location: ${this.sourceLocation}`)
//       await context.sendActivity(`Source location set to: ${this.sourceLocation}`);
//     } else if (text.startsWith("/destination:")) {
//       // Capture the destination location
//       this.destinationLocation = text.substring(13).trim();
//       console.log(`destination location: ${this.destinationLocation}`)
//       await context.sendActivity(`Destination location set to: ${this.destinationLocation}`);
//     }

//     // Check if both source and destination are set
//     if (this.sourceLocation && this.destinationLocation) {
//       const response = `You are navigating from ${this.sourceLocation} to ${this.destinationLocation}.`;
//       await context.sendActivity(response);

//       // Optionally, reset the locations after processing
//       this.sourceLocation = null;
//       this.destinationLocation = null;
//     }
//   }
// }

// module.exports = {
//     NavigationCommandHandler
// };
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
        const response = `Shortest path from ${this.sourceLocation} to ${this.destinationLocation}: ${path.join(' -> ')}.`;
        const directionsResponse = `Directions: ${directions.join(', ')}`;
        
        await context.sendActivity(response);
        await context.sendActivity(directionsResponse);
      } else {
        await context.sendActivity(`No path exists from ${this.sourceLocation} to ${this.destinationLocation}.`);
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