(function (global) {
	var xyz = {};
	var insertHtml = function (selector, htmlPath) {
		var targetElem = document.querySelector(selector);
		fetch(htmlPath).then(response => response.text()).then(text => {
			targetElem.innerHTML = text;
	  	});
	};
	function loadAdmission(event) {
		insertHtml("#main-content", "snippet/admission.html");
	}
	function loadAchievements(event) {
		insertHtml("#main-content", "snippet/achievements.html");
	}
	function loadAboutUs(event) {
		insertHtml("#main-content", "snippet/about-us.html");
	}
	document.addEventListener("DOMContentLoaded", function (event) {
		insertHtml("#main-content", "snippet/home.html");
		document.querySelector("#admission").addEventListener("click", loadAdmission);
		document.querySelector("#achievements").addEventListener("click", loadAchievements);
		document.querySelector("#about-us").addEventListener("click", loadAboutUs);
	});
	global.xyz = xyz;
})(window);