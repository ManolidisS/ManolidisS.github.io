document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll("nav ul a");
    var currentPage = window.location.href.split("/").pop();
  
    navLinks.forEach(function(link) {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("currentP");
      }
    });
  });
  
  /* CHATGPT-4 You are my hero */