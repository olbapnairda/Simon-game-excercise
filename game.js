

let userClickedPattern = []

let gamePattern = []

var randomChosenColor = []

let buttonColors = ["green", "red", "yellow", "blue"]

let level = 1

if (level === 1) {

// Press key to start and change title to level 1

$(document).keypress (function() {
  
  $("#level-title").text("Level " + level);

// Select first color in game pattern

nextRandomSequence();

//Click event listener

$("div[type='button']")
  .click(function sequence(e) {
    
    let userChosenColor = e.target.id
    console.log("user chosen color: " + userChosenColor);
    pressButtonAnimation(userChosenColor);
    playSound(userChosenColor);
    userClickedPattern.push(userChosenColor);

    console.log("compare arrays userClicked/gamePattern " + userClickedPattern + " " + gamePattern);
  

    if (userClickedPattern[userClickedPattern.length-1] === gamePattern[userClickedPattern.length-1]) {
       if (userClickedPattern.length === gamePattern.length) {
     $("#level-title").text("Level " + level);
     console.log(level);
     console.log("----- continue ---------");
     setTimeout(nextRandomSequence,1500);
      }
    }
    else {
     console.log("----- game over ---------");
     playSound("wrong");
     gameOverAnimation(userChosenColor);
     $("#level-title").text("GAME OVER, your arrived to level " + level + " press any key to start");
     restartGame();
     console.log(level);    
    }

  });

});

}

  // select next color of game pattern. Push chosen color in gamePattern

  function nextRandomSequence() {
  console.log("--------- inside nextRandomSequence -------------")
  userClickedPattern = []
  randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber]
  gamePattern.push(randomChosenColor);
  level++

  $("#" + randomChosenColor).fadeIn(300).fadeOut(300).fadeIn(300);
  playSound(randomChosenColor);


  console.log("random chosen color " + randomChosenColor);
  
  }

  function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

  function pressButtonAnimation(colorPressed) {
    $("#" + colorPressed).addClass("pressed");
    setTimeout(function() {
      $("#" + colorPressed).removeClass("pressed");
    },100)
  }

  function gameOverAnimation(colorPressed) {
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    },200)
  }

  function restartGame() {
    level = 1
    gamePattern = []
  }

