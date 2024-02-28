(function (global) {
	var xyz = {};
	var actNav = ["#admission", "#achievements", "#about-us"];
	function remStyle() {
		for (x of actNav) {
			document.querySelector(x).classList.remove("active-nav");
		}
	}
	var insertHtml = function (selector, htmlPath) {
		var targetElem = document.querySelector(selector);
		fetch(htmlPath).then(response => response.text()).then(text => {
			targetElem.innerHTML = text;
		});
	};
	function loadAdmission(event) {
		remStyle();
		event.target.classList.add('active-nav');
		insertHtml("#main-content", "snippet/admission.html");
	}
	function loadAchievements(event) {
		console.log(event)
		remStyle();
		event.target.classList.add('active-nav');
		insertHtml("#main-content", "snippet/achievements.html");
	}
	function loadAboutUs(event) {
		remStyle();
		event.target.classList.add('active-nav');
		insertHtml("#main-content", "snippet/about-us.html");
	}
	document.addEventListener("DOMContentLoaded", function (event) {
		remStyle();
		insertHtml("#main-content", "snippet/home.html");
		document.querySelector("#admission").addEventListener("click", loadAdmission);
		document.querySelector("#achievements").addEventListener("click", loadAchievements);
		document.querySelector("#about-us").addEventListener("click", loadAboutUs);
	});
	global.xyz = xyz;
})(window);