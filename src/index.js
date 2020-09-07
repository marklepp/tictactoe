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

  function initCell() {
    var cell = document.createElement("td");
    cell.addEventListener("click", function markCell(e) {
      e.target.innerHTML = nextMark();
      e.target.removeEventListener("click", markCell);
    });
    return cell;
  }

  function initRow() {
    var row = document.createElement("tr");
    row.append(initCell(), initCell(), initCell(), initCell(), initCell());
    return row;
  }

  function initializeBoard() {
    var board = document.getElementById("board");
    board.append(initRow(), initRow(), initRow(), initRow(), initRow());
  }

  if (document.readyState !== "loading") {
    initializeBoard();
  } else {
    document.body.addEventListener("DOMContentLoaded", initializeBoard);
  }
})();
