function switchTab(tabName) {
    var tabs = document.querySelectorAll('.tab-content');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = 'none';
    }
  
    var tabButtons = document.querySelectorAll('.tab');
    for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove('active');
    }
  
    var activeTabContent = document.getElementById(tabName);
    var activeTabButton = document.querySelector("[onclick=\"switchTab('" + tabName + "')\"]");

    if (activeTabContent) {
        activeTabContent.style.display = 'block';
    }
    
    if (activeTabButton) {
        activeTabButton.classList.add('active');
        activeTabButton.focus(); // Focus on the active tab button
    }
}
  
  window.addEventListener('DOMContentLoaded', (event) => {
    switchTab('tab1');
  });
  