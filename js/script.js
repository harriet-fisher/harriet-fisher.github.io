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
        response = 'Hello! Nice to meet you, Im Harriet :)';
      } else if (command.toLowerCase() === 'about') {
        response = 'Im a rising senior at the University of Chicago<br>studying Economics, Creative Computing, and Computer Science.';
      } else if (command.toLowerCase() === 'help') {
        response = 'Type "commands" to see a list of available commands.';
      } else if (command.toLowerCase() === 'facts') {
        response = 'Here are some fun facts about me: I love movies and<br>recently produced a feature length film, I love travelling<br>and spent my gap year in Italy, and I love to cook';
      } else {
        response = 'Command not recognized.';
      }

      outputElement.innerHTML += '<li><strong>' + command + '</strong>: ' + response + '</li>';

      inputElement.value = '';

      // Scroll to the bottom of the output to show the latest entry
      outputElement.scrollTop = outputElement.scrollHeight;
    }
  });
});
