"use strict";

var ideaBoxJS = (function(originalIdeaBox) {

	/*make a function available to other javascript files that removes posts
	from the DOM and from the array*/

	originalIdeaBox.removePost = function(potato, postList) {
		for (var u = 0; u < postList.length; u++) {
			if (potato === postList[u]) {
				var arrayNum = u;
			}
		};
		event.target.parentElement.remove();
		return arrayNum;
	};
	return originalIdeaBox;
})(ideaBoxJS || {});