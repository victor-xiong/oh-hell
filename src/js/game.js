var numOfPlayers;
var nextButton = $("#btn-next");
var number = $("#number");

nextButton.on("click", function () {
	numOfPlayers = parseInt(number.html());
});