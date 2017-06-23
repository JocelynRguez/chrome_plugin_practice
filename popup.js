// popup.js

document.getElementById("description").innerHTML = "counter: " + localStorage.current;


for (var i = 0; i< localStorage.length; i++){
	console.log( localStorage.key(i) );
}


function listClick() {
	if(localStorage.current){
		localStorage.current = Number(localStorage.current) + 1;
	}else{
		localStorage.current = 1;
	}
	
	document.getElementById("description").innerHTML = "counter: " + localStorage.current;
}

function openOptions(){
	window.open("background.html");
}

function addSite(){
	var site = document.URL; 
}

document.getElementById("button_list").addEventListener("click", listClick);
document.getElementById("options").addEventListener("click",openOptions);
document.getElementById("good").addEventListener("click", addSite)


window.onunload = function () {
	console.log("Hello");
	//this will remove current each time popup closes
	//localStorage.removeItem("current");
}
//var list = document.getElementById("list");


//list.addEventListener("click", myFunction())
