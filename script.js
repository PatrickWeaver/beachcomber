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

/*
for (s in squares) {
  x = squares[s][0] - 1;
  y = squares[s][1] - 1;
  index_s = "" + x + y;
  index = parseInt(index_s);
  console.log("Square:");
  console.log("s: " + s);
  console.log("x: " + x);
  console.log("y: " + y);
  console.log("index: " + index);
  console.log("");
  
  
}
*/

for (s in squares){
  neighbors = [];
  square = squares[s];
  s1 = parseInt(s) + 1;
  ss = parseInt(s);
  //console.log("s: " + s + ", s%10: " + s % 10 + ", s+1: " + s1 + ", s+1 % 10: " + s1%10);
  // Find next to mine:
  if (ss%10 === 0) {
    neighbors = [10, 9, -1, -10, -11];
  } else if (ss%10 ===9) {
    neighbors = [11, 10, 1, -9, -10];
  } else {
    neighbors = [11, 10, 9, 1, -1, -9, -10, -11];
  }

  if (square[2] === -1){
    for (n in neighbors) {
      if (squares[ss - neighbors[n]]) {
        if (squares[ss - neighbors[n]][2] != -1){
          squares[ss - neighbors[n]][2] += 1;
        }
      }
    }
  }
}

// Draw Board:

var insert = "";

for (i = 0; i < height; i++) {
  insert += "<div class='row' id='row-" + i + "'>";
  for (j = 0; j < width; j++) {
    
    
    index_s = "" + i + j;
    index = parseInt(index_s);
    //console.log(index);
    square = squares[index];
    
    if (square[2] === -1) {
      insert += "<div class='board-square bomb unclicked' id='" + index + "'><div class='index'>" + index + "</div></div>";
    } else if (square[2] === 1) {
      insert += "<div class='board-square one unclicked' id='" + index + "'><div class='index'>" + index + "</div></div>";
    } else if (square[2] === 2) {
      insert += "<div class='board-square two unclicked' id='" + index + "'><div class='index'>" + index + "</div></div>";
    } else if (square[2] === 3) {
      insert += "<div class='board-square three unclicked' id='" + index + "'><div class='index'>" + index + "</div></div>";
    } else if (square[2] === 4) {
      insert += "<div class='board-square four unclicked' id='" + index + "'><div class='index'>" + index + "</div></div>";
    } else if (square[2] === 5) {
      insert += "<div class='board-square five unclicked' id='" + index + "'><div class='index'>" + index + "</div></div>";
    } else if (square[2] === 6) {
      insert += "<div class='board-square six unclicked' id='" + index + "'><div class='index'>" + index + "</div></div>";
    } else if (square[2] === 7) {
      insert += "<div class='board-square seven unclicked' id='" + index + "'><div class='index'>" + index + "</div></div>";
    } else if (square[2] === 8) {
      insert += "<div class='board-square eight unclicked' id='" + index + "'><div class='index'>" + index + "</div></div>";
    } else {
      insert += "<div class='board-square blank unclicked' id='" + index + "'><div class='index'>" + index + "</div></div>";
    }
  }
  insert += "</div>";
}


board.insertAdjacentHTML("beforeend", insert);


$( ".board-square" ).click(function() {
  $( this ).removeClass("unclicked")
});

$( ".bomb" ).click(function() {
  alert("💣 You lose 💣");
});

