var $ = function (id) { return document.getElementById(id); };


var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var addScore = function () {
	names.push($("name").value);
	scores.push($("score").value);
}

var sum = 0;
for (var i = 0; i < scores.length; i++) {
	sum +=parseInt(scores[i]);
}
var averageScore = sum / scores.length;

var showResults = function(){
	var h2Node = document.createElement("h2");
	var h2TextValue = document.createTextNode("Results");
	h2Node.append(h2TextValue);
	document.body.appendChild(h2Node)

	var averageNode = document.createElement("p");
	var averageTextValue = document.createTextNode("Average Score: " + averageScore);
	averageNode.append(averageTextValue);
	document.body.appendChild(averageNode);

	var highNode = document.createElement("p");
	var highTextValue = document.createTextNode("Highest Score: " + scores[0]);
	highNode.append(highTextValue);
	document.body.appendChild(highNode);
}

var displayResults = function() {
	$("results");
	scores.sort(function(a,b){return b-a})

	 
	showResults();
}

var displayScores = function() {
	
	var h2Node = document.createElement("h2");
	var h2TextValue = document.createTextNode("Scores");
	h2Node.append(h2TextValue);
	document.body.appendChild(h2Node);


	var table = $("scores_table");
	var tBody = table.tBodies[0];
	
	if (tBody === undefined) {
		tBody = document.createElement("tbody");
		table.appendChild(tBody);
	}
	for (i = 0; i < scores.length; i++) {
		var row = tBody.insertRow(-1);
		var textNode = document.createTextNode(names[i]);
		var cellNode = row.insertCell(-1);
		cellNode.appendChild(textNode);
		var scoreNode= document.createTextNode(scores[i])
		var cellNode2 = row.insertCell(-1);
		cellNode2.appendChild(scoreNode);
	}
	
}

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


