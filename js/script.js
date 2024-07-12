document.addEventListener('DOMContentLoaded', function() {
  var outputElement = document.getElementById('output');
  var inputElement = document.getElementById('command-input');

  outputElement.innerHTML = 'You can type below! Try saying "commands"';

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
        response = '<img src="./assets/images/about_google.png" alt="About Image" style="width:100%; height:auto;">';
      } else if (command.toLowerCase() === 'help') {
        response = 'Type "commands" to see a list of available commands.';
      } else if (command.toLowerCase() === 'facts') {
        response = 'Here are some fun facts about me: I love movies and recently produced a feature length film, I love travelling and spent my gap year in Italy, and I love to cook';
      } else {
        response = 'Command not recognized.';
      }

      outputElement.innerHTML = response;

      inputElement.value = '';
      outputElement.scrollTop = 0;
    }
  });
});