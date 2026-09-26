/**
 * FROMSKRACH PRODUCTIONS - MAIN APPLICATION ORCHESTRATOR
 * "Built From Scratch. Made to Last."
 */

import { BRAND_DATA, PROJECTS_DATA, METHOD_STAGES, CAPABILITIES_DATA, BTS_TIMELINE, TEAM_ROSTER, TESTIMONIALS_DATA, CLIENT_LOGOS } from './data.js';
import { audioEngine } from './audio.js';
import { TapeSystem } from './tape.js';

class FromSkrachApp {
  constructor() {
    this.tapeSystem = new TapeSystem();
    this.currentFilter = 'all';
    this.activeMethodIndex = 0;
    this.activeBtsIndex = 0;
  }

  init() {
    this.initLoader();
    this.tapeSystem.init();
    this.initNavigation();
    this.initAudioButton();
    this.initProjectsRenderer();
    this.initMethodRenderer();
    this.initBTSRenderer();
    this.initCapabilitiesRenderer();
    this.initTeamRenderer();
    this.initProofRenderer();
    this.initEditorialAnimation();
    this.initContactForm();
    this.initISTClock();
    this.initProjectDrawer();
    this.initGSAPAnimations();
  }

  // 01. CALIBRATION LOADING SCREEN
  initLoader() {
    const loader = document.getElementById('loader-screen');
    const blade = document.getElementById('loader-tape-blade');
    const statusText = document.getElementById('loader-status-text');
    const mmCounter = document.getElementById('loader-mm-counter');
    if (!loader || !blade) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      loader.classList.add('hidden');
      return;
    }

    let progress = 0;
    const stages = [
      { at: 15, text: "CALIBRATING SIGHTLINES..." },
      { at: 40, text: "MEASURING SPATIAL TOLERANCE..." },
      { at: 70, text: "SYNCHRONIZING DUAL POWER GRID..." },
      { at: 90, text: "VERIFYING TRIPLE REDUNDANCY..." },
      { at: 100, text: "READY. TOLERANCE ±0.0mm" }
    ];

    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 8) + 4;
      if (progress > 100) progress = 100;

      blade.style.width = `${progress}%`;
      const mm = progress * 10;
      if (mmCounter) mmCounter.textContent = `${String(mm).padStart(4, '0')}mm`;

      const currentStage = stages.find(s => progress <= s.at) || stages[stages.length - 1];
      if (statusText) statusText.textContent = currentStage.text;

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          loader.classList.add('hidden');
          audioEngine.playSnapLock();
        }, 350);
      }
    }, 45);
  }

  // 02. NAVIGATION & MOBILE DRAWER
  initNavigation() {
    const nav = document.querySelector('.site-nav');
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const mobileMenu = document.querySelector('.mobile-blueprint-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu-links a');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });

    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
      });

      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
        });
      });
    }
  }

  // 03. AUDIO SYNTHESIZER TOGGLE
  initAudioButton() {
    const audioBtn = document.getElementById('sound-toggle-btn');
    if (!audioBtn) return;

    audioBtn.addEventListener('click', () => {
      const active = audioEngine.toggle();
      if (active) {
        audioBtn.classList.add('sound-active');
        audioBtn.innerHTML = `<span>🔊</span> [SOUND: ON]`;
        audioEngine.playSnapLock();
      } else {
        audioBtn.classList.remove('sound-active');
        audioBtn.innerHTML = `<span>🔈</span> [SOUND: OFF]`;
      }
    });
  }

  // 04. PROJECTS RENDERER & INTERACTIVE BLUEPRINT TOGGLE
  initProjectsRenderer() {
    const container = document.getElementById('projects-container');
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!container) return;

    const render = (filter) => {
      container.innerHTML = '';
      const filtered = filter === 'all' 
        ? PROJECTS_DATA 
        : PROJECTS_DATA.filter(p => p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())) || p.category.toLowerCase().includes(filter.toLowerCase()));

      filtered.forEach((p, idx) => {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.setAttribute('data-id', p.id);

        card.innerHTML = `
          <div class="project-hero-frame">
            <img class="project-img" src="${p.image}" alt="${p.title} - ${p.category}" loading="lazy">
            <button class="project-blueprint-toggle" aria-label="Toggle CAD Blueprint View">
              <span>📐</span> BLUEPRINT MODE
            </button>
            <div class="project-blueprint-overlay">
              <div class="blueprint-meta-header">
                <span>CAD SPEC // ${p.id.toUpperCase()}</span>
                <span>TOLERANCE: ±0.0mm</span>
              </div>
              <div style="font-family: 'Courier New', Courier, monospace; font-size: 0.8125rem; color: var(--clr-yellow); max-width: 500px;">
                <p><strong>[SPATIAL ENVELOPE]</strong> ${p.dimensions.stageWidth}</p>
                <p><strong>[CROWD SIGHTLINES]</strong> ${p.dimensions.crowdZone}</p>
                <p><strong>[LOAD-IN WINDOW]</strong> ${p.dimensions.buildWindow}</p>
                <p><strong>[POWER GRID]</strong> ${p.dimensions.powerRedundancy}</p>
              </div>
              <div class="tech-label">FROM SKRACH TECHNICAL SCHEMATIC // CERTIFIED</div>
            </div>
          </div>
          
          <div class="project-specs-bar">
            <div class="project-spec-item">
              <div class="project-spec-label">Stage Front</div>
              <div class="project-spec-val">${p.dimensions.stageWidth}</div>
            </div>
            <div class="project-spec-item">
              <div class="project-spec-label">Crowd Zone</div>
              <div class="project-spec-val">${p.dimensions.crowdZone}</div>
            </div>
            <div class="project-spec-item">
              <div class="project-spec-label">Build Window</div>
              <div class="project-spec-val">${p.dimensions.buildWindow}</div>
            </div>
            <div class="project-spec-item">
              <div class="project-spec-label">Power Redundancy</div>
              <div class="project-spec-val">${p.dimensions.powerRedundancy}</div>
            </div>
          </div>

          <div class="project-body">
            <div class="project-info-col">
              <div class="tech-coord">${p.location} // ${p.year}</div>
              <h3 class="headline-lg" style="margin-top: 4px; margin-bottom: 8px;">${p.title}</h3>
              <p style="color: var(--clr-yellow); font-size: 0.8125rem; font-weight: 600; margin-bottom: 12px;">${p.collaborator}</p>
              <p class="subheadline" style="font-size: 0.9375rem;">${p.summary}</p>
              <div class="project-tag-row">
                ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
              </div>
            </div>
            <div class="project-meta-col" style="align-items: flex-end; justify-content: center;">
              <button class="btn btn-secondary view-specs-btn" data-project="${p.id}">
                VIEW PRODUCTION SPECS <span class="btn-arrow">→</span>
              </button>
            </div>
          </div>
        `;

        // Blueprint toggle button handler
        const bpToggle = card.querySelector('.project-blueprint-toggle');
        const bpOverlay = card.querySelector('.project-blueprint-overlay');
        bpToggle.addEventListener('click', () => {
          bpOverlay.classList.toggle('active');
          audioEngine.playTapeTick(1400);
          bpToggle.innerHTML = bpOverlay.classList.contains('active') 
            ? `<span>🖼️</span> LIVE PHOTO MODE` 
            : `<span>📐</span> BLUEPRINT MODE`;
        });

        // View specs modal trigger
        const specsBtn = card.querySelector('.view-specs-btn');
        specsBtn.addEventListener('click', () => {
          this.openProjectDrawer(p);
          audioEngine.playSnapLock();
        });

        container.appendChild(card);
      });
    };

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentFilter = btn.getAttribute('data-filter');
        render(this.currentFilter);
        audioEngine.playTapeTick(1000);
      });
    });

    render('all');
  }

  // 05. PROJECT DETAIL DRAWER
  initProjectDrawer() {
    const drawer = document.getElementById('project-drawer');
    const closeBtn = document.getElementById('drawer-close-btn');
    if (!drawer || !closeBtn) return;

    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('active');
      audioEngine.playSnapLock();
    });

    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) {
        drawer.classList.remove('active');
      }
    });
  }

  openProjectDrawer(p) {
    const drawer = document.getElementById('project-drawer');
    const content = document.getElementById('drawer-content');
    if (!drawer || !content) return;

    content.innerHTML = `
      <div class="tech-coord">${p.location} // ${p.year}</div>
      <h2 class="headline-xl" style="margin-block: 8px 16px;">${p.title}</h2>
      <div class="tech-label" style="margin-bottom: 24px;">COLLABORATION // ${p.collaborator}</div>

      <img src="${p.image}" alt="${p.title}" style="width: 100%; border-radius: 2px; margin-bottom: 24px; border: 1px solid rgba(244, 241, 236, 0.15);">

      <div style="margin-bottom: 24px;">
        <h4 class="font-display" style="font-size: 1.25rem; color: var(--clr-orange); margin-bottom: 6px;">THE OPERATIONAL CHALLENGE</h4>
        <p style="font-size: 0.9375rem; color: var(--clr-offwhite-dim);">${p.challenge}</p>
      </div>

      <div style="margin-bottom: 24px;">
        <h4 class="font-display" style="font-size: 1.25rem; color: var(--clr-yellow); margin-bottom: 6px;">THE SKRACH ENGINEERING SOLUTION</h4>
        <p style="font-size: 0.9375rem; color: var(--clr-offwhite-dim);">${p.solution}</p>
      </div>

      <div style="background: rgba(0, 0, 0, 0.4); padding: 16px; border-left: 3px solid var(--clr-yellow); margin-bottom: 24px;">
        <h4 class="font-display" style="font-size: 1.125rem; color: var(--clr-offwhite); margin-bottom: 8px;">VERIFIED METRICS</h4>
        ${p.metrics.map(m => `
          <div style="display: flex; justify-content: space-between; font-size: 0.8125rem; margin-bottom: 4px;">
            <span style="color: var(--clr-offwhite-muted);">${m.label}:</span>
            <span style="color: var(--clr-yellow); font-weight: 700;">${m.value}</span>
          </div>
        `).join('')}
      </div>

      <a href="#contact" class="btn btn-primary" style="width: 100%;" onclick="document.getElementById('project-drawer').classList.remove('active')">
        BUILD AN EVENT LIKE THIS <span class="btn-arrow">→</span>
      </a>
    `;

    drawer.classList.add('active');
  }

  // 06. THE SKRACH METHOD RENDERER
  initMethodRenderer() {
    const nav = document.getElementById('method-timeline-nav');
    const displayCard = document.getElementById('method-display-card');
    if (!nav || !displayCard) return;

    nav.innerHTML = '';
    METHOD_STAGES.forEach((stage, idx) => {
      const stepBtn = document.createElement('button');
      stepBtn.className = `method-nav-step ${idx === 0 ? 'active' : ''}`;
      stepBtn.innerHTML = `
        <div class="step-idx">${stage.number}</div>
        <div class="step-title">${stage.name}</div>
      `;
      stepBtn.addEventListener('click', () => {
        document.querySelectorAll('.method-nav-step').forEach(b => b.classList.remove('active'));
        stepBtn.classList.add('active');
        this.activeMethodIndex = idx;
        renderStage(stage);
        audioEngine.playTapeTick(900 + idx * 100);
      });
      nav.appendChild(stepBtn);
    });

    const renderStage = (stage) => {
      displayCard.innerHTML = `
        <div class="method-detail-pane">
          <div class="method-tape-meter">
            <span>📏 TAPE: ${stage.tapeMeasurement}</span>
            <span>STATUS: ${stage.status}</span>
          </div>
          <div class="tech-coord">${stage.number} // ${stage.code} SPECIFICATION</div>
          <h3 class="headline-lg" style="margin-block: 8px 16px;">${stage.headline}</h3>
          <p class="subheadline" style="font-size: 0.9375rem;">${stage.description}</p>
          <ul class="method-deliverables-list">
            ${stage.deliverables.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
        <div class="method-blueprint-pane">
          <div class="blueprint-meta-header">
            <span>METHOD CHECKLIST // STAGE ${stage.number}</span>
            <span>TOLERANCE: VERIFIED</span>
          </div>
          <div style="padding-block: 20px;">
            <p style="font-family: 'Courier New', Courier, monospace; font-size: 0.75rem; color: var(--clr-yellow); margin-bottom: 8px;">
              > RUNNING SYSTEM CHECK FOR "${stage.name}"...
            </p>
            <p style="font-family: 'Courier New', Courier, monospace; font-size: 0.75rem; color: var(--clr-offwhite-dim); margin-bottom: 4px;">
              - PROTOCOL: Zero-compromise execution
            </p>
            <p style="font-family: 'Courier New', Courier, monospace; font-size: 0.75rem; color: var(--clr-offwhite-dim); margin-bottom: 4px;">
              - AUDIT: Redundant safety lines verified
            </p>
            <p style="font-family: 'Courier New', Courier, monospace; font-size: 0.75rem; color: var(--clr-offwhite-dim);">
              - STAKEHOLDER SIGN-OFF: APPROVED
            </p>
          </div>
          <div class="tech-label">FROMSKRACH EXECUTION BENCHMARK</div>
        </div>
      `;
    };

    renderStage(METHOD_STAGES[0]);
  }

  // 07. BEHIND THE SCENES 24H CHRONOLOGY RENDERER
  initBTSRenderer() {
    const list = document.getElementById('bts-timeline-list');
    const display = document.getElementById('bts-visual-display');
    if (!list || !display) return;

    list.innerHTML = '';
    BTS_TIMELINE.forEach((item, idx) => {
      const el = document.createElement('div');
      el.className = `bts-timeline-item ${idx === 0 ? 'active' : ''}`;
      el.innerHTML = `
        <div class="bts-item-time">${item.time} // ${item.tape}</div>
        <div class="bts-item-phase">${item.phase}</div>
      `;
      el.addEventListener('click', () => {
        document.querySelectorAll('.bts-timeline-item').forEach(i => i.classList.remove('active'));
        el.classList.add('active');
        this.activeBtsIndex = idx;
        renderBTS(item);
        audioEngine.playTapeTick(1100);
      });
      list.appendChild(el);
    });

    const renderBTS = (item) => {
      display.innerHTML = `
        <div class="bts-display-media">
          <img class="bts-display-img" src="${item.image}" alt="${item.title}" loading="lazy">
        </div>
        <div class="bts-display-body">
          <div class="tech-coord">${item.time} // TAPE POSITION: ${item.tape}</div>
          <h3 class="headline-md" style="margin-block: 6px 12px;">${item.title}</h3>
          <p class="subheadline" style="font-size: 0.9375rem;">${item.detail}</p>
        </div>
      `;
    };

    renderBTS(BTS_TIMELINE[0]);
  }

  // 08. CAPABILITIES RENDERER
  initCapabilitiesRenderer() {
    const grid = document.getElementById('capabilities-grid');
    if (!grid) return;

    grid.innerHTML = '';
    CAPABILITIES_DATA.forEach(c => {
      const card = document.createElement('div');
      card.className = 'capability-card';
      card.innerHTML = `
        <div>
          <div class="cap-code">${c.code}</div>
          <h3 class="cap-title">${c.title}</h3>
          <div class="cap-tagline">${c.tagline}</div>
          <p style="font-size: 0.875rem; color: var(--clr-offwhite-dim);">${c.scope}</p>
        </div>
        <div class="cap-specs-box">
          <div style="font-weight: 700; color: var(--clr-offwhite); margin-bottom: 4px;">[ENGINEERING SPEC]</div>
          <p>${c.specs.engineering}</p>
          <p style="margin-top: 4px; color: var(--clr-yellow);"><strong>Scale:</strong> ${c.specs.scale}</p>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // 09. TEAM ROSTER RENDERER
  initTeamRenderer() {
    const grid = document.getElementById('team-grid');
    if (!grid) return;

    grid.innerHTML = '';
    TEAM_ROSTER.forEach(t => {
      const card = document.createElement('div');
      card.className = 'team-card';
      card.innerHTML = `
        <div class="team-grid-coord">${t.tapeCoord}</div>
        <h3 class="team-role">${t.role}</h3>
        <div class="team-specialty">${t.specialty}</div>
        <div class="team-meta">
          <div>EXPERIENCE: ${t.experience}</div>
          <div style="color: var(--clr-yellow); margin-top: 2px;">BENCHMARK: ${t.metrics}</div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // 10. SOCIAL PROOF & TESTIMONIALS RENDERER
  initProofRenderer() {
    const statsGrid = document.getElementById('stats-grid');
    const testimonialsGrid = document.getElementById('testimonials-grid');
    const clientsRow = document.getElementById('client-logos-row');

    if (statsGrid) {
      statsGrid.innerHTML = BRAND_DATA.stats.map(s => `
        <div class="stat-item">
          <div class="stat-val">${s.value}</div>
          <div class="stat-lbl">${s.label}</div>
          <div class="stat-desc">${s.detail}</div>
        </div>
      `).join('');
    }

    if (testimonialsGrid) {
      testimonialsGrid.innerHTML = TESTIMONIALS_DATA.map(t => `
        <div class="testimonial-card">
          <p class="testimonial-quote">"${t.quote}"</p>
          <div class="testimonial-author">
            <span class="author-role">${t.client} — ${t.company}</span>
            <span class="author-org">${t.project} (${t.metric})</span>
          </div>
        </div>
      `).join('');
    }

    if (clientsRow) {
      clientsRow.innerHTML = CLIENT_LOGOS.map(c => `
        <div class="client-logo-item" title="${c.name} (${c.category})">
          <img class="client-logo-img" src="${c.image}" alt="${c.name}" loading="lazy">
        </div>
      `).join('');
    }
  }

  // 11. EDITORIAL STATEMENT ANIMATION
  initEditorialAnimation() {
    const crossedWord = document.querySelector('.statement-crossed-word');
    if (!crossedWord) return;
  }

  // 12. CONTACT FORM & VALIDATION
  initContactForm() {
    const form = document.getElementById('production-brief-form');
    const modal = document.getElementById('form-modal-overlay');
    const modalClose = document.getElementById('modal-close-btn');

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const requiredInputs = form.querySelectorAll('[required]');

      requiredInputs.forEach(input => {
        if (!input.value.trim()) {
          input.classList.add('is-invalid');
          isValid = false;
        } else {
          input.classList.remove('is-invalid');
        }

        // Email validation
        if (input.type === 'email' && input.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value.trim())) {
            input.classList.add('is-invalid');
            isValid = false;
          }
        }
      });

      if (!isValid) {
        audioEngine.playTapeTick(400);
        return;
      }

      // Successful simulated submission
      audioEngine.playSnapLock();
      if (modal) {
        modal.classList.add('active');
      }
      form.reset();
    });

    if (modalClose && modal) {
      modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
      });
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    }
  }

  // 13. LIVE IST PRODUCTION CLOCK
  initISTClock() {
    const clockEl = document.getElementById('live-ist-clock');
    if (!clockEl) return;

    const update = () => {
      const now = new Date();
      const options = { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
      const istString = now.toLocaleTimeString('en-US', options);
      clockEl.textContent = `IST ${istString} (UTC+5:30)`;
    };
    update();
    setInterval(update, 1000);
  }

  // 14. GSAP SCROLLTRIGGER INITIALIZATION
  initGSAPAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Hero title entrance
    gsap.from('.hero-headline', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out'
    });

    // Animate section cards on scroll
    gsap.utils.toArray('.nothing-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power2.out'
      });
    });

    // Editorial statement reveal
    const statementTrigger = document.querySelector('.editorial-statement-section');
    if (statementTrigger) {
      gsap.from('.statement-stamp', {
        scrollTrigger: {
          trigger: statementTrigger,
          start: 'top 75%'
        },
        scale: 0.6,
        opacity: 0,
        duration: 0.7,
        ease: 'back.out(1.7)'
      });
    }
  }
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new FromSkrachApp();
  app.init();
});
