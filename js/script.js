document.addEventListener('DOMContentLoaded', function() {
  var outputElement = document.getElementById('output');
  var inputElement = document.getElementById('command-input');

  outputElement.innerHTML = '<img src="./assets/images/bubble_commands.gif" class="lower-image" alt="About Image">';


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
        response = '<img src="./assets/images/about.png" alt="About Image">';
      } else if (command.toLowerCase() === 'help') {
        response = '<img src="./assets/images/bubble_commands.gif" class="lower-image" alt="About Image">';
      } else if (command.toLowerCase() === 'facts') {
        response = '<img src="./assets/images/facts_google.png" alt="About Image">';
      } else {
        response = '<img src="./assets/images/bubble_commands.gif" class="lower-image" alt="About Image">';
      }

      outputElement.innerHTML = response;

      inputElement.value = '';
      outputElement.scrollTop = 0;
    }
  });
  var hamburgerIcon = document.getElementById('hamburger-icon');
  var navbar = document.getElementById('navbar');

  hamburgerIcon.addEventListener('click', function() {
    navbar.classList.toggle('show');
  });
  var skillItems = document.querySelectorAll('#skills li');
  skillItems.forEach(function(skill) {
    skill.addEventListener('click', function() {
      playSparkle(skill);
    });
  });

  function playSparkle(element) {
    const skillColors = {
      "Python": "#4CAF50",
      "Data Analysis": "#FF5733",
      "Project Coordination": "#FFD700",
      "Creative Design": "#8E44AD",
      "3D Modelling": "#33FFF0",
      "Financial Analysis": "#FF33C7",
      "C/C++/C#": "#92B0F5",
      "Statistics": "#E23827",
      "HTML/CSS": "#E2D127",
      "Software Development": "#8ACA9C",
      "Business Analytics": "#B095F2",
      "Adobe CC": "#EE2260",
      "Game Design": "#F7A92A",
      "Econometrics": "#66FF6B",
    };
  
    const sparkleColor = skillColors[element.innerText] || "#FFFFFF";
  
    for (let i = 0; i < 10; i++) { 
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");
  
      const size = Math.random() * 8 + 4;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.position = "absolute";
      sparkle.style.left = `${Math.random() * element.clientWidth - size / 2}px`;
      sparkle.style.top = `${Math.random() * element.clientHeight - size / 2}px`;
  
      sparkle.style.backgroundColor = sparkleColor;
  
      element.appendChild(sparkle);
  
      sparkle.addEventListener("animationend", () => sparkle.remove());
    }
  }
});