// Global variables

// -------------------------------------

// Set crystal variables for each box each having a random number
var crystalBox1;
var crystalBox2;
var crystalBox3;
var crystalBox4;

// Set game counter variables
var randomNum;
var totalScore = 0;
var winCount = 0;
var lossCount = 0;

// Set up the ready function so the javascript runs once the webpage is done loading
$(document).ready(function(){


    //Generate random number
    function randomNumber(){
        randomNum = Math.floor(Math.random() * (120 - 19)) + 19;
        $("#number").text(randomNum);
    }
    randomNumber();
    

    // Crystalbox1 click functions
    $("#crystalBox1").on("click", function(){
        crystalBox1 = Math.floor(Math.random() * (12 - 1)) + 1;
        totalScore += crystalBox1;
        $("#totalScore").text(totalScore);
        console.log(totalScore);

        if(totalScore === randomNum){
            $("#winLossText").text("WINNER!!!");
            winCount++;
            $("#wins").text(winCount);
            totalScore = 0;
            reset();
        }else if(totalScore > randomNum){
        $("#winLossText").text("YOU LOSE!!!");
            lossCount++;
            $("#losses").text(lossCount);
            totalScore = 0;
            reset();
        }
    });


    // Crystalbox2 click functions
    $("#crystalBox2").on("click", function(){
        crystalBox2 = Math.floor(Math.random() * (12 - 1)) + 1;
        totalScore += crystalBox2;
        $("#totalScore").text(totalScore);
        console.log(totalScore);

        if(totalScore === randomNum){
            $("#winLossText").text("WINNER!!!");
            winCount++;
            $("#wins").text(winCount);
            totalScore = 0;
            reset();
        }else if(totalScore > randomNum){
            $("#winLossText").text("YOU LOSE!!!");
            lossCount++;
            $("#losses").text(lossCount);
            totalScore = 0;
            reset();
        }
    });


    // Crystalbox3 click functions
    $("#crystalBox3").on("click", function(){
        crystalBox3 = Math.floor(Math.random() * (12 - 1)) + 1;
        totalScore += crystalBox3;
        $("#totalScore").text(totalScore);
        console.log(totalScore);

        if(totalScore === randomNum){
            $("#winLossText").text("WINNER!!!");
            winCount++;
            $("#wins").text(winCount);
            totalScore = 0
            reset();
        }else if(totalScore > randomNum){
            $("#winLossText").text("YOU LOSE!!!");
            lossCount++;
            $("#losses").text(lossCount);
            totalScore = 0;
            reset();
        }
    });


    // Crystalbox4 click functions
    $("#crystalBox4").on("click", function(){
        crystalBox4 = Math.floor(Math.random() * (12 - 1)) + 1;
        totalScore += crystalBox4;
        $("#totalScore").text(totalScore);
        console.log(totalScore);

        if(totalScore === randomNum){
            $("#winLossText").text("WINNER!!!");
            winCount++;
            $("#wins").text(winCount);
            totalScore = 0;
            reset();
        }else if(totalScore > randomNum){
            $("#winLossText").text("YOU LOSE!!!");
            lossCount++;
            $("#losses").text(lossCount);
            totalScore = 0;
            reset();
        }
    });


    // Reset the game
    function reset(){
        randomNumber();
        $("#totalScore").text(totalScore);
    }
 
});