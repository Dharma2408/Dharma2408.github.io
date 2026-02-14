// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'var(--nav-bg)';
        navbar.style.boxShadow = '0 2px 20px var(--shadow-color)';
    } else {
        navbar.style.background = 'var(--nav-bg)';
        navbar.style.boxShadow = '0 2px 20px var(--shadow-color)';
    }
});

// Smooth scrolling for navigation links
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

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (barPosition < screenPosition) {
            bar.style.animation = 'slideIn 1s ease forwards';
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Add scroll reveal animation
const revealElements = document.querySelectorAll('.section-title, .project-card, .skill-category, .timeline-item, .cert-card');

function revealOnScroll() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial styles for reveal elements
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Counter animation for stats
const stats = document.querySelectorAll('.stat-number');

function animateStats() {
    stats.forEach(stat => {
        const statPosition = stat.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (statPosition < screenPosition && !stat.classList.contains('animated')) {
            stat.classList.add('animated');
            
            const originalText = stat.textContent;
            const hasPlus = originalText.includes('+');
            const target = parseFloat(originalText);

            let current = 0;
            const increment = target / 50;

            const timer = setInterval(() => {
                current += increment;

                if (current >= target) {
                    stat.textContent = target + (hasPlus ? '+' : '');
                    clearInterval(timer);
                } else {
                    stat.textContent = current.toFixed(1) + (hasPlus ? '+' : '');
                }
            }, 20);
        }
    });
}
window.addEventListener('scroll', animateStats);
window.addEventListener('load', animateStats);

// Dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '🌙';
darkModeToggle.classList.add('dark-mode-toggle');
darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
document.body.appendChild(darkModeToggle);

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '☀️';
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '☀️';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.innerHTML = '🌙';
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Typing effect for hero section (optional - uncomment if you want to use it)
/*
const roles = ['CS Student', 'Backend Developer', 'Java Enthusiast', 'Problem Solver'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.hero h3 .highlight');

function typeEffect() {
    if (!typingElement) return;
    
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 100 : 200);
    }
}

setTimeout(typeEffect, 1000);
*/

// Project filtering (if you want to add categories later)
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Form submission handling (if you add a contact form later)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Console message (fun easter egg)
console.log(`
╔══════════════════════════════════════╗
║   Thanks for checking out my portfolio!  ║
║   Let's connect and build something   ║
║         amazing together! 🚀          ║
╚══════════════════════════════════════╝
`);

// Handle system preference for dark mode
function checkSystemPreference() {
    if (localStorage.getItem('darkMode') === null) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '☀️';
        }
    }
}

// Check system preference on load
checkSystemPreference();

// Listen for system preference changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (localStorage.getItem('darkMode') === null) {
        if (event.matches) {
            document.body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '☀️';
        } else {
            document.body.classList.remove('dark-mode');
            darkModeToggle.innerHTML = '🌙';
        }
    }
});