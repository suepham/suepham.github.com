const arrow = document.getElementById("down");

arrow.addEventListener("click", function(){
    const feat = document.getElementById("featured");

    const feature = Math.floor(feat.getBoundingClientRect().top-80);
	
	window.scrollBy({top: feature, left: 0, behavior: "smooth"});

});

// const navi = document.querySelectorAll("nav ul li a");
// const topMe = document.getElementById("welcome");
// const aboutMe = document.getElementById("about");
// const features = document.getElementsByClassName("feature");
// const works = document.getElementById("work");
// const featuredWork = document.getElementById("featured");

// navi[0].addEventListener("click", function(e){
//   e.preventDefault();

//   topMe.style.display = "block";
//   featuredWork.style.display = "block";
//   aboutMe.style.display = "none";
//   for (i=0; i<4; i++) {
//     features[i].style.display = "block";
//   }
//   work.style.display = "none";
// });

// navi[1].addEventListener("click", function(e){
//   e.preventDefault();

//   topMe.style.display = "none";
//   featuredWork.style.display = "none";
//   for (i=0; i<4; i++) {
//     features[i].style.display = "none";
//   }
//   work.style.display = "block";
//   aboutMe.style.display = "none";
// });

// navi[2].addEventListener("click", function(e){
//   e.preventDefault();

//   topMe.style.display = "none";
//   featuredWork.style.display = "none";
//   for (i=0; i<4; i++) {
//     features[i].style.display = "none";
//   }
//   work.style.display = "none";
//   aboutMe.style.display = "block";
// });
