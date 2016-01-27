var numOfPlayers;
var nextButton = $("#btn-next");
var backButton = $("#btn-back");
var buttonGroup = $("#btn-group");
var number = $("#number");
var coverContainer = $(".cover-container");
var table = null;
var total = [];
var bids = [];
var wins = [];
var players = [];

var state = 0;
var stateUpperLimit;

var gameSetting = $("#game-setting");
var gameTable = $("#game-table");
var gameResult = $("#game-result");

nextButton.on("click", onNextButtonClicked);
backButton.on("click", onBackButtonClicked);

function onNextButtonClicked() {
	switch (state) {
		case 0: // continue from 0-th page (setting page), show gameTable, hide gameSetting and gameResult
			state = 1;

			numOfPlayers = parseInt(number.html());
			stateUpperLimit = calculateStateUpperLimit(numOfPlayers);

			showGameTablePage();

			table = buildGameTable(numOfPlayers);
			gameTable.append(table);
			break;
		case 1: // TODO
			state = 2;
			break;
		// TODO: more cases
	}
}

function calculateStateUpperLimit(numOfPlayers) {
	var top = (52 - 52 % numOfPlayers) / numOfPlayers;
	// if numOfPlayers = 5, top = 10, count = 19 (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1)
	// if numOfPlayers = 10, top = 5, count = 9 (1, 2, 3, 4, 5, 4, 3, 2, 1)
	var count = top * 2 - 1;

	return count + 1; // including last page which is gameResult page
}

function onBackButtonClicked() {
	switch (state) {
		case 0: // 0-th page is the game setting page, back should go back to game start page.
			window.location.href = "/src/index.html";
			break;
		case 1: // navigate from 1st page to 0-th page, show gameSetting, hide gameTable and gameResult
			state = 0;
			showGameSettingPage();
		// TODO: more cases
	}
}

function showGameSettingPage() {
	gameTable.css("display", "none");
	gameResult.css("display", "none");
	gameSetting.css("display", "");
}

function showGameTablePage() {
	gameResult.css("display", "none");
	gameSetting.css("display", "none");
	gameTable.css("display", "");
}

function showGameResultPage() {
	gameSetting.css("display", "none");
	gameTable.css("display", "none");
	gameResult.css("display", "");
}

function buildGameTable(numOfPlayers) {
	var table = document.createElement("table");

	// There are 4 fixed rows: TOTAL, PLAYERS, BIDS, WINS
	var rowTotal = document.createElement("tr");
	var rowPlayers = document.createElement("tr");
	var rowBids = document.createElement("tr");
	var rowWins = document.createElement("tr");
	table.appendChild(rowTotal);
	table.appendChild(rowPlayers);
	table.appendChild(rowBids);
	table.appendChild(rowWins);

	// The 1st column shows hardcoded strings
	var cell11 = document.createElement("td");
	var cell21 = document.createElement("td");
	var cell31 = document.createElement("td");
	var cell41 = document.createElement("td");
	cell11.innerHTML = "TOTAL";
	cell21.innerHTML = "PLAYERS";
	cell31.innerHTML = "BIDS";
	cell41.innerHTML = "WINS";
	rowTotal.appendChild(cell11);
	rowPlayers.appendChild(cell21);
	rowBids.appendChild(cell31);
	rowWins.appendChild(cell41);

	// Dynamically build the other numOfPlayers columns
	for (var i = 0; i < numOfPlayers; i++) {
		// Build total score for i-th player
		total[i] = document.createElement("td");
		total[i].innerHTML = "0";
		rowTotal.appendChild(total[i]);

		// Build player name for i-th player
		players[i] = document.createElement("td");
		players[i].innerHTML = "Player" + (i + 1).toString();
		rowPlayers.appendChild(players[i]);

		// Build editable bids for i-th player
		bids[i] = document.createElement("td");
		bids[i].innerHTML = "<div contenteditable=\"true\">0</div>";
		rowBids.appendChild(bids[i]);

		// Build editable wins for i-th player
		wins[i] = document.createElement("td");
		wins[i].innerHTML = "<div contenteditable=\"true\">0</div>";
		rowWins.appendChild(wins[i]);
	}

	return table;
}
