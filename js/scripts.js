//business logic
function Result(first, last) {
  this.firstName = first;
  this.lastName = last;
}
Result.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// user interface logic
$(document).ready(function() {
  // $("#add-movie").click(function() {
  //   $(#"new-movies").append("<div class="new-movie">" +
  //                             "<label></label>" +
  //                             "<input type="radio" name="moviename">"
  //                             "</div>" +
  //                           "</div>");
  // });
  $("form#new-info").submit(function(event) {
    event.preventDefault();
      $(".result").last().click(function() {
        $("#show-ticket").show();
        $("#show-ticket h2").text(newResult.firstName);
        $(".first-name").text(newResult.firstName);
        $(".last-name").text(newResult.lastName);
      });

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var movieInfo = $("input:radio[name=movieName]:checked").val();
    var age = parseInt($("input#new-age").val());
    var timeBucket = $("#time").val();

    console.log("Selected movie info is: " + movieInfo);

    var movieResults = movieInfo.split("|");
    var movieName = movieResults[0];
    var moviePirce = movieResults[1];

    console.log("Selected movie name is: " + movieName);
    console.log("Selected movie price is: " + moviePirce);

    var newResult = new Result(inputtedFirstName, inputtedLastName);

    if (timeBucket === 2 || timeBucket === 3 || timeBucket === 4) {
      moviePirce -= 1;
    }
    if (age >= 65 || age <= 3) {
      moviePirce -= 1;
    }
    if (movieName === "Blade Runner 2049") {
      moviePirce -= 1;
    }

    console.log("Age is: " + age);

    //var time = $

    //$("ul#ticket").append("<li><span class='result'>" + newResult.fullName() + "</span></li>");

    // $("#show-ticket.first-name").val(inputtedFirstName);
    // $("#show-ticket.last-name").val(inputtedLastName);
    // $("#show-ticket.movie-name").val(movieName);
    // $("#show-ticket.time").val(timeBucket);
    // $("#show-ticket.price").val(moviePirce);

    $(".full-name").text(newResult.fullName());
    //$("#show-ticket.last-name").text(inputtedLastName);
    $(".movie-name").text(movieName);
    $(".time").text(timeBucket);
    $(".price").text(moviePirce);

    //$("input#new-first-name").val("");
    //$("input#new-last-name").val("");
  });
});
