function revealElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'inline';
    } else {
        console.error('Element with id ' + elementId + ' not found.');
    }
}

function hideElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'none';
    } else {
        console.error('Element with id ' + elementId + ' not found.');
    }
}

window.addEventListener('scroll', function() {
    var element = document.getElementById('header');
    if (window.scrollY >= 208) {
      element.style.display = 'inline';
    } else {
      element.style.display = 'none';
    }
  });