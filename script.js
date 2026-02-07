// ===========================
// MOBILE MENU TOGGLE
// ===========================
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const body = document.body;

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
  body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
    body.style.overflow = '';
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (nav.classList.contains('active') && 
      !nav.contains(e.target) && 
      !menuToggle.contains(e.target)) {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
    body.style.overflow = '';
  }
});

// ===========================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===========================
// HEADER SHADOW ON SCROLL
// ===========================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add/remove shadow based on scroll position
  if (currentScroll > 50) {
    header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
  } else {
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  }
  
  lastScroll = currentScroll;
});

// ===========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===========================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// Observe feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// ===========================
// LAZY LOADING IMAGES
// ===========================
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// ===========================
// PRODUCT CARD HOVER EFFECTS
// ===========================
productCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// ===========================
// WHATSAPP BUTTON CLICK TRACKING
// ===========================
const buyButtons = document.querySelectorAll('.buy-button');
buyButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    // Add ripple effect
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
    
    // Analytics or tracking code can be added here
    console.log('Buy button clicked:', this.parentElement.previousElementSibling.textContent);
  });
});

// Add ripple CSS dynamically
const style = document.createElement('style');
style.textContent = `
  .buy-button {
    position: relative;
    overflow: hidden;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ===========================
// ACTIVE NAV LINK HIGHLIGHT
// ===========================
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPath || 
        (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== './index.html')) {
      link.classList.add('active');
    }
  });
}

setActiveNavLink();

// ===========================
// PRELOADER (OPTIONAL)
// ===========================
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Trigger animations after page load
  setTimeout(() => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.style.animation = 'fadeInUp 1s ease-out';
    }
  }, 100);
});

// ===========================
// PARALLAX EFFECT FOR HERO
// ===========================
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    if (scrolled < window.innerHeight) {
      heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
  });
}

// ===========================
// SCROLL TO TOP BUTTON (OPTIONAL)
// ===========================
const createScrollToTopButton = () => {
  const button = document.createElement('button');
  button.innerHTML = '↑';
  button.className = 'scroll-to-top';
  button.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-green);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(34, 139, 34, 0.4);
  `;
  
  document.body.appendChild(button);
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      button.style.opacity = '1';
      button.style.visibility = 'visible';
    } else {
      button.style.opacity = '0';
      button.style.visibility = 'hidden';
    }
  });
  
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-5px)';
    button.style.boxShadow = '0 6px 20px rgba(34, 139, 34, 0.5)';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = '0 4px 15px rgba(34, 139, 34, 0.4)';
  });
};

createScrollToTopButton();

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================
// Debounce function for scroll events
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
  // Your scroll-dependent code here
}, 10));

// ===========================
// CONSOLE MESSAGE
// ===========================
console.log('%c🌊 Hydria Premier Water', 'color: #228b22; font-size: 24px; font-weight: bold;');
console.log('%cNaturally Alkaline Mineral Water', 'color: #006400; font-size: 14px;');
console.log('%cWebsite loaded successfully! 💧', 'color: #90ee90; font-size: 12px;');