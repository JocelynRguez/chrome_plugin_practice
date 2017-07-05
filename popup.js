// popup.js

//variable for arrayData
var arrayData = [];

//opens options.html
function openOptions(){
	window.open("options.html");
}

//should grab the current url of the opened tab user is on
function addSite(){
	chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
		var url = tabs[0].url; //get the url of the current tab
		var d = new Date();
		var theDate = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear(); 
		var newObject = {
			site: url,
			date: theDate
		 }
		arrayData.push(newObject);
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


//document.getElementById("button_list").addEventListener("click", listClick);
document.getElementById("options").addEventListener("click",openOptions);


//Auntie Tuna Code

//update the status in the popup
function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

//send message to event listeners (bridge to background which has onMessage event)
function sendBgMessage(message) {
  chrome.runtime.sendMessage(
    {
      action: 'log',
      msg: message
    },
    function(response) { }
  );//*/
}

//gets info to find current tab
function getCurrentTab(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  //chrome.tabs.query gets all tabs that have the specified properties, in this case,
//whether the tabs are active in their windowsand if they are in the current window
  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0]; //url of the current tab
    console.assert(typeof tab.url == 'string', 'tab.url should be a string');
    callback(tab);
  });
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

function downloadHashes(addToStorage){
	console.assert(typeof addToStorage == 'boolean', 'addToStorage should be a boolean');

	if (addToStorage == false) {
		renderStatus("downloading hashes");
	} else if (addToStorage = true) {
		renderStatus("adding hashing and site to whitelist");
	}

	getCurrentTab(function(tab) {
    //  getCurrentTab(function(tab) {
    sendBgMessage("from: " + tab.id + " url: " + tab.url); 
    console.log('current tab id is ' + tab.id);
    chrome.tabs.sendMessage(
      tab.id,
      { action: 'log', msg: 'hello from ' + document.location.href },
      function(response) { console.log("sent hello, got back: " + response.msg); }
    );
	
	});
}


document.getElementById("good").addEventListener("click", function(){
	addSite();
	downloadHashes(true);
});

document.getElementById("debug").addEventListener("click", function(){
	downloadHashes(false);});


// this is torn down and brought up each time the button is clicked.
document.addEventListener('DOMContentLoaded', function() {
  console.log("button> domcontent loaded");
  sendBgMessage("button pressed.")
  renderStatus("all systems go.");
});









