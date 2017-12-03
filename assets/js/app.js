
var topics = ["Superbikes", "Supercars", "Jets", "Planes", "Trains", "Trucks", "Gocarts"];
var addedTopics = [];


	var getButtons = function(){
        for (var i = 0; i < topics.length; i++){
        	var newBtn = $("<button data-vehicle" + "=" + topics[i] + ">" + topics[i] + "</button>");

        	$("#buttons").append(newBtn);
        };
    };
    getButtons();

    var newButtons = function(){
    	for (var o = 0; o < addedTopics.length; o++){
        	var newerBtn = $("<button data-vehicle" + "=" + addedTopics[o] + ">" + addedTopics[o] + "</button>");

        	$("#buttons").append(newerBtn);
        };

        topics += addedTopics;
    };

    $("#buttons").on("click", function(event) {

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + event.target.dataset.vehicle + "&api_key=h4oStqFYKrToifPOOgZ7nWIktOVExtdJ&limit=10";
      var vehicle = $(this).attr("data-vehicle");
      
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifyDiv = $("<div>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var vehicleImage = $("<img>");
            vehicleImage.attr("src", results[i].images.fixed_height.url);

            gifyDiv.prepend(p);
            gifyDiv.prepend(vehicleImage);

            $("#giphy-images").prepend(gifyDiv);
          }
        });
       });

 $("#add-gif").on("click", function(){
 	event.preventDefault();
 
 	var newInput = $("#gif-input").val();

 	addedTopics.push(newInput);

 	newButtons();
 	
 });










