/**
 * Aman Katiyar - Portfolio Main JavaScript
 * Handles dynamic rendering, interactive animations, filtering, modals, and theme switching.
 */

// Brand SVG Icons for reliable 100% rendering without CDN dependencies
const BRAND_SVGS = {
    github: `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
    linkedin: `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46V10.9M7.86 6.81a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/></svg>`,
    leetcode: `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.96 3.825c.348.034.698.034 1.049 0a5.952 5.952 0 0 0 3.39-1.637l3.655-3.656a1.38 1.38 0 0 0 .399-.974 1.353 1.353 0 0 0-1.353-1.354 1.37 1.37 0 0 0-.974.405l-3.65 3.655a3.17 3.17 0 0 1-2.26.98 3.23 3.23 0 0 1-2.26-.98 3.2 3.2 0 0 1-.94-2.27 3.2 3.2 0 0 1 .94-2.27l3.85-4.12 4.41-4.78a1.37 1.37 0 0 0-.96-2.355zM16.14 7.378a1.38 1.38 0 0 0-.98.41 1.35 1.35 0 0 0 0 1.93l3.52 3.52H9.86a1.36 1.36 0 1 0 0 2.72h8.82l-3.52 3.52a1.36 1.36 0 0 0 1.93 1.93l5.85-5.85a1.36 1.36 0 0 0 0-1.93l-5.85-5.85a1.38 1.38 0 0 0-.95-.4z"/></svg>`
};

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initParticleCanvas();
    initTypingEffect();
    initNavigation();
    renderAllContent();
    initProjectFilters();
    initCertificateModal();
    initContactForm();
    initClipboard();
    initScrollAnimations();
});

/* ==========================================================================
   1. Theme Management (Dark / Light Mode)
   ========================================================================= */
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const mobileThemeToggleBtn = document.getElementById('theme-toggle-mobile');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    if (savedTheme === 'light') {
        html.classList.add('light');
        updateThemeIcons(true);
    } else {
        html.classList.remove('light');
        updateThemeIcons(false);
    }

    function toggleTheme() {
        const isLight = html.classList.toggle('light');
        localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
        updateThemeIcons(isLight);
        showToast(isLight ? 'Switched to Light mode' : 'Switched to Dark mode', 'sun-moon');
    }

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleTheme);
}

function updateThemeIcons(isLight) {
    const sunIcons = document.querySelectorAll('.theme-icon-sun');
    const moonIcons = document.querySelectorAll('.theme-icon-moon');

    sunIcons.forEach(el => el.classList.toggle('hidden', isLight));
    moonIcons.forEach(el => el.classList.toggle('hidden', !isLight));
}

/* ==========================================================================
   2. Interactive Canvas Particles
   ========================================================================== */
function initParticleCanvas() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.min(Math.floor(width / 26), 40);

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 1,
            alpha: Math.random() * 0.5 + 0.2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        const isLight = document.documentElement.classList.contains('light');
        const particleColor = isLight ? 'rgba(59, 130, 246, ' : 'rgba(56, 189, 248, ';
        const lineColor = isLight ? 'rgba(148, 163, 184, ' : 'rgba(56, 189, 248, ';

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = particleColor + p.alpha + ')';
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 115) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = lineColor + (0.14 - dist / 850) + ')';
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}

/* ==========================================================================
   3. Typing Effect in Hero
   ========================================================================== */
function initTypingEffect() {
    const typedTextEl = document.getElementById('typed-text');
    if (!typedTextEl) return;

    const roles = portfolioData.personal.roles;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typedTextEl.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 35;
        } else {
            typedTextEl.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 85;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 1600;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 400;
        }

        setTimeout(type, typingSpeed);
    }
    type();
}

/* ==========================================================================
   4. Navigation & ScrollSpy
   ========================================================================== */
function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden', isOpen);
            mobileMenuBtn.setAttribute('aria-expanded', String(!isOpen));
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset + 140;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
                });
            }
        });
    });
}

/* ==========================================================================
   5. Dynamic Rendering from portfolioData
   ========================================================================== */
function renderAllContent() {
    renderStats();
    renderExperience();
    renderAboutHighlights();
    renderSkills();
    renderProjects(portfolioData.projects);
    renderCertificates();
    renderEducation();
    renderCodingProfiles();
}

function renderStats() {
    const container = document.getElementById('hero-stats-container');
    if (!container) return;

    container.innerHTML = portfolioData.personal.stats.map(s => `
        <div class="glass-panel p-4 rounded-xl text-center">
            <div class="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono">${s.value}</div>
            <div class="text-xs sm:text-sm font-semibold text-slate-300 mt-1">${s.label}</div>
            <div class="text-[11px] text-slate-400">${s.sub}</div>
        </div>
    `).join('');
}

function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container || !portfolioData.experience) return;

    container.innerHTML = portfolioData.experience.map(exp => `
        <div class="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-cyan-500/30 shadow-xl shadow-cyan-500/5">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div class="flex items-center gap-3.5">
                    <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                        <i data-lucide="briefcase" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-100">${exp.role}</h3>
                        <div class="text-sm font-semibold text-cyan-400 mt-0.5">
                            ${exp.company} <span class="text-slate-400 font-normal">| ${exp.type}</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>${exp.status}</span>
                    </span>
                    <span class="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                        ${exp.period}
                    </span>
                </div>
            </div>

            <p class="text-sm text-slate-300 leading-relaxed mb-6">
                ${exp.summary}
            </p>

            <div class="mb-6">
                <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">Key Responsibilities:</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${exp.responsibilities.map(r => `
                        <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                            <i data-lucide="check-circle" class="w-4 h-4 text-cyan-400 shrink-0 mt-0.5"></i>
                            <span class="leading-relaxed">${r}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="pt-5 border-t border-slate-800/80">
                <div class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">Technologies & Tools:</div>
                <div class="flex flex-wrap gap-2">
                    ${exp.technologies.map(t => `
                        <span class="text-xs font-mono px-3 py-1.5 rounded-lg bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 font-medium">
                            ${t}
                        </span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

function renderAboutHighlights() {
    const container = document.getElementById('about-highlights');
    if (!container) return;

    container.innerHTML = portfolioData.about.highlights.map(h => `
        <div class="glass-panel p-5 rounded-2xl flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                <i data-lucide="${h.icon}" class="w-5 h-5"></i>
            </div>
            <div>
                <h4 class="font-bold text-slate-100 text-base mb-1">${h.title}</h4>
                <p class="text-sm text-slate-400 leading-relaxed">${h.desc}</p>
            </div>
        </div>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = portfolioData.skills.map(cat => `
        <div class="glass-panel p-6 rounded-2xl">
            <div class="flex items-center gap-3 mb-5 border-b border-slate-700/50 pb-4">
                <div class="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
                </div>
                <h3 class="text-lg font-bold text-slate-100">${cat.category}</h3>
            </div>
            <div class="flex flex-wrap gap-2.5">
                ${cat.items.map(item => `
                    <div class="px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-cyan-500/40 hover:bg-slate-800 transition flex items-center justify-between gap-3 group">
                        <span class="text-sm font-medium text-slate-200 group-hover:text-cyan-300 transition">${item.name}</span>
                        <span class="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                            ${item.level}
                        </span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderProjects(projectsList) {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    if (projectsList.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-12 text-slate-400">No projects found for this category.</div>`;
        return;
    }

    container.innerHTML = projectsList.map(p => `
        <div class="glass-panel rounded-2xl p-6 flex flex-col justify-between group cert-card">
            <div>
                <div class="flex items-center justify-between mb-4">
                    <span class="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                        ${p.badge}
                    </span>
                    <span class="text-xs font-mono text-slate-400">${p.year}</span>
                </div>

                <h3 class="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition mb-2">
                    ${p.title}
                </h3>

                <p class="text-sm text-slate-300 leading-relaxed mb-4">
                    ${p.shortDesc}
                </p>

                <div class="space-y-2 mb-5">
                    ${p.highlights.slice(0, 3).map(h => `
                        <div class="flex items-start gap-2 text-xs text-slate-400">
                            <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                            <span>${h}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div>
                <div class="flex flex-wrap gap-1.5 mb-5">
                    ${p.tech.map(t => `
                        <span class="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                            ${t}
                        </span>
                    `).join('')}
                </div>

                <div class="flex items-center gap-3 pt-3 border-t border-slate-700/50">
                    <a href="${p.github}" target="_blank" rel="noopener noreferrer" 
                       class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-semibold text-slate-200 hover:text-white transition group/btn">
                        <span class="text-slate-400 group-hover/btn:text-white transition">${BRAND_SVGS.github}</span>
                        <span>View on GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

function renderCertificates() {
    const container = document.getElementById('certificates-grid');
    if (!container) return;

    container.innerHTML = portfolioData.certificates.map(c => `
        <div class="glass-panel rounded-2xl overflow-hidden cert-card flex flex-col justify-between group cursor-pointer"
             onclick="openCertModal('${c.id}')">
            <!-- Thumbnail preview -->
            <div class="relative bg-slate-900 border-b border-slate-800 aspect-video overflow-hidden flex items-center justify-center p-2">
                <img src="${c.image}" alt="${c.title}" class="cert-thumb max-h-full max-w-full object-contain rounded-lg shadow-md" loading="lazy" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition"></div>
                <div class="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-mono flex items-center gap-1.5 shadow-sm">
                    <i data-lucide="shield-check" class="w-3.5 h-3.5"></i>
                    <span>${c.badgeText}</span>
                </div>
                <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                    <span class="font-medium bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur">${c.issuer}</span>
                    <span class="font-mono bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur">${c.date}</span>
                </div>
            </div>

            <!-- Content -->
            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-base font-bold text-slate-100 group-hover:text-cyan-400 transition mb-2">
                        ${c.title}
                    </h3>
                    <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                        ${c.description}
                    </p>
                </div>

                <div class="flex items-center justify-between pt-3 border-t border-slate-800 text-xs">
                    <span class="text-cyan-400 group-hover:underline flex items-center gap-1 font-semibold">
                        <span>View Credential Details</span>
                        <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
                    </span>
                    <a href="${c.pdfUrl}" target="_blank" onclick="event.stopPropagation()" 
                       class="text-slate-400 hover:text-slate-200 px-2 py-1 rounded hover:bg-slate-800 transition" title="Download Original Certificate PDF">
                        <i data-lucide="file-text" class="w-4 h-4"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

function renderEducation() {
    const container = document.getElementById('education-timeline');
    if (!container) return;

    container.innerHTML = portfolioData.education.map(edu => `
        <div class="relative pl-8 pb-8 border-l-2 border-slate-700/60 last:border-transparent last:pb-0 timeline-dot">
            <div class="glass-panel p-6 rounded-2xl">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span class="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                        ${edu.period}
                    </span>
                    <span class="text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        ${edu.status}
                    </span>
                </div>

                <h3 class="text-lg font-bold text-slate-100">${edu.degree}</h3>
                <h4 class="text-sm font-semibold text-slate-300 mt-0.5">${edu.institution} — <span class="text-slate-400">${edu.location}</span></h4>
                
                ${edu.grade ? `<div class="mt-2 text-sm font-semibold text-cyan-300 font-mono">${edu.grade}</div>` : ''}

                <p class="text-sm text-slate-300 leading-relaxed mt-3">${edu.details}</p>

                <div class="mt-4 flex flex-wrap gap-2">
                    ${edu.courses.map(c => `
                        <span class="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60">
                            ${c}
                        </span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderCodingProfiles() {
    const container = document.getElementById('coding-profiles-container');
    if (!container) return;

    container.innerHTML = portfolioData.codingProfiles.map(p => {
        let iconSvg = BRAND_SVGS[p.platformType] || BRAND_SVGS.github;
        let iconColorClass = p.platformType === 'linkedin' ? 'text-[#0a66c2]' : (p.platformType === 'leetcode' ? 'text-amber-500' : 'text-slate-100');

        return `
        <a href="${p.url}" target="_blank" rel="noopener noreferrer" 
           class="glass-panel p-6 rounded-2xl flex flex-col justify-between group hover:border-cyan-500/40 transition">
            <div>
                <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center ${iconColorClass} group-hover:scale-110 transition shadow-inner">
                        ${iconSvg}
                    </div>
                    <span class="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                        ${p.badge}
                    </span>
                </div>

                <h3 class="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition">${p.platform}</h3>
                <div class="text-xs font-mono text-cyan-300 mt-0.5 mb-2">${p.username}</div>
                <div class="text-xs font-semibold text-slate-300 mb-2">${p.highlight}</div>
                <p class="text-xs text-slate-400 leading-relaxed">${p.description}</p>
            </div>

            <div class="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-cyan-400 font-semibold group-hover:underline">
                <span>View Profile</span>
                <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
            </div>
        </a>
        `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
}

/* ==========================================================================
   6. Project Filters
   ========================================================================== */
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            if (filter === 'all') {
                renderProjects(portfolioData.projects);
            } else {
                const filtered = portfolioData.projects.filter(p => p.category === filter);
                renderProjects(filtered);
            }
        });
    });
}

/* ==========================================================================
   7. Certificate Lightbox Modal
   ========================================================================== */
let activeModalCert = null;

function initCertificateModal() {
    const modal = document.getElementById('cert-modal');
    const closeBtn = document.getElementById('cert-modal-close');

    if (!modal) return;

    if (closeBtn) {
        closeBtn.addEventListener('click', closeCertModal);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeCertModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeCertModal();
        }
    });
}

function openCertModal(certId) {
    const cert = portfolioData.certificates.find(c => c.id === certId);
    if (!cert) return;

    activeModalCert = cert;
    const modal = document.getElementById('cert-modal');
    const modalImg = document.getElementById('modal-cert-img');
    const modalTitle = document.getElementById('modal-cert-title');
    const modalIssuer = document.getElementById('modal-cert-issuer');
    const modalDate = document.getElementById('modal-cert-date');
    const modalId = document.getElementById('modal-cert-id');
    const modalDesc = document.getElementById('modal-cert-desc');
    const modalTopics = document.getElementById('modal-cert-topics');
    const modalPdfLink = document.getElementById('modal-cert-pdf-link');

    if (modalImg) modalImg.src = cert.image;
    if (modalTitle) modalTitle.textContent = cert.title;
    if (modalIssuer) modalIssuer.textContent = cert.issuer;
    if (modalDate) modalDate.textContent = cert.date;
    if (modalId) modalId.textContent = cert.certId;
    if (modalDesc) modalDesc.textContent = cert.description;
    if (modalPdfLink) modalPdfLink.href = cert.pdfUrl;

    if (modalTopics) {
        modalTopics.innerHTML = cert.topics.map(t => `
            <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700">
                ${t}
            </span>
        `).join('');
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCertModal() {
    const modal = document.getElementById('cert-modal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

window.openCertModal = openCertModal;
window.closeCertModal = closeCertModal;

/* ==========================================================================
   8. Clipboard Copy Functions & Toast
   ========================================================================== */
function initClipboard() {
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const copyPhoneBtn = document.getElementById('copy-phone-btn');

    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(portfolioData.personal.email);
            showToast('Email copied: ' + portfolioData.personal.email, 'check-circle');
        });
    }

    if (copyPhoneBtn) {
        copyPhoneBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(portfolioData.personal.phone);
            showToast('Phone copied: ' + portfolioData.personal.phone, 'phone');
        });
    }
}

function showToast(message, icon = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i data-lucide="${icon}" class="w-4 h-4 text-cyan-400"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
window.showToast = showToast;

/* ==========================================================================
   9. Contact Form Simulation
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const messageInput = document.getElementById('contact-message');

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            showToast('Please fill out all required fields.', 'alert-circle');
            return;
        }

        const subject = encodeURIComponent(`Portfolio Inquiry from ${nameInput.value}`);
        const body = encodeURIComponent(`Name: ${nameInput.value}\nEmail: ${emailInput.value}\n\nMessage:\n${messageInput.value}`);
        const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;

        window.location.href = mailtoUrl;

        showToast('Thank you, ' + nameInput.value + '! Launching your email client...', 'send');
        form.reset();
    });
}

/* ==========================================================================
   10. Scroll Animation Trigger
   ========================================================================== */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-6');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-6');
        observer.observe(el);
    });
}
