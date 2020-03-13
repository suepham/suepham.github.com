const arrow = document.getElementById("down");
const trash = document.getElementById("trash");
const recycle = document.getElementById("recycle");
const go = document.getElementById("start");
const navLinks = document.querySelectorAll("nav ol li a");
const storyNav = document.getElementById("story");
const mainLinks = document.querySelectorAll("#main ul li a")
const serviceLinks = document.querySelectorAll("#services ul li a");

//get all sections on the website
const topPage = document.getElementById("top");
const topContent = document.getElementById("topContent");
const aboutSec = document.getElementById("about");
const missionSec = document.getElementById("mission");
const contactSec = document.getElementById("contactus");
const tipsSec = document.getElementById("tips");
const resourcesSec = document.getElementById("resources");
const experienceSec = document.getElementById("experience");
const manufacturingSec = document.getElementById("manufacturing");
const packagingSec = document.getElementById("packaging");
const transportationSec = document.getElementById("transportation");
const purchaseSec = document.getElementById("purchase");
const disposalSec = document.getElementById("disposal");
const factsSec = document.getElementById("facts");
const footerSec = document.querySelector("footer");
const soonSec = document.getElementById("soon");
const faqSec = document.getElementById("faq");
const donateSec = document.getElementById("donate");

const thisButton = document.querySelector('.cube');
const textField = document.getElementById('amount');
const defaultButtonText = document.querySelector('.default-state span');
const defaultButton = document.querySelector('.default-state');

function smoothScroll(event) {
    event.preventDefault();

    const targetID = event.target.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);

    const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top);
    window.scrollBy({top: originalTop, left: 0, behavior: "smooth"});

};

//about section on the top nav
mainLinks[1].addEventListener("click", function(e){
	topContent.style.display = "none";
	factsSec.style.display = "none";
	experienceSec.style.display = "none";
	contactSec.style.display = "none";
	missionSec.style.display = "none";	
	tipsSec.style.display = "none";
	resourcesSec.style.display = "none";
	soonSec.style.display = "none";
	faqSec.style.display = "none";
	donateSec.style.display = "none";
	aboutSec.style.display = "block";
	topPage.style.paddingBottom = "80px";

	const ab = Math.floor(aboutSec.getBoundingClientRect().top-20);
	
	window.scrollBy({top: ab, left: 0, behavior: "smooth"});
});

//mission section on the top nav
mainLinks[2].addEventListener("click", function(e){
	topContent.style.display = "none";
	factsSec.style.display = "none";
	experienceSec.style.display = "none";
	aboutSec.style.display = "none";
	contactSec.style.display = "none";
	tipsSec.style.display = "none";
	resourcesSec.style.display = "none";
	soonSec.style.display = "none";
	faqSec.style.display = "none";
	donateSec.style.display = "none";
	missionSec.style.display = "block";
	topPage.style.paddingBottom = "80px";

	const mission = Math.floor(missionSec.getBoundingClientRect().top-59);
	
	window.scrollBy({top: mission, left: 0, behavior: "smooth"});
});

//contact section on the top nav
mainLinks[3].addEventListener("click", function(e){
	topContent.style.display = "none";
	factsSec.style.display = "none";
	experienceSec.style.display = "none";
	aboutSec.style.display = "none";
	missionSec.style.display = "none";
	tipsSec.style.display = "none";
	resourcesSec.style.display = "none";
	soonSec.style.display = "none";
	faqSec.style.display = "none";
	donateSec.style.display = "none";
	contactSec.style.display = "block";
	topPage.style.paddingBottom = "80px";

	const con = Math.floor(contactSec.getBoundingClientRect().top-59);
	
	window.scrollBy({top: con, left: 0, behavior: "smooth"});
});

//tips section on the top nav
mainLinks[4].addEventListener("click", function(e){
	topContent.style.display = "none";
	factsSec.style.display = "none";
	experienceSec.style.display = "none";
	aboutSec.style.display = "none";
	missionSec.style.display = "none";
	contactSec.style.display = "none";
	resourcesSec.style.display = "none";
	soonSec.style.display = "none";
	faqSec.style.display = "none";
	donateSec.style.display = "none";
	tipsSec.style.display = "block";
	topPage.style.paddingBottom = "80px";

	const tip = Math.floor(tipsSec.getBoundingClientRect().top-20);
	
	window.scrollBy({top: tip, left: 0, behavior: "smooth"});
});

//resources section on the top nav
mainLinks[5].addEventListener("click", function(e){
	topContent.style.display = "none";
	factsSec.style.display = "none";
	experienceSec.style.display = "none";
	aboutSec.style.display = "none";
	missionSec.style.display = "none";
	contactSec.style.display = "none";
	tipsSec.style.display = "none";
	soonSec.style.display = "none";
	faqSec.style.display = "none";
	donateSec.style.display = "none";
	resourcesSec.style.display = "block";
	topPage.style.paddingBottom = "80px";

	const resource = Math.floor(resourcesSec.getBoundingClientRect().top-59);
	
	window.scrollBy({top: resource, left: 0, behavior: "smooth"});
});

//scroll to experience section when the user clicks on it
arrow.addEventListener("click", function(){
    const startEx = document.getElementById("experience");

    const experience = Math.floor(startEx.getBoundingClientRect().top-52);
	
	window.scrollBy({top: experience, left: 0, behavior: "smooth"});

});

//listen to user clicking on start button
go.addEventListener("click", function(){
	const startMan = document.getElementById("manufacturing");
	footerSec.setAttribute("class", "hide");
    startMan.style.display = "block";

    const manufacture = Math.floor(startMan.getBoundingClientRect().top);
	
	window.scrollBy({top: manufacture, left: 0, behavior: "smooth"});
	setTimeout(function() {partOne()}, 250);
});

//manufacturing section of the experience
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
	
	//user presses the space bar to increase the percentage and show amount of oil
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

//packaging section of the experience
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
				setTimeout(function(){partThree()}, 5000);
			});
		});
	});
}

//transportation section of the experience
function partThree() {
	navLinks[1].style.color = "rgb(104, 104, 104)";
	navLinks[2].style.color = "white";
	packagingSec.style.display = "none";
	transportationSec.style.display = "block";
}	

//drop truck at store
function allowDrop(ev) {
	ev.preventDefault();
}

//drag truck to store
function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

//once truck is dropped off at the store
function drop(ev) {
	const transport = document.getElementById("transportationFact");

	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
	transport.style.display = "block";
	setTimeout(function(){partFour()}, 5000);
}

//purchasing section of the experience
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

//disposal section of the experience
function partFive() {
	const recycling = document.getElementById("recycleFact");
	const trashing = document.getElementById("trashMove");

	navLinks[3].style.color = "rgb(104, 104, 104)";
	navLinks[4].style.color = "white";
	purchaseSec.style.display = "none";
	disposalSec.style.display = "block";

	trash.addEventListener("click", function(e){
		e.preventDefault();
		trashing.style.display = "block";
		trash.style.background = "#cc0000";
	});
	
	recycle.addEventListener("click", function(e){
		e.preventDefault();
		recycle.style.background = "#32CD32";
		trashing.style.display = "none";
		recycling.style.display = "block";
		setTimeout(function(){endStory()}, 5000);
	});
}

//show facts page once the user finishes the story
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

//FAQ link in footer
serviceLinks[0].addEventListener("click", function(e){
	topContent.style.display = "none";
	factsSec.style.display = "none";
	experienceSec.style.display = "none";
	aboutSec.style.display = "none";
	missionSec.style.display = "none";
	contactSec.style.display = "none";
	tipsSec.style.display = "none";
	resourcesSec.style.display = "none";
	soonSec.style.display = "none";
	donateSec.style.display = "none";
	faqSec.style.display = "block";
	topPage.style.paddingBottom = "80px";

	const fre = Math.floor(faqSec.getBoundingClientRect().top-50);

	window.scrollBy({top: fre, left: 0, behavior: "smooth"});
});

//collapse FAQ 
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

//volunteer link in footer
serviceLinks[1].addEventListener("click", function(e){
	topContent.style.display = "none";
	factsSec.style.display = "none";
	experienceSec.style.display = "none";
	aboutSec.style.display = "none";
	missionSec.style.display = "none";
	contactSec.style.display = "none";
	tipsSec.style.display = "none";
	resourcesSec.style.display = "none";
	faqSec.style.display = "none";
	donateSec.style.display = "none";
	soonSec.style.display = "block";
	topPage.style.paddingBottom = "80px";

	const con = Math.floor(soonSec.getBoundingClientRect().top-59);

	window.scrollBy({top: con, left: 0, behavior: "smooth"});
});

//donate link in footer
serviceLinks[3].addEventListener("click", function(e){
	topContent.style.display = "none";
	factsSec.style.display = "none";
	experienceSec.style.display = "none";
	aboutSec.style.display = "none";
	missionSec.style.display = "none";
	contactSec.style.display = "none";
	tipsSec.style.display = "none";
	resourcesSec.style.display = "none";
	faqSec.style.display = "none";
	soonSec.style.display = "none";
	donateSec.style.display = "block";
	topPage.style.paddingBottom = "80px";

	const don = Math.floor(donateSec.getBoundingClientRect().top-59);

	window.scrollBy({top: don, left: 0, behavior: "smooth"});
});

//donate button
thisButton.addEventListener("click", function(event){
  if(textField.value != ''){
    this.className = "cube flip";
  } else {
    defaultButtonText.innerHTML = "Please enter an amount";
    defaultButton.setAttribute("style", "background-color: rgba(205,0,4,1.00)");
    setTimeout(function() {
      defaultButtonText.innerHTML = "Donate";
      defaultButton.removeAttribute("style");
    }, 2000);
  }
});

//other resources links in footer
serviceLinks[4].addEventListener("click", function(e){
	topContent.style.display = "none";
	factsSec.style.display = "none";
	experienceSec.style.display = "none";
	aboutSec.style.display = "none";
	missionSec.style.display = "none";
	contactSec.style.display = "none";
	tipsSec.style.display = "none";
	soonSec.style.display = "none";
	faqSec.style.display = "none";
	donateSec.style.display = "none";
	resourcesSec.style.display = "block";
	topPage.style.paddingBottom = "80px";

	const resource = Math.floor(resourcesSec.getBoundingClientRect().top-59);
	
	window.scrollBy({top: resource, left: 0, behavior: "smooth"});
});
