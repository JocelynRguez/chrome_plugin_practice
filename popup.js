// popup.js

//practice counter to preserve state over localStorage
document.getElementById("description").innerHTML = "counter: " + localStorage.current;



function listClick() {
	if(localStorage.current){
		localStorage.current = Number(localStorage.current) + 1;
	}else{
		localStorage.current = 1;
	}
	
	document.getElementById("description").innerHTML = "counter: " + localStorage.current;
}
//variable for arrayData
var arrayData = [];

//opens options.html
function openOptions(){
	window.open("options.html");
}

//should grab the current url of the opened tab user is on
function addSite(){
	chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
		var url = tabs[0].url;
		arrayData.push(url);
		var data = arrayData.concat([]);
		localStorage.setItem("site", JSON.stringify(data));
	});
	
	getData();
}

function getData() {
	var storedData = localStorage.getItem("site");
	if(storedData){
		arrayData = JSON.parse(storedData);
	}
	console.log("working");
}

for (var i = 0; i< localStorage.length; i++){
	console.log( localStorage.key(i) );
}

document.getElementById("button_list").addEventListener("click", listClick);
document.getElementById("options").addEventListener("click",openOptions);
document.getElementById("good").addEventListener("click", addSite);






