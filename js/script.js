document.addEventListener('DOMContentLoaded', function() {
  var outputElement = document.getElementById('output');
  var inputElement = document.getElementById('command-input');

  outputElement.innerHTML = '<img src="./assets/images/bubble_try.gif" class="lower-image" alt="About Image">';


  inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      var command = inputElement.value.trim();
      var response = '';
  
      if (command.toLowerCase() === 'commands') {
        response = '<img src="./assets/images/bubble_commands.gif" class="lower-image" alt="About Image">';
      } else if (command.toLowerCase() === 'hello') {
        response = '<img src="./assets/images/bubble_hello.gif" class="lower-image" alt="About Image">';
      } else if (command.toLowerCase() === 'hi') {
        response = '<img src="./assets/images/bubble_hello.gif" class="lower-image" alt="About Image">';
      } else if (command.toLowerCase() === 'hey') {
        response = '<img src="./assets/images/bubble_hello.gif" class="lower-image" alt="About Image">';
      } else if (command.toLowerCase() === 'about') {
        response = '<img src="./assets/images/about_google_2.png" alt="About Image">';
      } else if (command.toLowerCase() === 'help') {
        response = '<img src="./assets/images/bubble_commands.gif" class="lower-image" alt="About Image">';
      } else if (command.toLowerCase() === 'facts') {
        response = '<img src="./assets/images/facts_google.png" alt="About Image">';
      } else {
        response = 'Command not recognized.';
      }

      outputElement.innerHTML = response;

      inputElement.value = '';
      outputElement.scrollTop = 0;
    }
  });
});