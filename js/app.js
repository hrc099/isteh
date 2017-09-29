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

function zoom(img) {
    
}

// Timeout function, activate animation on each image with a delay
// Makes images load one by one
function timeout(i) {
    setTimeout(function() {
        images[i].classList.add('load-in');
        images[i].addEventListener('click', function() {
            
        });
    }, 100*i);
}

// Get all img elements in HTMLCollection
var images = document.getElementsByClassName('img');

// Call timeout() function on each img
for(i = 0; i < images.length; i++) {
    timeout(i);
}

