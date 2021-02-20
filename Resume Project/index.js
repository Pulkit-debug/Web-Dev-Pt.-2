var navItems = document.querySelectorAll(".nav-menu a");

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetId = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetId);

    // var currentCount = 0;
    var scrollInterval = setInterval(function () {
      var targetCoordinates = targetSection.getBoundingClientRect();
      if (targetCoordinates.top < 0) {
        clearInterval(scrollInterval);
        return;
      }
      window.scrollBy(0, 50);
    }, 15);
  });
}

// Animations for Skill Bars-----------------

var progress_bar = document.querySelectorAll(".skill-progress > div");
var skill_container = document.getElementById("skills-container");



function initializeWidthZero() {
    for(var bar of progress_bar) {
        bar.style.width = 0 + "%";
    }
}

initializeWidthZero();
var animationDone = false;


function startAnimation() {
    for(let bar of progress_bar) {
        let currentWidth = 0;
        let progressInterval = setInterval(function() {
            var targetWidth = bar.getAttribute("data-skill-level");
            if(currentWidth >= targetWidth) {
                clearInterval(progressInterval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + "%";
        },12)
    }
}



// this function will check if the skill section is visible or not.
function checkScroll() {
    var coordinates = skill_container.getBoundingClientRect();
    // getting the coordinates
    if(!animationDone && coordinates.top <= window.innerHeight) {
        animationDone = true;
        startAnimation();
    }
    else if(coordinates.top > window.innerHeight) {
        animationDone = false;
        initializeWidthZero();
    }
}

window.addEventListener("scroll", checkScroll);
