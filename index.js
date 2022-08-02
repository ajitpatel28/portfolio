AOS.init();

var options1 = {
  strings: ["<h1>Hey I am Ajit ,</h1>"],
  typeSpeed: 45,
  loop: false,
  showCursor: false,
};

var options2 = {
  stringsElement: "#typed-string2",
  typeSpeed: 50,
  backSpeed: 40,
  loop: true,
  showCursor: false,
  startDelay: 1500,
};

var options3 = {
  strings: [
    "Want to discuss something new? Connect with me on Social Media, or send me a message below !",
  ],
  typeSpeed: 15,
  backSpeed: 30,
  loop: true,
  showCursor: false,
  startDelay: 1500,
};
var typed = new Typed(".element1", options1);
var typed = new Typed(".element2", options2);
var typed = new Typed(".element3", options3);

window.onLoad = function () {
  console.log("hello");
};

window.addEventListener("scroll",()=>{
  let target=document.querySelector(".topButton"); 
  window.scrollY>(target.offsetHeight)?target.classList.remove("hidden-button"):target.classList.add("hidden-button");      
});

