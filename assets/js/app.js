var gifs = [];

    $("button").on("click", function() {
      var vehicle = $(this).attr("data-vehicle");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        vehicle + "&api_key=h4oStqFYKrToifPOOgZ7nWIktOVExtdJ&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifyDiv = $("<div class='item'>");

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
