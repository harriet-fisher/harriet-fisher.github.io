function switchTab(tabName) {
  var tabs = document.querySelectorAll('.tab-content');
  var tabButtons = document.querySelectorAll('.tab');

  tabs.forEach(tab => tab.style.display = 'none');
  tabButtons.forEach(button => {
    button.classList.remove('active');
    // Here we remove the inline style for the tab buttons to make sure CSS takes over
    button.style.backgroundColor = '';
    button.style.color = '';
  });

  var activeTabContent = document.getElementById(tabName);
  var activeTabButton = document.querySelector(".tab[data-tab='" + tabName + "']");
  if (activeTabContent && activeTabButton) {
    activeTabContent.style.display = 'block';
    activeTabButton.classList.add('active');
    activeTabButton.style.backgroundColor = '#f0f0f0';
    activeTabButton.style.color = '#000';
  }
}

document.getElementById('tab-bar').addEventListener('click', function(event) {
  if (event.target.classList.contains('tab')) {
      switchTab(event.target.getAttribute('data-tab'));
  }
});

document.addEventListener('DOMContentLoaded', function() {
  switchTab('coding');
});
