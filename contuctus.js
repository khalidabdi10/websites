// Hamburger menu and dark/light mode toggle functionality
// Toggle menu dropdown
    const menuIcon = document.getElementById('menuIcon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener
    (
      'click', () => {
      menu.classList.toggle('show');
                     }

  );

  
  // JavaScript for collapsible FAQ
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      question.classList.toggle('active');
      const answer = question.nextElementSibling;
      answer.classList.toggle('open');
    });
  });
      
   
    document.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('show');
      }
    });
  
  // Place this script at the bottom of your body or in a separate JS file

 document.addEventListener('DOMContentLoaded', () => {
      const sections = document.querySelectorAll('.section');

      const options = {
        threshold: 0.2
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, options);

      sections.forEach(section => {
        observer.observe(section);
      });
    });