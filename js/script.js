document.addEventListener('DOMContentLoaded', function() {
  var outputElement = document.getElementById('output');
  var inputElement = document.getElementById('command-input');


  inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      var command = inputElement.value.trim();
      var response = '';
  
      if (command.toLowerCase() === 'commands') {
        response = 'Available commands: hello, about, facts, help';
      } else if (command.toLowerCase() === 'hello') {
        response = 'Hello! Nice to meet you, I\'m Harriet :)';
      } else if (command.toLowerCase() === 'hi') {
        response = 'Hi! Nice to meet you, I\'m Harriet :)';
      } else if (command.toLowerCase() === 'hey') {
        response = 'Hey! Nice to meet you, I\'m Harriet :)';
      } else if (command.toLowerCase() === 'about') {
        response = '<img src="./assets/images/about_google_2.png" alt="About Image" style="width:970px; margin-left:-10px; margin-top:-10px">';
      } else if (command.toLowerCase() === 'help') {
        response = 'Type "commands" to see a list of available commands.';
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
});