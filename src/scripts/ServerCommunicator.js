export default class ServerCommunicator {
  static async fetchProjects() {
    try {
      const response = await fetch(
        "https://parseapi.back4app.com/classes/Project",
        {
          method: "GET",
          headers: {
            "X-Parse-Application-Id":
              "k67xLWY2xiGusxnl40EVLCTsJaGzj0HeriKULOWM",
            "X-Parse-JavaScript-Key":
              "JxbSLnIfx3ObmXXklVCSL9vIXrJvIZabVQT8vxFX",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }

      const data = await response.json();
      return data.results;
    } catch (error) {
      throw error;
    }
  }
}
