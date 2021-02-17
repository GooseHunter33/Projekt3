let battlefield = [];
 var wrongs = 20;
 var score = 0;
let positions = document.querySelectorAll(".skepp-grid button");
triesOnScreen();
shipsOnBoard();

function triesOnScreen() {
  document.getElementById("tries").innerHTML =
    "Du har " + wrongs + " försök kvar";
}
function shipsOnBoard() {
    document.getElementById("bombs").innerHTML =
    "Det finns 10 antal skepp och du har träffat "+ score; 
}

function generateBoard(width, height, numShipsToPlace) {
  let grid = document.querySelector(".skepp-grid");
  let shipsPlaced = 0;
  grid.style.gridTemplateColumns = "repeat(" + width + ", 1fr)";
  for (let y = 0; y < height; y++) {
    battlefield.push([]);
    for (let x = 0; x < width; x++) {
      // <button class="location-btn" data-coordinate="0,0" type="button"></button>
      if (shipsPlaced < numShipsToPlace) {
        if (Math.random() < 0.25) {
          battlefield[y].push(1);
          shipsPlaced++;
        } else {
          battlefield[y].push(0);
        }
      } else {
        battlefield[y].push(0);
      }
      let newButton = document.createElement("button");
      newButton.classList.add("location-btn");
      newButton.setAttribute("data-coordinate", x + "," + y);
      newButton.setAttribute("type", "button");
      newButton.addEventListener("click", testLocation);
      grid.append(newButton);
    }
  }
  console.log(battlefield);
}

function testLocation(event) {
  let coordinate = event.target.getAttribute("data-coordinate").split(",");
  let x = coordinate[0];
  let y = coordinate[1];
  var g = 0;


  console.log(battlefield[x][y]);
  //for (let index = 0; index < 11; index++) {

  if (battlefield[x][y] != 1) {
    console.log("No ship");
     wrongs-- ;
    // tries(10);

   // event.target.style.backgroundColor = "#FF080";
   event.target.classList.add("miss-button");
    // hur skriver man ut en ny färg för den man klickar fel på. newButton.setAttribute("color")
    // battlefield[x][y].add("color")
  } else {
    console.log("HIT!");
    score++;
     event.target.classList.add("hit-button");
    //document.location.reload(); för att starta om spelet
  }
  triesOnScreen();
  shipsOnBoard();

  if (wrongs <= 0) {
    alert("du har överskridit försöken, spelet startar om");
    for (let index = 0; index < 10; index++) {
        event.target.classList.add("miss-button")
        
    }
    document.location.reload();
  }
  if(score>=10){
alert("GRATTIS du har lyckats träffa alla skepp, klappa dig själv på axeln. Spelet startar nu om")
 document.location.reload();
  }
  console.log(wrongs)
}



/*
Vill att denna funktion ska räkna antalet gånger man klickat fel o sedan skicka en popup som säger att dina fel är för många
Och sedan starta om sidan, men nu är wrongs odefinireat och dessutom så tror jag inte att den räknar rätt i trielocation loopen
bör man istället ha tries utanför loopen, men hur ska man då connecta den för varje fel man gör när man klickar i testlocation?

Har försökt att skriva ut en ny färg för varje knapp man trycker på men det funkar inte heller. Då den inte låter mig att byta attribut(setattribute) 
som man tidigare gjorde på "Newbutton".


    function tries(antal) {
      var wrongs = 0;
      if (wrongs <= antal) {
        alert("du har överskridit försöken, vänligen starta om");
        document.location.reload();
      }
    }
*/
//} hör ihop med for loopen

generateBoard(8, 8, 10);
