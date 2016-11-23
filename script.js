var board = document.getElementById("board");

var width = 10;
var height = 10;
var num_mines = 10;

var num_squares = width * height;

// Place Mines:

var squares = [];


for (i = 0; i < width; i++) {
  for(j = 0; j < height; j++) {
      x_coord = i;
      y_coord = j;
      coords = [i, j, 0];
      squares.push(coords);
  }
}

for (i = 0; i < num_mines; i++) {
  rand = Math.floor((Math.random() * num_squares));
  if (squares[rand][2] === 0) {
    squares[rand][2] = -1;
  } else {
    i --;
  }
}

for (s in squares){
}

// Draw Board:

var insert = "";

for (i = 0; i < height; i++) {
  insert += "<div class='row' id='row-" + i + "'>";
  for (j = 0; j < width; j ++) {
    index = ((i+1)*(j+1))-1;
     
    if (squares[index][2] === -1) {
      insert += "<div class='board-square bomb' id='" + index + "'></div>";
    } else if (false) {
      insert += "<div class='board-square one' id='" + index + "'></div>";
    } else {
      insert += "<div class='board-square' id='" + index + "'></div>";
    }
  }
  insert += "</div>";
}


board.insertAdjacentHTML("beforeend", insert);

