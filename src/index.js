(function () {
  var nextMark = (function () {
    var mark = "o";
    return function nextMark() {
      if (mark === "o") {
        mark = "x";
      } else {
        mark = "o";
      }
      return mark;
    };
  })();

  function coordinateSelector(row, column) {
    return 'td[data-row="' + row + '"][data-column="' + column + '"]';
  }

  function checkHorizontalWin(symbol, row, column) {
    var winning = 0;
    for (var i = column - 4; i <= column + 4; i++) {
      var localValue = document.querySelector(coordinateSelector(row, i));
      if (localValue) {
        if (symbol === localValue.innerHTML) {
          winning++;
        } else {
          winning = 0;
        }
        if (winning === 5) {
          return true;
        }
      }
    }
    return false;
  }

  function checkVerticalWin(symbol, row, column) {
    var winning = 0;
    for (var i = row - 4; i <= row + 4; i++) {
      var localValue = document.querySelector(coordinateSelector(i, column));
      if (localValue) {
        if (symbol === localValue.innerHTML) {
          winning++;
        } else {
          winning = 0;
        }
        if (winning === 5) {
          return true;
        }
      }
    }
    return false;
  }

  function checkDiagonalWin(symbol, row, column) {
    var winning = 0;
    var x = row - 4;
    var y = column - 4;
    while (x <= row + 4) {
      var localValue = document.querySelector(coordinateSelector(x, y));
      if (localValue) {
        if (symbol === localValue.innerHTML) {
          winning++;
        } else {
          winning = 0;
        }
        if (winning === 5) {
          return true;
        }
      }
      x++;
      y++;
    }

    winning = 0;
    x = row + 4;
    y = column - 4;
    while (x >= row - 4) {
      localValue = document.querySelector(coordinateSelector(x, y));
      if (localValue) {
        if (symbol === localValue.innerHTML) {
          winning++;
        } else {
          winning = 0;
        }
        if (winning === 5) {
          return true;
        }
      }
      x--;
      y++;
    }
    return false;
  }

  function checkWinCondition(symbol, row, column) {
    if (
      checkHorizontalWin(symbol, row, column) ||
      checkVerticalWin(symbol, row, column) ||
      checkDiagonalWin(symbol, row, column)
    ) {
      if ("x" === symbol) {
        alert("Player 1 won!");
      } else {
        alert("Player 2 won!");
      }
    }
  }

  function initCell(rownumber, columnnumber) {
    var cell = document.createElement("td");
    cell.dataset.row = rownumber;
    cell.dataset.column = columnnumber;
    cell.addEventListener("click", function markCell(e) {
      var symbol = nextMark();
      e.target.innerHTML = symbol;
      e.target.removeEventListener("click", markCell);
      checkWinCondition(symbol, rownumber, columnnumber);
    });
    return cell;
  }

  function initRow(rownumber) {
    var row = document.createElement("tr");
    row.append(
      initCell(rownumber, 0),
      initCell(rownumber, 1),
      initCell(rownumber, 2),
      initCell(rownumber, 3),
      initCell(rownumber, 4)
    );
    return row;
  }

  function initializeBoard() {
    var board = document.getElementById("board");
    board.append(initRow(0), initRow(1), initRow(2), initRow(3), initRow(4));
  }

  if (document.readyState !== "loading") {
    initializeBoard();
  } else {
    document.body.addEventListener("DOMContentLoaded", initializeBoard);
  }
})();
