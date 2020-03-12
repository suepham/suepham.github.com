const arrow = document.getElementById("down");
const trash = document.getElementById("trash");
const recycle = document.getElementById("recycle");
const go = document.getElementById("start");
const navLinks = document.querySelectorAll("nav ol li a");
const storyNav = document.getElementById("story");

const topPage = document.getElementById("top");
const experienceSec = document.getElementById("experience");
const manufacturingSec = document.getElementById("manufacturing");
const packagingSec = document.getElementById("packaging");
const transportationSec = document.getElementById("transportation");
const purchaseSec = document.getElementById("purchase");
const disposalSec = document.getElementById("disposal");
const factsSec = document.getElementById("facts");
const footerSec = document.querySelector("footer");

navLinks.forEach(function(eachLink){
    eachLink.addEventListener("click", smoothScroll);
});

function smoothScroll(event) {
    event.preventDefault();

    const targetID = event.target.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);

    const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top);
    window.scrollBy({top: originalTop, left: 0, behavior: "smooth"});

};

arrow.addEventListener("click", function(){
    const startEx = document.getElementById("experience");

    const experience = Math.floor(startEx.getBoundingClientRect().top-52);
	
	window.scrollBy({top: experience, left: 0, behavior: "smooth"});

});

go.addEventListener("click", function(){
	const back = document.getElementById("blue");
	const startMan = document.getElementById("manufacturing");
	footerSec.setAttribute("class", "hide");
    startMan.style.display = "block";

    const manufacture = Math.floor(startMan.getBoundingClientRect().top);
	
	window.scrollBy({top: manufacture, left: 0, behavior: "smooth"});
	setTimeout(function() {partOne()}, 250);
});

function partOne() {
	let changeNum = document.getElementById("changePercentage");
	let imgOil = document.getElementById("oil");
	let bar = document.getElementById("percentage2");
	let oil = document.getElementById("oilFact");
	storyNav.style.display = "block";
	navLinks[0].style.color = "white";
    topPage.style.display = "none";
    experienceSec.style.display = "none";
	let counter = 0;
	
	document.onkeypress = function(e){
		if (e.keyCode == 32) {
			counter++;
			changeNum.innerHTML = `${counter}%`;
			let barNum = (counter*3.5);
			bar.style.width = `${barNum}px`;
			
			if (counter >= 24) {
				counter = 24;
				oil.style.display = "block";
				imgOil.src = `images/waterbottleoil.svg`;
				setTimeout(function(){partTwo()}, 5000);
			}
		} 
	}
}

function partTwo() {
	const itemOne = document.getElementById("mold");
	const itemTwo = document.getElementById("transfer");
	const itemThree = document.getElementById("fill");
	const labels = document.querySelectorAll("#packaging #check label");
	const pack = document.getElementById("packagingFact");

	navLinks[0].style.color = "rgb(104, 104, 104)";
	navLinks[1].style.color = "white";
	manufacturingSec.style.display = "none";
	packagingSec.style.display = "block";
	labels[0].style.color = "white";

	itemOne.addEventListener("click", function(e){
		labels[0].style.setProperty("text-decoration", "line-through");

		itemTwo.addEventListener("click", function(e){
			labels[1].style.setProperty("text-decoration", "line-through");

			itemThree.addEventListener("click", function(e){
				labels[2].style.setProperty("text-decoration", "line-through");
				pack.style.display = "block";
				setTimeout(function(){partThree()}, 7000);
			});
		});
	});
}

function partThree() {
	navLinks[1].style.color = "rgb(104, 104, 104)";
	navLinks[2].style.color = "white";
	packagingSec.style.display = "none";
	transportationSec.style.display = "block";
}	
function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	const transport = document.getElementById("transportationFact");

	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
	transport.style.display = "block";
	setTimeout(function(){partFour()}, 6000);
}

function partFour() {
	const buy = document.getElementById("buybtn");
	const purchase = document.getElementById("purchaseFact");
	
	navLinks[2].style.color = "rgb(104, 104, 104)";
	navLinks[3].style.color = "white";
	transportationSec.style.display = "none";
	purchaseSec.style.display = "block";

	buy.addEventListener("click", function(e){
		e.preventDefault();
		buy.style.background = "#32CD32";
		buy.innerHTML = "SOLD";
		purchase.style.display = "block";
		setTimeout(function(){partFive()}, 5000);
	});
}

function partFive() {
	const recycling = document.getElementById("recycleFact");

	navLinks[3].style.color = "rgb(104, 104, 104)";
	navLinks[4].style.color = "white";
	purchaseSec.style.display = "none";
	disposalSec.style.display = "block";

	trash.addEventListener("click", function(e){
		e.preventDefault();
		trash.style.background = "#cc0000";
	});
	
	recycle.addEventListener("click", function(e){
		e.preventDefault();
		recycle.style.background = "#32CD32";
		recycling.style.display = "block";
		setTimeout(function(){endStory()}, 5000);
	});
}

function endStory() {
	footerSec.classList.remove("hideFooter");
	arrow.style.display = "none";
	storyNav.style.display = "none";
	factsSec.style.display = "block";
	topPage.style.display = "block";
	footerSec.setAttribute("class", "show");

    const fact = Math.floor(factsSec.getBoundingClientRect().top);
	
	window.scrollBy({top: fact, left: 0, behavior: "smooth"});
	disposalSec.style.display = "none";
	topPage.style.paddingBottom = "10px";
}