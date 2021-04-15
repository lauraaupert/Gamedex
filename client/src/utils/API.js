import axios from "axios";

// Export an object containing methods we'll use for accessing the RAWG API

export default {
  searchTerms: function(query) {
    return axios.get(
      "https://api.rawg.io/api/games?key=" + REACT_APP_APIKEY + "&search=" + query 
        // "&limit=1&format=json&origin=*"
    );
  },
    // Gets all saved games
    getGames: function() {
      return axios.get("/api/games");
    },
    // Gets the game with the given id
    getGame: function(id) {
      return axios.get("/api/games/" + id);
    },
    // Deletes the game with the given id
    deleteGame: function(id) {
      return axios.delete("/api/games/" + id);
    },
    // Saves a game to the database
    saveGame: function(gameData) {
      return axios.post("/api/games", gameData);
    }
  
};
// GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
//Find code for the Search Page in Activity 10, week 20