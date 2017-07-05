//options.js
function appendRow(theSite){
	

	var table = document.getElementById("myTable");
	var row = table.insertRow(1);

	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);

	cell1.innerHTML = '<button class= "check" ></button>';
	cell2.innerHTML = '<button class= "trash" ></button>';
	cell3.innerHTML = '<button class= "reload" ></button>';

	cell4.innerHTML = theSite.date; 
	
	cell5.innerHTML = theSite.site;

}

function updateTable() {
	var storedData = localStorage.getItem("site");
	console.log(storedData);
	if(storedData){
		var arrayData = JSON.parse(storedData);
		for(var i = 0; i < arrayData.length; i++){
			console.log("current object is: " + arrayData[i]);
			appendRow(arrayData[i]);
			console.log("working");
		}

	}
	
}

function findRow(storedSites, url){
	for (var i = 0; i < storedSites.length; i++){
		if(storedSites[i].site = url){
			return i; 
		}
	}

}


function removeRow(){
	console.log("hello " + this.parentNode.parentNode.rowIndex);
	//get index of row to remove
	var index = this.parentNode.parentNode.rowIndex;

	//remove the site from array
	var storedData = localStorage.getItem("site");
	var arrayData = JSON.parse(storedData);


	var currentSite =  this.parentNode.parentNode.cells[4].innerHTML;
	var i = findRow(storedData, currentSite + 1);
	//find ind
	//var r = arrayData.indexOf(index);
	console.log("index is: " + index);
	
	
	arrayData.splice(i, 1);
	localStorage.setItem("site", JSON.stringify(arrayData));

	console.log("the new data is " + arrayData);
	console.log("storage has: " + localStorage.site);
	//get index of row to remove and remove it from table 
	document.getElementById("myTable").deleteRow(index);


}


updateTable();

var trashButtons = document.getElementsByClassName("trash");
for (var i =0; i< trashButtons.length; i++){
	trashButtons[i].addEventListener("click", removeRow);
}




