/**
 * FROMSKRACH PRODUCTIONS - MEASURING TAPE ENGINE
 * 
 * Provides:
 * 1. Millimeter tick & numeral generation on tape blades
 * 2. Interactive hero stage transformation slider
 * 3. Live Cursor HUD & Precision Coordinates
 * 4. Page scroll progress in physical millimeters (0mm -> 1000mm)
 */

import { audioEngine } from './audio.js';

export class TapeSystem {
  constructor() {
    this.hudCursor = document.querySelector('.hud-cursor');
    this.hudReadout = document.querySelector('.hud-readout');
    this.navProgressFill = document.querySelector('.nav-progress-fill');
    this.navMmCounter = document.getElementById('nav-mm-counter');
  }

  init() {
    this.populateTapeBlades();
    this.initHeroStageSlider();
    this.initCursorHUD();
    this.initScrollProgressSync();
  }

  // Populate tape elements with metric intervals (10mm, 20mm, 30mm... with red 100mm marks)
  populateTapeBlades() {
    const tapeTracks = document.querySelectorAll('.tape-numbers-track');
    tapeTracks.forEach(track => {
      track.innerHTML = '';
      const count = 40; // Spans up to 2000mm
      for (let i = 1; i <= count; i++) {
        const numDiv = document.createElement('div');
        numDiv.className = 'tape-number';
        const mm = i * 10;
        if (mm % 100 === 0) {
          numDiv.classList.add('decimeter');
          numDiv.textContent = `${mm / 10}`; // 10, 20, 30 cm marks
        } else {
          numDiv.textContent = `${mm / 10}`;
        }
        track.appendChild(numDiv);
      }
    });
  }

  // Interactive slider in Hero: reveals wireframe blueprint vs live stage photo
  initHeroStageSlider() {
    const sliderContainer = document.querySelector('.hero-stage-visual');
    const cadOverlay = document.querySelector('.hero-cad-overlay');
    if (!sliderContainer || !cadOverlay) return;

    let isDragging = false;

    const updateSlider = (clientX) => {
      const rect = sliderContainer.getBoundingClientRect();
      const offsetX = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (offsetX / rect.width) * 100;
      
      cadOverlay.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
      audioEngine.playTapeTick(800 + percentage * 6);
    };

    sliderContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      updateSlider(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        audioEngine.playSnapLock();
      }
    });

    // Touch support for mobile
    sliderContainer.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        updateSlider(e.touches[0].clientX);
      }
    }, { passive: true });

    sliderContainer.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        updateSlider(e.touches[0].clientX);
      }
    }, { passive: true });
  }

  // Desktop Live HUD Tracker
  initCursorHUD() {
    if (!this.hudCursor || !this.hudReadout) return;

    window.addEventListener('mousemove', (e) => {
      this.hudCursor.style.left = `${e.clientX}px`;
      this.hudCursor.style.top = `${e.clientY}px`;

      const x = String(Math.round(e.clientX)).padStart(4, '0');
      const y = String(Math.round(e.clientY)).padStart(4, '0');
      this.hudReadout.innerHTML = `GRID <span>X:${x}</span> <span>Y:${y}</span> | TOL: <span>±0.0mm</span> | STATUS: <span>LOCKED</span>`;
    });
  }

  // Scroll Progress Synchronizer (Converts page scroll into 0mm to 1000mm)
  initScrollProgressSync() {
    window.addEventListener('scroll', () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const currentScroll = window.scrollY;
      const progress = Math.min(1, Math.max(0, currentScroll / totalScroll));
      const mm = Math.round(progress * 1000);

      if (this.navProgressFill) {
        this.navProgressFill.style.width = `${progress * 100}%`;
      }
      if (this.navMmCounter) {
        this.navMmCounter.textContent = `${String(mm).padStart(4, '0')}mm`;
      }
    }, { passive: true });
  }
}
