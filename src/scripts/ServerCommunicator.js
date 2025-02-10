export default class ServerCommunicator {
  static apiEndpoint = "https://parseapi.back4app.com";
  static functionsPath = "/functions";
  static getTextBlocksFunctionPath = "/getTextBlocks";
  static projectPath = "/classes/Project";
  static textBlockPath = "/classes/TextBlock";

  static async fetchData(endpoint, method, isFunction) {
    try {
      const response = await fetch(endpoint, {
        method: method,
        headers: {
          "X-Parse-Application-Id": "k67xLWY2xiGusxnl40EVLCTsJaGzj0HeriKULOWM",
          "X-Parse-JavaScript-Key": "JxbSLnIfx3ObmXXklVCSL9vIXrJvIZabVQT8vxFX",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      return isFunction ? data.result : data.results;
    } catch (error) {
      throw error;
    }
  }

  static async fetchProjects() {
    try {
      ServerCommunicator.fetchTextBlocks();
      const data = await ServerCommunicator.fetchData(
        ServerCommunicator.apiEndpoint.concat(ServerCommunicator.projectPath),
        "GET",
        false
      );

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async fetchTextBlocks() {
    try {
      const data = await ServerCommunicator.fetchData(
        ServerCommunicator.apiEndpoint
        .concat(ServerCommunicator.functionsPath)
        .concat(ServerCommunicator.getTextBlocksFunctionPath),
        "POST",
        true
      );

      return data;
    } catch (error) {
      throw error;
    }
  }
}
