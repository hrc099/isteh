// Footer needs to be pushed to the bottom of screen like this if there's not enough
// content to push it
// Get screenHeight
var screenHeight = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
// Get screenWidth
var screenWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
// Get html height
var htmlHeight = document.getElementById('html').offsetHeight;

if (htmlHeight < screenHeight) {
    // If window is less wide than medium breakpoint (770px), 
    //footer doesn't need to have 40px margin from main section
    document.getElementById('footer').style.marginTop = screenHeight + 40 - htmlHeight + 'px';
}

// Timeout function, activate animation on each image with a delay
// Makes images load one by one
function timeout(i) {
    setTimeout(function() {
        images[i].classList.add('load-in');
    }, 100*i);
}

// Get all img elements in HTMLCollection
var images = document.getElementsByClassName('img');

// Call timeout() function on each img
for(i = 0; i < images.length; i++) {
    timeout(i);
}

// Lightbox options for img on product gallery page
lightbox.option({
    'albumLabel': 'Rad %1 od %2',
    'fadeDuration': 400,
    'resizeDuration': 500,
    'wrapAround': true
})

// Smooth scroll
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        //$target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          //$target.focus(); // Set focus again
        };
      });
    }
  }
});