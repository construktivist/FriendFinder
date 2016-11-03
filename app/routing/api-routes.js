var friendsArray = require("../data/friends.js");

module.exports = function (app){
	app.get("/api/friends", function(request, response){
		response.json(friendsArray);
	});

	app.post("/api/friends", function(request, response){
		friendsArray.push(request.body);
	})
};