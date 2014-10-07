var myForm = document.getElementById("toDoList"); //myForm here in yellow is what we've labelled our form to be - see <form id = "myForm">
var list = document.getElementById("listItems");
// var doneUndoBtnText = document.createTextNode("Done");

toDoList.addEventListener("submit", function (event) {
	console.log("We've just added this list item: " + this.title.value); //this logs the words "this film is " then logs whatever is typed in.
	
	event.preventDefault();//prevents page from being refreshed and prevents info being sent back to the sercer

	var title = this.title.value; //establishes new variable taking the input value

	var listItem = document.createElement("li"); //see above we had to define the var list
	var text = document.createTextNode(title);
	listItem.appendChild(text);
	list.appendChild(listItem);

	var deleteButtonText = document.createTextNode("Delete");
	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(deleteButtonText);
	deleteBtn.addEventListener("click", deletion);
	listItem.appendChild(deleteBtn);
	console.log("creating button");	

	var doneUndoBtnText = document.createTextNode("Done");
	var doneUndoBtn = document.createElement("button");
	doneUndoBtn.appendChild(doneUndoBtnText);
	doneUndoBtn.addEventListener("click", strikeOnOut);
	listItem.appendChild(doneUndoBtn);
	console.log("creating button2");	
	
	this.title.value = "";//clears out the input box after you've saved it
});

var deletion = function ( event ) {
	this.parentElement.remove();
};

var strikeOnOut = function ( event ) {
	console.log(this.parentElement);
	// 	if(this.innerHTML="Done"){
	// 	this.innerHTML="Undo";
	// } else {
	// 	this.innerHTML="Done";
	// }
	this.parentElement.classList.toggle("done");
	if(this.innerHTML==="Done"){
		this.innerHTML="Undo";
	} else if(this.innerHTML==="Undo") {
		this.innerHTML="Done";
	};
};

//WORKS START
// var myForm = document.getElementById("toDoList"); //myForm here in yellow is what we've labelled our form to be - see <form id = "myForm">
// var list = document.getElementById("toDoList");

// toDoList.addEventListener("submit", function (event) {
// 	console.log("We've just added this list item: " + this.title.value); //this logs the words "this film is " then logs whatever is typed in.
	
// 	event.preventDefault();//prevents page from being refreshed and prevents info being sent back to the sercer

// 	var title = this.title.value; //establishes new variable taking the input value

// 	var listItem = document.createElement("li"); //see above we had to define the var list
// 	var text = document.createTextNode(title);
// 	listItem.appendChild(text);
// 	list.appendChild(listItem);

// 	var deleteButtonText = document.createTextNode("Delete");
// 	var deleteBtn = document.createElement("button");
// 	deleteBtn.appendChild(deleteButtonText);
// 	deleteBtn.addEventListener("click", deletion);
// 	listItem.appendChild(deleteBtn);
// 	console.log("creating button");	

	
// 	this.title.value = "";//clears out the input box after you've saved it
// });

// var deletion = function ( event ) {
// 	this.parentElement.remove();
// };
//END
// toDoList.addEventListener("submit", function (event) {
// 	console.log("this film is " + this.title.value); //this logs the words "this film is " then logs whatever is typed in.
// 	event.preventDefault();//prevents page from being refreshed and prevents info being sent back to the sercer

// 	var title = this.title.value; //establishes new variable taking the input value

// 	var listItem = document.createElement("li"); //see above we had to define the var list
// 	var text = document.createTextNode(title);
// 	listItem.appendChild(text);
// 	list.appendChild(listItem);
	
// 	this.title.value = "";//clears out the input box after you've saved it
// });
