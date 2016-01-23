var numOfPlayers;
var nextButton = $("#btn-next");
var backButton = $("#btn-back");
var buttonGroup = $("#btn-group");
var number = $("#number");
var coverContainer = $(".cover-container");
var gameSetting = $("#game-setting");
var table = null;
var total = [];
var bids = [];
var wins = [];
var players = [];
var state = true;

nextButton.on("click", function () {
	numOfPlayers = parseInt(number.html());

	state = false;

	gameSetting.css("display", "none");

	if (!table) {
		table = document.createElement("table");
		var row1 = document.createElement("tr");
		var row2 = document.createElement("tr");
		var row3 = document.createElement("tr");
		var row4 = document.createElement("tr");
		table.appendChild(row1);
		table.appendChild(row2);
		table.appendChild(row3);
		table.appendChild(row4);

		var cell11 = document.createElement("td");
		var cell21 = document.createElement("td");
		var cell31 = document.createElement("td");
		var cell41 = document.createElement("td");

		cell11.innerHTML = "TOTAL";
		cell21.innerHTML = "PLAYERS";
		cell31.innerHTML = "BIDS";
		cell41.innerHTML = "WINS";

		row1.appendChild(cell11);
		row2.appendChild(cell21);
		row3.appendChild(cell31);
		row4.appendChild(cell41);

		// create row total
		for (var i = 0; i < numOfPlayers; i++) {
			total[i] = document.createElement("td");
			total[i].innerHTML = "0";
			row1.appendChild(total[i]);

			players[i] = document.createElement("td");
			players[i].innerHTML = "Player" + (i + 1).toString();
			row2.appendChild(players[i]);

			bids[i] = document.createElement("td");
			bids[i].innerHTML = "<div contenteditable=\"true\">0</div>";
			row3.appendChild(bids[i]);

			wins[i] = document.createElement("td");
			wins[i].innerHTML = "<div contenteditable=\"true\">0</div>";
			row4.appendChild(wins[i]);
		}

		coverContainer[0].insertBefore(table, buttonGroup[0]);
		table = $(table);
	} else {
		table.css("display", "");
	}
});

backButton.on("click", function () {
	if (state) {
		window.location.href = "/src/index.html";
	} else {
		gameSetting.css("display", "");

		if (table) {
			table.css("display", "none");
		}
	}
});