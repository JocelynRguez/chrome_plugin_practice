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

	var d = new Date();
	cell4.innerHTML = d.getMonth() + "/" + d.getDay() + "/" + d.getFullYear(); 
	
	cell5.innerHTML = theSite;


	console.log("this is working so far");
}

function updateTable() {
	var storedData = localStorage.getItem("site");
	if(storedData){
		var arrayData = JSON.parse(storedData);
		for(var i = 0; i < arrayData.length; i++){
			appendRow(arrayData[i]);
			console.log("working");
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
	var r = arrayData.indexOf(currentSite);
	console.log("index is: " + r);
	
	
	arrayData.splice(r, 1);
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




