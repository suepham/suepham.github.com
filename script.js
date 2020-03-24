const arrow = document.getElementById("down");

arrow.addEventListener("click", function(){
    const work = document.getElementById("featureOne");

    const feature = Math.floor(work.getBoundingClientRect().top-80);
	
	window.scrollBy({top: feature, left: 0, behavior: "smooth"});

});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

const navi = document.querySelectorAll("nav ul li a");
const topMe = document.getElementById("welcome");
const aboutMe = document.getElementById("about");
const features = document.getElementsByClassName("feature");
const works = document.getElementById("work");

navi[0].addEventListener("click", function(e){
  e.preventDefault();

  topMe.style.display = "block";
  aboutMe.style.display = "none";
  for (i=0; i<4; i++) {
    features[i].style.display = "block";
  }
  work.style.display = "none";
});

navi[1].addEventListener("click", function(e){
  e.preventDefault();

  topMe.style.display = "none";
  for (i=0; i<4; i++) {
    features[i].style.display = "none";
  }
  work.style.display = "block";
  aboutMe.style.display = "none";
});

navi[2].addEventListener("click", function(e){
  e.preventDefault();

  topMe.style.display = "none";
  for (i=0; i<4; i++) {
    features[i].style.display = "none";
  }
  work.style.display = "none";
  aboutMe.style.display = "block";
});
