





let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

console.log(tabTogglers);

tabTogglers.forEach(function(toggler) {
  toggler.addEventListener("click", function(e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      
      tabTogglers[i].parentElement.classList.remove("bg-black"); tabTogglers[i].parentElement.classList.remove("text-white"); tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
      
    }
    e.target.parentElement.classList.add("-mb-px", "bg-black", "text-white");
  });
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("menu").style.position = "fixed";
    document.getElementById("menu").style.top = "0";
    document.getElementById("menu").style.background = "#F5D76E";
    document.getElementById("menu").style.transition = "1s";
    document.getElementById("menu").style.boxShadow = "0 0 30px rgba(0,0,0,.075)";
    document.getElementById("menu").style.borderBottom = "none";
    document.getElementById("menu").style.zIndex = "99";
  } else {
    document.getElementById("menu").style.position = "absolute";
    document.getElementById("menu").style.top = "0";
    document.getElementById("menu").style.background = "transparent";
    document.getElementById("menu").style.boxShadow = "none";
    document.getElementById("menu").style.borderBottom = "";
    document.getElementById("menu").style.zIndex = "99";
    document.getElementById("menu").style.color = "white";
  }
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 50) {
    document.getElementById("menu").style.transition = "1s";
    document.getElementById("menu").style.zIndex = "99";
    document.getElementById("menu").style.background = "#F5D76E";
    document.getElementById("menu").style.color = "black";
  }
  
  else {
   
    document.getElementById("menu").style.zIndex = "99";
    
  }
}


// count js
$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 90);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(1000, counter[j], j);
  }
});
// count js end


$(window).load(function() {
  $(".btn-nav").on("click tap", function() {
    $(".nav-content1").toggleClass("showNav hideNav").removeClass("hidden");
    $(this).toggleClass("animated");
  });
});
