(function () {
  function initRow() {
    var row = document.createElement("tr");
    row.append(
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td")
    );
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
