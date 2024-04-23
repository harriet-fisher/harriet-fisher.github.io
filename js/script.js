document.addEventListener('DOMContentLoaded', function() {
  var outputElement = document.getElementById('output');
  var inputElement = document.getElementById('command-input');

  inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      var command = inputElement.value.trim();
      var response = '';
      
      // Define responses to different commands
      if (command.toLowerCase() === 'commands') {
        response = 'Available commands: hello, about, help';
      } else if (command.toLowerCase() === 'hello') {
        response = 'Hello! How can I assist you today?';
      } else if (command.toLowerCase() === 'about') {
        response = 'I am a web developer with a passion for UI/UX design.';
      } else if (command.toLowerCase() === 'help') {
        response = 'Type "commands" to see a list of available commands.';
      } else {
        response = 'Command not recognized.';
      }

      // Add the command and response to the output
      outputElement.innerHTML += '<li>' + command + ': ' + response + '</li>';

      // Clear the input
      inputElement.value = '';

      // Scroll to the bottom of the output to show the latest entry
      outputElement.scrollTop = outputElement.scrollHeight;
    }
  });
});
