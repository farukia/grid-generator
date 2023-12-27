/// Grid generation

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
var categories = ["Elements", "Scientists", "Birds", "Rocks and Minerals", "Planets", "Moons", "Dinosaurs", "Mammals", "Animals", "Lab Equipment", "Rocks", "Minerals", "Geologic Time Scales", "Trees", "Parts of a Plant", "Food Science", "Heredity/Genetics", "Stars", "Constellations"];
  
function randomLetter() {
  var randInt = Math.floor(Math.random() * 26);
  return alphabet[randInt];
  }

// function randomCategory() {
//   var randInt = Math.floor(Math.random() * categories.length);
//   return categories[randInt];
//   }


function newGrid() {
  var randInt;
  var randCat;
  var listCopy = [];

  var randIntAlpha;
  var randAlpha;
  var alphabetCopy = [];

  for (var j = 0; j < categories.length; j++) {
    listCopy.push(categories[j]);
  }

  for (var a = 0; a < 26; a++) {
    alphabetCopy.push(alphabet[a]);
  }
  
  for (var i = 1; i < 6; i++) {

    randInt = Math.floor(Math.random() * listCopy.length);
    randCat = listCopy[randInt];
    listCopy.splice(randInt, 1);
    
    randIntAlpha = Math.floor(Math.random() * alphabetCopy.length);
    randAlpha = alphabetCopy[randIntAlpha];
    alphabetCopy.splice(randIntAlpha, 1)

     document.getElementById("letter" + i.toString()).innerHTML = randAlpha;
    document.getElementById("category" + i.toString()).innerHTML = randCat;
    }

  for (var b = 1; b < 26; b++) {
    document.getElementById("input" + b.toString()).value = "";
  }
  
  }

/// Timer

var counter;
var minutes;
var seconds;

resetTimer();

function resetTimer() {
  counter = 360;
  seconds = 0;
  minutes = 0;
  
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      seconds = counter % 60;
      minutes = (counter - seconds) / 60;
      span = document.getElementById("timer");
      if (seconds.toString().length == 2) {
        span.innerHTML = minutes.toString() + ":" + seconds.toString();
      } else {
        span.innerHTML = minutes.toString() + ":0" + seconds.toString();
      }
    }
  
    if (counter == 0) {
      clearInterval(counter);
      alert("Your time has elapsed!");
    }
  
  }, 1000);
}

newGrid();


