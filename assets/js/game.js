var randomNum;
var win = false;

$(document).ready(function(){

    // randomNum = Math.floor(Math.random() * (120 - 19)) + 19;
    // $("#number").text(randomNum);
    randomNumber();
    calculateScore();
});

//Generate random number
function randomNumber(){
    randomNum = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#number").text(randomNum);
}

//Perform calculating scores functionality
function calculateScore(){
    var crystalBox1 = Math.floor(Math.random() * (12 - 1)) + 1;
    var crystalBox2 = Math.floor(Math.random() * (12 - 1)) + 1;
    var crystalBox3 = Math.floor(Math.random() * (12 - 1)) + 1;
    var crystalBox4 = Math.floor(Math.random() * (12 - 1)) + 1;
    var totalScore = 0;
    var winCount = 0;
    var lossCount = 0;

    $("#crystalBox1").on("click", function(){
        totalScore += crystalBox1;
        $("#totalScore").text(totalScore);
        console.log(totalScore);
         if(totalScore === randomNum){
             $("#winLossText").text("WINNER!!!");
             winCount++;
             $("#wins").text(winCount);
             reset();
         }else if(totalScore > randomNum){
            $("#winLossText").text("YOU LOSE!!!");
            lossCount++;
            $("#losses").text(lossCount);
            reset();
         }
    });

    $("#crystalBox2").on("click", function(){
        totalScore += crystalBox2;
        $("#totalScore").text(totalScore);
        console.log(totalScore);
        if(totalScore === randomNum){
            $("#winLossText").text("WINNER!!!");
            winCount++;
            $("#wins").text(winCount);
            reset();
        }else if(totalScore > randomNum){
           $("#winLossText").text("YOU LOSE!!!");
           lossCount++;
           $("#losses").text(lossCount);
           reset();
        }
    });

    $("#crystalBox3").on("click", function(){
        totalScore += crystalBox3;
        $("#totalScore").text(totalScore);
        console.log(totalScore);
        if(totalScore === randomNum){
            $("#winLossText").text("WINNER!!!");
            winCount++;
            $("#wins").text(winCount);
            reset();
        }else if(totalScore > randomNum){
           $("#winLossText").text("YOU LOSE!!!");
           lossCount++;
           $("#losses").text(lossCount);
           reset();
        }
    });

    $("#crystalBox4").on("click", function(){
        totalScore += crystalBox4;
        $("#totalScore").text(totalScore);
        console.log(totalScore);
        if(totalScore === randomNum){
            $("#winLossText").text("WINNER!!!");
            winCount++;
            $("#wins").text(winCount);
            reset();
        }else if(totalScore > randomNum){
           $("#winLossText").text("YOU LOSE!!!");
           lossCount++;
           $("#losses").text(lossCount);
           reset();
        }
    });
}

//Reset the game
function reset(){
    randomNumber();
    totalScore = 0;
    $("#totalScore").text(totalScore);
    calculateScore();
}