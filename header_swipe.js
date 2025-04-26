

let touchstartX = 0;
let touchendX = 0;

const header = document.getElementById('swipe');

header.addEventListener('touchstart', function(event) {
  touchstartX = event.changedTouches[0].screenX;
}, false);

header.addEventListener('touchend', function(event) {
  touchendX = event.changedTouches[0].screenX;
  handleSwipe();
}, false);

function handleSwipe() {
  const swipeDistance = touchendX - touchstartX;

  // Small tolerance so small touches don't trigger
  if (Math.abs(swipeDistance) < 100) return;

  const currentPage = window.location.pathname.split("/").pop(); // gets 'about.html', etc.

  if (swipeDistance < 0) {
    // Swiped Left
    switch(currentPage) {
      case "about.html":
        window.location.href = "project.html";
        break;
      case "project.html":
        window.location.href = "quiz.html";
        break;
      case "quiz.html":
        window.location.href = "contact.html";
        break;
      default:
        window.location.href = "about.html";
    }
  } else {
    // Swiped Right
    switch(currentPage) {
      case "project.html":
        window.location.href = "about.html";
        break;
      case "quiz.html":
        window.location.href = "project.html";
        break;
      case "contact.html":
        window.location.href = "quiz.html";
        break;
      default:
        window.location.href = "contact.html";
    }
  }
}
