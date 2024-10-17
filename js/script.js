document.addEventListener('DOMContentLoaded', function() {
  var outputElement = document.getElementById('output');
  var inputElement = document.getElementById('command-input');

  outputElement.innerHTML = '<img src="./assets/images/bubble_try.gif" class="lower-image" alt="About Image" style="width:500px">';


  inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      var command = inputElement.value.trim();
      var response = '';
  
      if (command.toLowerCase() === 'commands') {
        response = '<img src="./assets/images/bubble_commands.gif" class="lower-image" alt="About Image" style="width:500px">';
      } else if (command.toLowerCase() === 'hello') {
        response = '<img src="./assets/images/bubble_hello.gif" class="lower-image" alt="About Image" style="width:500px">';
      } else if (command.toLowerCase() === 'hi') {
        response = '<img src="./assets/images/bubble_hello.gif" class="lower-image" alt="About Image" style="width:500px">';
      } else if (command.toLowerCase() === 'hey') {
        response = '<img src="./assets/images/bubble_hello.gif" class="lower-image" alt="About Image" style="width:500px">';
      } else if (command.toLowerCase() === 'about') {
        response = '<img src="./assets/images/about_google_2.png" alt="About Image" style="width:970px; margin-left:-10px; margin-top:-10px">';
      } else if (command.toLowerCase() === 'help') {
        response = '<img src="./assets/images/bubble_commands.gif" class="lower-image" alt="About Image" style="width:500px">';
      } else if (command.toLowerCase() === 'facts') {
        response = '<img src="./assets/images/facts_google.png" alt="About Image" style="height:450px; margin-left:-10px; margin-top:-10px">';
      } else {
        response = 'Command not recognized.';
      }

      outputElement.innerHTML = response;

      inputElement.value = '';
      outputElement.scrollTop = 0;
    }
  });
  
  var hamburgerIcon = document.getElementById("hamburger-icon");
  hamburgerIcon.addEventListener('click', function() {
    var menu = document.getElementById("navbar-menu");
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    } else {
      menu.classList.add("active");
    }
  });
});
