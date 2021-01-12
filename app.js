
// var button = document.querySelector("#button");

// button.addEventListener('click' , function() {
// var random = Math.floor(Math.random()*3 )+1;
// console.log(random);
// var image = document.querySelector(".number");
// image.src = "number-"+random+".png";
// });

setInterval(function() {
    var random = Math.floor(Math.random()*3 )+1;
    var image = document.querySelector(".number");
    image.src = "number-"+random+".png";
    console.log(random);

    }, 2000);