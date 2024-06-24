// Efficient event listener for showing/hiding header
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var triggerHeight = 208; // Adjust as needed

    if (window.scrollY >= triggerHeight) {
      header.style.display = 'block';
    } else {
      header.style.display = 'none';
    }
  });

  // Function to reveal element by ID
  function revealElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.style.display = 'block'; // or 'inline' as per your requirement
    } else {
      console.error('Element with id ' + elementId + ' not found.');
    }
  }

  // Function to hide element by ID
  function hideElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.style.display = 'none';
    } else {
      console.error('Element with id ' + elementId + ' not found.');
    }
  }