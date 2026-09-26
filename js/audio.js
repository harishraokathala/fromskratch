/**
 * FROMSKRACH PRODUCTIONS - AUDIO SYNTHESIZER
 * Web Audio API synthesizer for tactile mechanical feedback.
 * 
 * Strict Guideline: Sound is 100% optional, NEVER autoplays,
 * and requires explicit user activation via the [SOUND: OFF/ON] control.
 */

class TapeAudioEngine {
  constructor() {
    this.ctx = null;
    this.isEnabled = false;
    this.lastTickTime = 0;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.init();
    this.isEnabled = !this.isEnabled;
    return this.isEnabled;
  }

  // Microscopic mechanical click when tape blade advances
  playTapeTick(frequency = 1200) {
    if (!this.isEnabled || !this.ctx) return;
    const now = performance.now();
    if (now - this.lastTickTime < 35) return; // Debounce rapid ticks
    this.lastTickTime = now;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.015);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.015);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.015);
    } catch (e) {
      // Audio error fallback
    }
  }

  // Solid mechanical latch/lock tone when milestone is reached or button snapped
  playSnapLock() {
    if (!this.isEnabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch (e) {}
  }
}

export const audioEngine = new TapeAudioEngine();
