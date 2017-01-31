"use strict";

var ideaBoxJS = (function(originalIdeaBox) {
	var postsField = document.getElementById("inputText");
	var clearButton = document.getElementById("clearBoardButton");
	var darkCheck = document.getElementById("darkThemeCheckBox");
	var largeCheck = document.getElementById("largeTextCheckBox")
	var objectRequest = new XMLHttpRequest();

	/*
	load the messages from a JSON file and attach usernames to them so that they don't display under the name "undefined"
	*/

	objectRequest.addEventListener("load", function (potato) {
		var objectOfPosts = JSON.parse(event.target.responseText);
		var merchOptions = ["Mug", "LaptopSkin", "SlouchyShirt", "Sticker"]

		for (var i = 0; i < objectOfPosts.length; i++) {
				var eachPost = objectOfPosts[i];
				var eachMerch = merchOptions[i]
				ideaBoxJS.addPost(String(eachPost), eachMerch);
		};
	});

	objectRequest.addEventListener("error", function(){
		console.log("Molecule Generator knows all");
	});

	objectRequest.open("GET", "posts.json");
	objectRequest.send();

	/*allow the user to change the color scheme by checking or unchecking a box*/

	darkCheck.addEventListener('change', function(){
		var bodyElement = document.getElementById("realBody");
		var navElement = document.getElementById("fixedNav");
		bodyElement.classList.toggle("darkTheme");
		bodyElement.classList.toggle("lightLetters");
		navElement.classList.toggle("darkTheme");
		navElement.classList.toggle("lightLetters");
	});

	/*allow the user to change the size of all text by checking or unchecking a box*/

	largeCheck.addEventListener('change', function(){
		var listOfPosts = document.getElementById("ideaBoxList");
		listOfPosts.classList.toggle("largeFont");
	});

	/*allow the user to clear all posts from the board*/

	clearButton.addEventListener('click', function() {
		ideaBoxJS.goodbyePosts();
	});

return originalIdeaBox;

})(ideaBoxJS || {});