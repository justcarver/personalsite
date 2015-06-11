/*global $*/
/*global alert*/

// Various Varible Declarations
var box;
var i;
var noOfClicks = 0;

//Toggle whether an element has the class Selected or not
function $switchBox($idName) {
  'use strict';
  if ($("#" + $idName).hasClass("selected")) {
    $("#" + $idName).removeClass("selected");
  } else {
    $("#" + $idName).addClass("selected");
  }
}

//Update counter of the Number of Clicks used in game
function updateClicks() {
  'use strict';
  $("#clickNumber").html(noOfClicks);
}

//Generate a random number
function randomIntFromInterval(min, max) {
  'use strict';
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Start a new game with random elements "selected"
function $seedGame() {
  'use strict';
  for (i = 0; i < randomIntFromInterval(15, 20); i += 1) {
    box = "r" + randomIntFromInterval(1, 5) + "c" + randomIntFromInterval(1, 5);
    if ($("#" + box).hasClass("selected")) {
      i -= 1;
    } else {
      $switchBox(box);
    }
  }
  updateClicks();
}

//Display the win message if all elements are not "selected"
function $checkStatus() {
  'use strict';
  console.log('Game is not clear: ' + $("#game div").hasClass("selected"));
  if ($("#game div").hasClass("selected")) {
    return;
  } else {
    $("#winMessage").html("Congratulations! You have won with " + noOfClicks + " clicks<br /> Please click 'New game' to start again.");
    $("#winDiv").show();
  }
}

//Start of game
$seedGame();

//Restart a game if the "#newGame" button is clicked
$("#newGame").click(function () {
  'use strict';
  noOfClicks = 0;
  $("#game div").removeClass("selected");
  $seedGame();
  $("#winDiv").hide();
  $("#game").show();
});

/* When one of the divs is clicked, toggle that div and
the 4 surrounding divs. Then increment the click counter
update the click counter, and then check for the win
condition */
$("#game div").click(function () {
  'use strict';
  var $class = $(this).attr("class"),
    $rowNo = $class.substr(1, 1),
    $columnNo = $class.substr(4, 1),
    $prevColumn = parseInt($columnNo, 10) - 1,
    $nextColumn = parseInt($columnNo, 10) + 1,
    $prevRow = parseInt($rowNo, 10) - 1,
    $nextRow = parseInt($rowNo, 10) + 1,
    box1 = "r" + $rowNo + "c" + $columnNo,
    box2 = "r" + $prevRow + "c" + $columnNo,
    box3 = "r" + $nextRow + "c" +  $columnNo,
    box4 = "r" + $rowNo + "c" + $nextColumn,
    box5 = "r" + $rowNo + "c" + $prevColumn;
  $switchBox(box1);
  $switchBox(box2);
  $switchBox(box3);
  $switchBox(box4);
  $switchBox(box5);
  noOfClicks += 1;
  updateClicks();
  $checkStatus();
});
