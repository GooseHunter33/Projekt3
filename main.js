let battlefield = [];

let positions = document.querySelectorAll(".skepp-grid button");

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

  console.log(battlefield[x][y]);

  if (battlefield[x][y] != 1) {
    console.log("No ship");
    window.alert("hummer");
  } else {
    console.log("HIT!");
  }
}

generateBoard(8, 8, 10);
