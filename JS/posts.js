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


