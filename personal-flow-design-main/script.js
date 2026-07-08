document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Data from data.js
    injectPersonalData();
    injectSkills();
    injectProjects();
    injectCertifications();
    injectEducation();

    // 2. Initialize Interactions
    initTypingEffect();
    initScrollReveal();
    initCustomCursor();
    initMobileNav();
    initMobileNav();
    
    // Set Current Year
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

function injectPersonalData() {
    const p = portfolioData.personal;
    
    // Greeting & About
    document.getElementById('home-greeting').textContent = "Welcome to my portfolio";
    document.getElementById('about-text').textContent = p.about;
    document.getElementById('about-location').textContent = p.location;
    
    // Contacts
    document.getElementById('contact-email').textContent = p.email;
    document.getElementById('contact-phone').textContent = p.phone;
    
    // Social Links
    document.getElementById('social-github').href = p.github;
    document.getElementById('social-linkedin').href = p.linkedin;
    document.getElementById('social-email').href = `mailto:${p.email}`;
    
    // Resume Link
    const resumeBtn = document.getElementById('resume-download-btn');
    if (resumeBtn && p.resume) {
        resumeBtn.href = p.resume;
    }
}

function injectSkills() {
    const grid = document.getElementById('skills-grid-new');
    if (!grid) return;

    function renderSkills(filterStr) {
        grid.innerHTML = '';
        const filtered = filterStr === 'all' 
            ? portfolioData.skills 
            : portfolioData.skills.filter(s => s.category === filterStr);
            
        grid.innerHTML = filtered.map((s, index) => `
            <div class="skill-card glass-card" tabindex="0" style="animation: fade-in-up 0.5s ease forwards; animation-delay: ${index * 0.05}s; opacity: 0; transform: translateY(30px);">
                <i class="${s.icon}"></i>
                <span>${s.name}</span>
            </div>
        `).join('');
    }

    renderSkills('all');

    const tabs = document.querySelectorAll('.skills-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderSkills(tab.getAttribute('data-filter'));
        });
        
        tab.addEventListener('keydown', (e) => {
            if(e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                tab.click();
            }
        });
    });
}

function injectProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = portfolioData.projects.map((p, index) => `
        <div class="project-card" data-reveal="bottom" data-delay="${index * 100}">
            <div class="project-img-wrapper">
                <img src="${p.image}" alt="${p.title}" loading="lazy">
                <div class="project-overlay">
                    <a href="${p.githubLink}" target="_blank" class="project-link"><i class="fab fa-github"></i></a>
                    <a href="${p.liveLink}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            <div class="project-info">
                <h3 class="project-title">${p.title}</h3>
                <p class="project-desc">${p.description}</p>
                <div class="project-tags">
                    ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function injectCertifications() {
    const grid = document.getElementById('cert-grid');
    if (!grid) return;

    grid.innerHTML = portfolioData.certifications.map((c, index) => `
        <div class="cert-card glass-card" data-reveal="bottom" data-delay="${index * 150}">
            <div class="cert-img-wrapper">
                <img src="${c.image}" alt="${c.title}" loading="lazy">
            </div>
            <h3 class="cert-title">${c.title}</h3>
            <span class="cert-issuer">${c.issuer}</span>
        </div>
    `).join('');
}

function injectEducation() {
    const timeline = document.getElementById('education-timeline');
    if (!timeline || !portfolioData.education) return;

    timeline.innerHTML = portfolioData.education.map((e, index) => `
        <div class="timeline-item glass-card" data-reveal="left" data-delay="${index * 150}">
            <div class="timeline-dot"></div>
            <span class="timeline-date">${e.date}</span>
            <h3 class="timeline-title">${e.degree}</h3>
            <p class="timeline-subtitle">${e.institution}</p>
            ${e.description ? `<p class="project-desc" style="margin-top: 0.5rem; font-size: 0.9rem;">${e.description}</p>` : ''}
        </div>
    `).join('');
}

/* =========================================
   INTERACTIONS & ANIMATIONS
   ========================================= */

function initTypingEffect() {
    const roles = portfolioData.personal.role;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeElement = document.getElementById('typing-text');
    
    function type() {
        if (!typeElement || !roles.length) return;
        
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typeElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typeElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 30 : 80;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    
    if (typeElement && roles.length) {
        setTimeout(type, 1000);
    }
}

function initScrollReveal() {
    const reveals = document.querySelectorAll('[data-reveal]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => observer.observe(reveal));
}

function initCustomCursor() {
    const blob = document.querySelector('.cursor-blob');
    const follower = document.querySelector('.cursor-blob-follower');
    
    if (!blob || !follower) return;

    document.addEventListener('mousemove', (e) => {
        // Blob slightly delayed/lazy for soft glow effect
        setTimeout(() => {
            blob.style.left = e.clientX + 'px';
            blob.style.top = e.clientY + 'px';
        }, 50);
        
        // Follower acts faster
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });

    // Hover interactions
    const iteractables = document.querySelectorAll('a, button, .project-card, .cert-card, .bento-box, input, textarea');
    iteractables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.style.transform = 'translate(-50%, -50%) scale(2.5)';
            follower.style.background = 'transparent';
            follower.style.border = '2px solid var(--primary-color)';
        });
        el.addEventListener('mouseleave', () => {
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.background = 'var(--secondary-color)';
            follower.style.border = 'none';
        });
    });
}

function initMobileNav() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });
    
    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const link = document.querySelector('.nav-link[href*=' + sectionId + ']');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if(link) link.classList.add('active');
            } else {
                if(link) link.classList.remove('active');
            }
        });
        
        // Header shadow
        const header = document.querySelector('.header');
        if (scrollY >= 50 && header) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
        } else if (header) {
            header.style.boxShadow = 'none';
        }
    });
}