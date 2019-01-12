// show random number to guess
var randomNumber = Math.floor((Math.random() * 120) + 19);
console.log(randomNumber);

$(".number").text(randomNumber);


// assign random number to each crystal
var crystal1Number = Math.floor((Math.random() * 12) + 1);
console.log (crystal1Number);

var crystal2Number = Math.floor((Math.random() * 12) + 1);
console.log (crystal2Number);

var crystal3Number = Math.floor((Math.random() * 12) + 1);
console.log (crystal3Number);

var crystal4Number = Math.floor((Math.random() * 12) + 1);
console.log (crystal4Number);


var totalScore = 0;



// when crystal is clicked,
// add that number to total score
$(".crystal-1").click(function(){ 
    totalScore = totalScore + crystal1Number;
    console.log (totalScore);

    $(".totalScore").text(totalScore);

    wL();

    // if(totalScore > randomNumber){
    //     alert("LOSER!");
    // };

    // if (totalScore >= randomNumber){
    //     var randomNumber = Math.floor((Math.random() * 120) + 19);
    //     console.log("THIS WORKS");
    // }
});

$(".crystal-2").click(function(){
    totalScore = totalScore + crystal2Number;
    console.log (totalScore);

    $(".totalScore").text(totalScore);

    wL();
    
    // if(totalScore > randomNumber){
    //     alert("LOSER!")
    // };

    // if (totalScore >= randomNumber){
    //     var randomNumber = Math.floor((Math.random() * 120) + 19);
    // }
    // $(".number").text(randomNumber);
});

$(".crystal-3").click(function(){
    totalScore = totalScore + crystal3Number;
    console.log (totalScore);

    $(".totalScore").text(totalScore);

    wL();

    // if(totalScore > randomNumber){
    //     alert("LOSER!")

    // };
    
    // if (totalScore >= randomNumber){
    //     var randomNumber = Math.floor((Math.random() * 120) + 19);
    // }
    // $(".number").text(randomNumber);
});

$(".crystal-4").click(function(){
    totalScore = totalScore + crystal4Number;
    console.log (totalScore);

    $(".totalScore").text(totalScore);

    wL();

    // if(totalScore > randomNumber){
    //     alert("LOSER!")
    // };

    // if (totalScore >= randomNumber){
    //     var randomNumber = Math.floor((Math.random() * 120) + 19);
    // }
    // $(".number").text(randomNumber);
})


var wins = 0;
var losses = 0;

// if total score is equal to random number,
function wL (){
    // win ++
    if (totalScore === randomNumber){
        wins ++;
        console.log(wins);
        

        $(".wins").text("Wins: " + wins);
        
        randomNumber = Math.floor((Math.random() * 120) + 19);
        console.log(randomNumber);

        $(".number").text(randomNumber);

        totalScore = 0;

        crystal1Number = Math.floor((Math.random() * 12) + 1);
        console.log (crystal1Number);

        crystal2Number = Math.floor((Math.random() * 12) + 1);
        console.log (crystal2Number);

        crystal3Number = Math.floor((Math.random() * 12) + 1);
        console.log (crystal3Number);

        crystal4Number = Math.floor((Math.random() * 12) + 1);
        console.log (crystal4Number);

      
    }
    // if total score > random number,
    // loss ++
    else if (totalScore > randomNumber){
        losses ++;
        console.log(losses);

        $(".losses").text("Losses: " + losses);

        randomNumber = Math.floor((Math.random() * 120) + 19);
        console.log(randomNumber);

        $(".number").text(randomNumber);

        totalScore = 0;

        crystal1Number = Math.floor((Math.random() * 12) + 1);
        console.log (crystal1Number);

        crystal2Number = Math.floor((Math.random() * 12) + 1);
        console.log (crystal2Number);

        crystal3Number = Math.floor((Math.random() * 12) + 1);
        console.log (crystal3Number);

        crystal4Number = Math.floor((Math.random() * 12) + 1);
        console.log (crystal4Number);

     
    }
    return;
}

// function refresh(){
//     if (totalScore > randomNumber){

//     }
// }

// when either of the above two situations happens, 
// refresh random number








// refresh crystals denomination