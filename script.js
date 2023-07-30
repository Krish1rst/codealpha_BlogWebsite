
  // Get the menu icon and menu content elements
  const menuIcon = document.querySelector(".menu-icon");
  const menuContent = document.querySelector(".menu-content");

  // Function to toggle the menu content visibility
  function toggleMenu() {
    menuContent.classList.toggle("show");
  }

  // Event listener for the menu icon click
  menuIcon.addEventListener("click", toggleMenu);

  // Close the menu content when clicking outside it
  window.addEventListener("click", function(event) {
    if (!menuContent.contains(event.target) && !menuIcon.contains(event.target)) {
      menuContent.classList.remove("show");
    }
  });


// Function to handle smooth scrolling to target section
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    const offset = 60; // Offset to handle menu bar height
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;

    // If screen width is less than 768px (smaller screens), use smooth scrolling
    if (window.innerWidth < 768) {
      const duration = 500; // Set the duration of the animation in milliseconds
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const scrollAmount = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, scrollAmount);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      // Easing function for smoother animation
      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    } else { // For larger screens, scroll instantly without animation
      element.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }
}window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const offset = window.scrollY;

  if (offset > 100) { // Adjust the offset value to determine when to fix the navbar
    navbar.classList.add('fixed-navbar');
  } else {
    navbar.classList.remove('fixed-navbar');
  }
});

// Function to create a shareable link based on the current URL
function generateShareableLink() {
  return 'https://example.com/share?url=' + encodeURIComponent(window.location.href);
}

// Function to share using the Web Share API (fallback to other methods if not supported)
function shareAnywhere() {
  if (navigator.share) {
    navigator.share({
        title: 'Check out this awesome website!',
        url: generateShareableLink(),
      }).then(() => console.log('Shared successfully!'))
      .catch(error => console.error('Error sharing:', error));
  } else {
    // Fallback to individual sharing methods
    shareOnFacebook();
    shareOnTwitter();
    shareViaEmail();
  }
}

// Function to open a new window for sharing via Facebook
function shareOnFacebook() {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(generateShareableLink()), '_blank');
}

// Function to open a new window for sharing via Twitter
function shareOnTwitter() {
  window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(generateShareableLink()) + '&text=Check%20out%20this%20awesome%20website!', '_blank');
}

// Function to create a shareable link via email
function shareViaEmail() {
  window.location.href = 'mailto:?subject=Check%20out%20this%20awesome%20website&body=' + encodeURIComponent(generateShareableLink());
}

// Attach click event listener to the button
document.getElementById('shareBtn1').addEventListener('click', shareAnywhere);
document.getElementById('shareBtn2').addEventListener('click', shareAnywhere);
document.getElementById('shareBtn3').addEventListener('click', shareAnywhere);
document.getElementById('shareBtn4').addEventListener('click', shareAnywhere);
document.getElementById('shareBtn6').addEventListener('click', shareAnywhere);
document.getElementById('shareBtn5').addEventListener('click', shareAnywhere);
document.getElementById('shareBtn7').addEventListener('click', shareAnywhere);
document.getElementById('shareBtn8').addEventListener('click', shareAnywhere);
document.getElementById('shareBtn9').addEventListener('click', shareAnywhere);
document.getElementById('shareBtn10').addEventListener('click', shareAnywhere);


//Read more button function

var blogContent = document.querySelector('.blog-content');
var readMoreButton = document.getElementById('read-more-btn');

readMoreButton.addEventListener('click', function() {
  blogContent.classList.toggle('show-full');

  if (blogContent.classList.contains('show-full')) {
    this.innerText = 'Read less';
  } else {
    this.innerText = 'Read more';
  }
});

