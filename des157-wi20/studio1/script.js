(function(){

    "use strict";
    
    const myForm = document.querySelector("form");
    const order = document.querySelector("div");

    document.addEventListener("submit", function(event){
        //prevent default
        event.preventDefault();

        //get input values
        const size = document.getElementById("size").value;
        const noun1 = document.getElementById("noun1").value;
        const num = parseFloat(document.getElementById("num").value);
        const noun2 = document.getElementById("noun2").value;
        const liquid = document.getElementById("liquid").value;
        const adj = document.getElementById("adj").value;
        const name = document.getElementById("name").value;

        //reveal madlib with inputs
        order.innerHTML = `<p>Order for ${name}: <br> 
        A ${size} ${noun1} latte with ${num}% <br>  ${noun2} milk, no ${liquid}, and <br>${adj} ice.</p>`;

    });

}());
