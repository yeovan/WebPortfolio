

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

    // SWIPED LEFT
    if (swipeDistance < -10) {
      // Swiped left
      window.location.href = "about.html";
    }
        else if (swipeDistance < -20) {
        // Swiped left
        window.location.href = "project.html";
        }
        else if (swipeDistance < -30) {
            // Swiped left
            window.location.href = "quiz.html";
        }


    // SWIPED RIGHT 
    else if (swipeDistance > 10) {
      // Swiped right
      window.location.href = "project.html";
    }
    else if (swipeDistance > 20) {
        // Swiped right
        window.location.href = "quiz.html";
    }
    else if (swipeDistance > 30) {
        // Swiped right
        window.location.href = "contact.html";
    }
  }