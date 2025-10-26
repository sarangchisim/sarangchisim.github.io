// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || 
                    (prefersDarkScheme.matches ? 'dark' : 'light');

// Apply the current theme
document.body.dataset.theme = currentTheme;
themeToggle.innerHTML = currentTheme === 'dark' 
  ? '<i class="fas fa-sun"></i>' 
  : '<i class="fas fa-moon"></i>';

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  const newTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  document.body.dataset.theme = newTheme;
  themeToggle.innerHTML = newTheme === 'dark' 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
  localStorage.setItem('theme', newTheme);
});

// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('toggle');
});

// Close mobile menu when clicking a link
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    burger.classList.remove('toggle');
  });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});

// Add shadow to navbar on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// Enhanced Contact Form Handling
const contactForm = document.querySelector('#contact form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = encodeURIComponent(this.elements['name'].value);
    const email = encodeURIComponent(this.elements['email'].value);
    const message = encodeURIComponent(this.elements['message'].value);
    
    // Create mailto link with proper formatting
    const subject = "Message from your website";
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    const mailtoLink = `mailto:sarang.chizim@gmail.com?subject=${subject}&body=${body}`;
    
    // Try to open email client
    try {
      window.location.href = mailtoLink;
      
      // Optional: Show success message
      setTimeout(() => {
        alert('Your email client should open. Please send the pre-filled email to contact me.');
      }, 500);
      
      // Optional: Clear form
      this.reset();
    } catch (error) {
      alert('Could not open email client. Please email me directly at sarang.chizim@gmail.com');
    }
  });
}

const certContainer = document.querySelector('.certificates-container');
const leftBtn = document.querySelector('.cert-nav.left');
const rightBtn = document.querySelector('.cert-nav.right');

if (certContainer && leftBtn && rightBtn) {
  rightBtn.addEventListener('click', () => {
    certContainer.scrollBy({ left: 600, behavior: 'smooth' });
  });

  leftBtn.addEventListener('click', () => {
    certContainer.scrollBy({ left: -600, behavior: 'smooth' });
  });
}
