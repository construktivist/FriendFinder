var friendsArray = require("../data/friends.js");

module.exports = function (app){
	app.get("/api/friends", function(request, response){
		response.json(friendsArray);
	});

	app.post("/api/friends", function(request, response){
		var totalDifference = 50;
		var userOneScores = (request.body.scores);
		var match;


		for (var i = 0; i < friendsArray.length; i++) { 
			var userDifference = 0;
			var userTwoScores = friendsArray[i].scores; 


			for (var j = 0; j < userOneScores.length; j++) {
				if (userOneScores[j] > userTwoScores[j]){
					var difference = userOneScores[j] - userTwoScores[j];
					userDifference += difference;
					//console.log("The user difference is " + userDifference);
				}
				else{
					var difference = userTwoScores[j] - userOneScores[j];
					userDifference += difference;
					//console.log("The user difference is " + userDifference);
				}
			};

			if (userDifference < totalDifference){
				totalDifference = userDifference;
				match = friendsArray[i];
				//console.log("The total difference is " + totalDifference);
				//console.log(match + " is the current Match!")
			}
			
		};

		response.json(match);
		friendsArray.push(request.body); // NEED TO DO SOMETHING WITH THIS!!!!!!!!!!!!!!!!!!!!!!!
	})
};