const arrow = document.getElementById("down");

function smoothScroll(event) {
    event.preventDefault();

    const targetID = event.target.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);

    const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top);
    window.scrollBy({top: originalTop, left: 0, behavior: "smooth"});

};

arrow.addEventListener("click", function(){
    const work = document.getElementById("featureOne");

    const feature = Math.floor(work.getBoundingClientRect().top-80);
	
	window.scrollBy({top: feature, left: 0, behavior: "smooth"});

});