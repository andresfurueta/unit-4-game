$(document).ready(function () {

    // variables
    var wins = 0;
    var losses = 0;
    $(".wins-text").text("Wins: " + wins);
    $(".losses-text").text("Losses: " + losses);

    //Array of gem images
    var gemImages = ["assets/images/1.jpg", "assets/images/2.jpg", "assets/images/3.jpg", "assets/images/4.jpg"];

    //Assigning random number 
    function gemValues() {

        for (var i = 0; i < gemImages.length; i++) {

            var image = $("<img>");
            image.addClass("gem-buttons gem gem-image");
            image.attr("src", gemImages[i]);
            image.attr("data-letter", Math.floor(Math.random() * 12) + 1);
            $("#gems").append(image);
        }

    }

    function playGame() {


        var counter = 0;
        $(".your-guess").text("Your points: " + counter);

        //Generates random number 
        var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);

        //displays it on the browser
        $(".number-to-guess").text("Number to guess: " + targetNumber);
        console.log(targetNumber);

        //When user clicks on a gem 
        $(".gem-buttons").on("click", function () {

            //Assigns random number to click

            gemIsClicked = true;
            var gemValue = ($(this).attr("data-letter"));
            gemValue = parseInt(gemValue);
           
            //Adds every click to counter
            counter += gemValue;

            console.log(gemValue);
            console.log(counter);

            $(".your-guess").text("Your points: " + counter);

            if (counter === targetNumber) {
                alert("You win!");
                wins++;
                $(".wins-text").text("Wins: " + wins);
                $("#gems").empty();
                gemValues();
                playGame();
            } else if (counter >= targetNumber) {
                alert("You lose!");
                losses++;
                $(".losses-text").text("Losses: " + losses);
                $("#gems").empty();
                gemValues();
                playGame();
            }

        });
    }

    gemValues();
    playGame();

});