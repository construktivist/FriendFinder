var friendsArray = require("../data/friends.js");

module.exports = function (app){
	app.get("/api/friends", function(request, response){
		response.json(friendsArray);
	});

	app.post("/api/friends", function(request, response){
		friendsArray.push(request.body);
		//need an array for users
		//push new user to user array index 0

		//loop through Friends array
			//extract name and scores
				//push the users to an array

		//loop through users array



	})
};