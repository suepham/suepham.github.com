(function(){

    "use strict";

    let counter = 0;
    const myPhotos = ["pen.png", "macbook.png", "avocado.png"];
    const ssTitle = ["Pilot G2 Pen", "MacBook Pro", "Avocado AirPods Case"];
    const links = [
        "http://pilotpen.us/brands/g2/g2/", 
        "https://www.apple.com/shop/buy-mac/macbook-pro/13-inch", 
        "https://www.amazon.com/gp/product/B07T6YJL14/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1"
    ];
    const description = [
        "Having a pen is really important because I write my notes in pen, and you never know when you need to write something down. My favorite type of pen is the Pilot G2 because it has gel ink with a sharp tip. It creates very clean and neat lines that I can always rely on. I usually bring multiple black ink pens, and I also bring colorful pens along as well.",
        "My laptop is the most important item in my backpack because all of my work is saved on there. I use it throughout the entire day, and it is what I use to do my homework on. It has everything I need to get through my school day. I mainly use it for the Internet, Microsoft Office, and Adobe Suite. If I ever lose my laptop, I will literally cry and faint.",
        "This is a case for my AirPods. I got it on Amazon because it is super cute, and I love avocados. I wanted a case, so my AirPods don't get scratched. It does take up a lot of space in my backpack pocket, but I can always differentiate my AirPods from someone else. It comes with an avocado ring that makes it easier to hold the case. The case usually draws people's attention."
    ]

    //next and previous buttons on slideshow
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("previous");

    const avo = document.getElementById("avo");
    const watch = document.getElementById("watch");
    const pen = document.getElementById("pen");
    const hydro = document.getElementById("hf")
    const mac = document.getElementById("macbook");
    const chapstick = document.getElementById("chapstick");
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");
    const btn4 = document.getElementById("btn4");
    const btn5 = document.getElementById("btn5");
    const btn6 = document.getElementById("btn6");

    //avocado image
    btn1.setAttribute("class", "hide");
    avo.addEventListener("mouseover", function(){
        btn1.setAttribute("class", "show"); //show btn
    });
    avo.addEventListener("mouseout", function(){
        btn1.setAttribute("class", "hide"); //hide btn
    });
    //watch image
    btn2.setAttribute("class", "hide");
    watch.addEventListener("mouseover", function(){
        btn2.setAttribute("class", "show"); //show btn
    });
    watch.addEventListener("mouseout", function(){
        btn2.setAttribute("class", "hide"); //hide btn
    });
    //pen image
    btn3.setAttribute("class", "hide");
    pen.addEventListener("mouseover", function(){
        btn3.setAttribute("class", "show"); //show btn
    });
    pen.addEventListener("mouseout", function(){
        btn3.setAttribute("class", "hide"); //hide btn
    });
    //hydroflask image
    btn4.setAttribute("class", "hide");
    hydro.addEventListener("mouseover", function(){
        btn4.setAttribute("class", "show"); //show btn
    });
    hydro.addEventListener("mouseout", function(){
        btn4.setAttribute("class", "hide"); //hide btn
    });
    //macbook image
    btn5.setAttribute("class", "hide");
    mac.addEventListener("mouseover", function(){
        btn5.setAttribute("class", "show"); //show btn
    });
    mac.addEventListener("mouseout", function(){
        btn5.setAttribute("class", "hide"); //hide btn
    });
    //chapstick image
    btn6.setAttribute("class", "hide");
    chapstick.addEventListener("mouseover", function(){
        btn6.setAttribute("class", "show"); //show btn
    });
    chapstick.addEventListener("mouseout", function(){
        btn6.setAttribute("class", "hide"); //hide btn
    });

    //change slideshow
    function changeSlideshow(){
        document.getElementById("myimage").src = `images/${myPhotos[counter]}`;
        document.querySelector("h2").innerHTML = `${ssTitle[counter]}`;
        document.getElementById("buythis").href = `${links[counter]}`;
        document.querySelectorAll("p")[0].innerHTML = `${description[counter]}`;
    };

    //next button clicked on slideshow
    nextBtn.addEventListener("click", function(e){
        e.preventDefault;
        changeSlideshow();
        counter++;
        //reset array
        if (counter == 3) {
            counter = 0;
        }
    });

    //previous button clicked on slideshow
    prevBtn.addEventListener("click", function(e){
        e.preventDefault;
        changeSlideshow();
        counter--;
        //reset array
        if (counter == -1) {
            counter = 2;
        }
    });

}());