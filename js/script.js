(function (global) {
	var xyz = {};
	var actNav = ["#admission", "#achievements", "#about-us"];
	function remStyle(remNav) {
		document.querySelector(remNav).classList.remove("active-nav");
	}
	var insertHtml = function (selector, htmlPath, activeNav) {
		if(activeNav !== "") {
			for(x of actNav) {
				remStyle(x);
			}
			document.getElementById(activeNav).classList.add("active-nav");
		}
		var targetElem = document.querySelector(selector);
		fetch(htmlPath).then(response => response.text()).then(text => {
			targetElem.innerHTML = text;
	  	});
	};
	function loadAdmission(event) {
		insertHtml("#main-content", "snippet/admission.html", "admission");
	}
	function loadAchievements(event) {
		insertHtml("#main-content", "snippet/achievements.html", "achievements");
	}
	function loadAboutUs(event) {
		insertHtml("#main-content", "snippet/about-us.html", "about-us");
	}
	document.addEventListener("DOMContentLoaded", function (event) {
		insertHtml("#main-content", "snippet/home.html", "");
		document.querySelector("#admission").addEventListener("click", loadAdmission);
		document.querySelector("#achievements").addEventListener("click", loadAchievements);
		document.querySelector("#about-us").addEventListener("click", loadAboutUs);
	});
	global.xyz = xyz;
})(window);