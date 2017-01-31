"use strict";

var ideaBoxJS = (function(originalIdeaBox) {

	/*establish arrays to hold the posts and merch options*/

	var postLog = [];
	var merchLog = [];

	/*allow generating of molecules on chosen merch by pressing the enter key on the input field,
	and ask for a merch choice if none selected*/

	var inputField = document.getElementById("inputText");
	inputField.addEventListener("keypress", function (event) {
		if (event.which === 13) {
			var postText = inputField.value;
			if (postText === "") {
				alert("Please give me a molecule to generate.");
				return;
			}
			var merchOptions = document.getElementsByName("merch");
			var merchSelection;

			for (var k = 0; k <= merchOptions.length) {
				alert("Please select merchandise on which to generate molecule.");
				return;
			} else if (merchOptions[k].checked === true) {
				merchSelection = merchOptions[k].id;
				ideaBoxJS.addPost(postText, merchSelection);
				return;
			}
		}
	}
});

	/*attach an event listener to the delete button that removes the appropriate post
	from the DOM and from the array on a click*/

function postEventListener () {
	var deleteProperty = document.getElementsByClassName("deleteMe");
	var yup = deleteProperty.length - 1;

	deleteProperty[yup].addEventListener('click', function() {
		var targetID = event.target.id;
		var arrayNum = ideaBoxJS.removePost(targetID, postLog);
		postLog.splice(arrayNum, 1);
		merchLog.splice(arrayNum, 1);
	});

/*attach an event listener to the edit button that displays the message-to-be-edited
in the input field and removes it from the array*/

	var editButton = document.getElementsByClassName("editMe");
	var length = editButton.length -1;

	editButton[length].addEventListener("click", function() {
		var targetID = event.target.id;
		var indexNum = ideaBoxJS.removePost(targetID, postLog);
		postLog.splice(indexNum, 1);
		merchLog.splice(indexNum, 1);
		inputField.value = String(targetID);
		inputField.focus();
	});

}

/*remove the first post from the array and from the DOM when the listLimiter function is triggered*/

function postLimiter () {
	var firstPost = postLog[0];
	postLog.shift();
	var actualPost = document.getElementById(firstPost);
	actualPost.parentElement.remove();
}

/*add time and date to each post as it's submitted*/

function timeStampPlz () {
	var now = new Date();
	var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
	var time = [ now.getHours(), now.getMinutes*(), now.getSeconds() ];
	var suffix = ( time[0] < 12 ) ? "AM" : "PM";
	time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
	time[0] = time[0] || 12;
		for ( var i = 1; i <3; i++ ) {
			if ( time[i] < 10 ) {
				time[i] = "0" + time[i];
			}
		}
	return date.join("/") + " " + time.join(":") + " " + suffix;
}

/*make an addPost function available to other javascript files
in order to append new posts to the board while keeping
the postLog array private

make the text text of each post its ID in order to make it easy
to find when editing or deleting*/

originalIdeaBox.addPost = function(potatoe, tomato) {
	var postList = document.getElementById("ideaBoxList");
	var createLi = document.createElement("LI");
	var currentTime = timeStampPlz();

	var readyToOutput =
		`<h6>${currentTime}</h6><h5>${tomato}</h5>
		<p>${potatoe}</p>
		<button class="delete-me" id="${potatoe}">Delete</button>
		<button class="edit-me" id="${potatoe}">Edit</button>`;
	createLi.innerHTML = readyToOutput;
	postList.appendChild(createLi);

	inputField.value = "";

	postLog.push(potatoe);
	merchLog.push(tomato);
	postEventListener();

	if (postLog.length > 20) {
		listLimiter();
	};
},

/*make a function available to the other javascript files that clears all
posts from the ideaBoxJS and the postLog array while keeping the array
private*/

ideaBoxJS.goodbyePosts = function(booty) {
	if (event.target.id === "clearBoardButton") {
		postLog = [];
		merchLog = [];
		var goodbyeBoard = document.getElementById("ideaBoxList");
		goodbyeBoard.innerHTML = "";
		} else {
			console.log("Syntax Error please piss off.");
		}
	};

	return ideaBoxJS;

})(ideaBoxJS || {});
