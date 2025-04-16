// script.js

document.addEventListener("DOMContentLoaded", () => {
    const joinForm = document.querySelector(".join-form");
  
    joinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = joinForm.querySelector("input[type='email']").value;
  
      // For now, we'll just log the email
      console.log("Email submitted:", email);
  
      // Optional: You could integrate Formspree or Mailchimp here
      alert("Thanks for joining the NODATA crew!");
  
      // Reset form
      joinForm.reset();
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
  
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  });

// Smooth scroll
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Scroll-triggered animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold: 0.15 });
  
  document.querySelectorAll('.slide-in').forEach(el => {
    observer.observe(el);
  }); 