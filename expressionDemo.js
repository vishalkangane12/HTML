//JS code...not a part of angular....
window.onload = function(){
	console.log('loaded');
	let selectOption = getDocumentElementById("show_table");
	for(ii = 1; ii <= 30; ii++){
		let option = document.createElement("option");
		let textNode = document.createTextNode(ii);
		option.value = ii;
		option.appendChild(textNode);
		selectOption.appendChild(option);
	}
}

function getDocumentElementById(id){
	return document.getElementById(id);
}

function showTable(){
	let option = getDocumentElementById("show_table").value;
	var ul = getDocumentElementById("unOrderedList");
	deleteAllChilds(ul);
	for(let ii = 1; ii <= 10; ii++){
		let li = document.createElement("li");
		let textNode = document.createTextNode(ii*option);
		li.appendChild(textNode);
		ul.appendChild(li);
	}
}

function deleteAllChilds(ul){
	console.log('deleting');
	console.log(ul.childNodes.length);
	while(ul.hasChildNodes()){
		ul.removeChild(ul.childNodes[0]);
	}
}