/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

class AudioEngineClass {
  private ctx: AudioContext | null = null;
  private primaryGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private biquadFilter: BiquadFilterNode | null = null;
  private lfo: OscillatorNode | null = null;
  private noiseNode: AudioWorkletNode | ScriptProcessorNode | null = null;
  private currentDrone: string | null = null;

  constructor() {
    // Lazy initialized when user first interacts / toggles play
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Plays a beautiful physical Singing Bowl chime when counting!
  public playTing(frequency = 783.99) { // G5 - soft therapeutic note
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      
      // Creating composite chime harmonics
      const chimeGain = this.ctx.createGain();
      chimeGain.gain.setValueAtTime(0, now);
      // Fade in extremely fast to avoid click
      chimeGain.gain.linearRampToValueAtTime(0.3, now + 0.005);
      // Exponential long decay
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const osc3 = this.ctx.createOscillator();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(frequency, now); // Fundamental

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(frequency * 1.5, now); // Fifth harmonic

      osc3.type = 'sine';
      osc3.frequency.setValueAtTime(frequency * 2, now); // Octave

      // Connect and run
      osc1.connect(chimeGain);
      osc2.connect(chimeGain);
      osc3.connect(chimeGain);
      chimeGain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc3.start(now);

      osc1.stop(now + 2.0);
      osc2.stop(now + 2.0);
      osc3.stop(now + 2.0);
    } catch (err) {
      console.warn('Audio Ting play ignored due to browser policy or error:', err);
    }
  }

  public playLowTock() {
    try {
      this.initContext();
      if (!this.ctx) return;
      
      const now = this.ctx.currentTime;
      const gainNode = this.ctx.createGain();
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.2, now + 0.002);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);

      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(90, now + 0.1);

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.2);
    } catch (e) {
      console.warn(e);
    }
  }

  public startDrone(type: 'om_drone' | 'solfeggio' | 'cosmic_silence', initialVolume: number) {
    try {
      this.initContext();
      if (!this.ctx) return;

      this.stop(); // Stop any pending drone

      const now = this.ctx.currentTime;
      this.currentDrone = type;

      // Primary Gain Node
      this.primaryGain = this.ctx.createGain();
      // Ramp smoothly to target volume
      this.primaryGain.gain.setValueAtTime(0, now);
      this.primaryGain.gain.linearRampToValueAtTime(initialVolume, now + 2.0);

      // Low Pass filter to keep drone warm, soft and spacious
      this.biquadFilter = this.ctx.createBiquadFilter();
      this.biquadFilter.type = 'lowpass';
      this.biquadFilter.Q.setValueAtTime(1.5, now);

      if (type === 'om_drone') {
        // Deep low frequency resonance corresponding to the sacred OM 136.1 Hz (C#3 fundamental of earth orbit)
        const fundamental = 136.1;
        this.biquadFilter.frequency.setValueAtTime(250, now);

        // Generate harmonics
        const frequencies = [fundamental, fundamental * 1.5, fundamental * 2, fundamental * 3];
        const types: OscillatorType[] = ['sine', 'triangle', 'sine', 'sine'];
        const weights = [0.6, 0.25, 0.15, 0.05];

        frequencies.forEach((freq, idx) => {
          if (!this.ctx || !this.primaryGain) return;
          const osc = this.ctx.createOscillator();
          const oscGain = this.ctx.createGain();

          osc.type = types[idx];
          osc.frequency.setValueAtTime(freq, now);

          // Add a tiny detune to create a warm chorus/beating effect
          osc.frequency.setValueAtTime(freq + (Math.random() * 0.4 - 0.2), now);

          oscGain.gain.setValueAtTime(weights[idx], now);

          // Build connection: osc -> oscGain -> filter
          osc.connect(oscGain);
          if (this.biquadFilter) {
            oscGain.connect(this.biquadFilter);
          }
          osc.start(now);
          this.oscillators.push(osc);
        });

      } else if (type === 'solfeggio') {
        // Core Solfeggio healing frequencies: 528 Hz (Transformation / Love) and 432 Hz (Universal pitch)
        this.biquadFilter.frequency.setValueAtTime(600, now);

        const solfeggioFreqs = [432, 528, 264, 396];
        const weights = [0.4, 0.4, 0.3, 0.2];

        solfeggioFreqs.forEach((freq, idx) => {
          if (!this.ctx || !this.primaryGain) return;
          const osc = this.ctx.createOscillator();
          const oscGain = this.ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now);
          // Detune slight pitch differential
          osc.frequency.setValueAtTime(freq + Math.sin(idx) * 0.3, now);

          oscGain.gain.setValueAtTime(weights[idx], now);

          osc.connect(oscGain);
          if (this.biquadFilter) {
            oscGain.connect(this.biquadFilter);
          }
          osc.start(now);
          this.oscillators.push(osc);
        });

        // Add a slow LFO to oscillate the amplitude of solfeggio chords to guide breathing
        this.lfo = this.ctx.createOscillator();
        this.lfo.frequency.setValueAtTime(0.12, now); // ~8 seconds swell cycle

        const lfoGain = this.ctx.createGain();
        lfoGain.gain.setValueAtTime(0.15, now); // Amplitude range

        this.lfo.connect(lfoGain);
        if (this.biquadFilter) {
          lfoGain.connect(this.biquadFilter.frequency); // Swell filter cutoff dynamically
        }
        this.lfo.start(now);

      } else if (type === 'cosmic_silence') {
        // Filtered deep brown/pink noise simulating space vacuum and hum
        this.biquadFilter.frequency.setValueAtTime(180, now);

        // Generate organic white/pink noise synthetically via ScriptProcessor
        // Since AudioWorklet requires separate files, ScriptProcessor is robust for simple client noise
        try {
          // Fallback simple multi-slow triangle waves to simulate air currents cleanly
          const carrierFreqs = [55, 110, 165, 220];
          carrierFreqs.forEach((freq, index) => {
            if (!this.ctx || !this.primaryGain) return;
            const osc = this.ctx.createOscillator();
            const oscGain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now);
            oscGain.gain.setValueAtTime(index === 0 ? 0.5 : 0.15, now);

            osc.connect(oscGain);
            if (this.biquadFilter) {
              oscGain.connect(this.biquadFilter);
            }
            osc.start(now);
            this.oscillators.push(osc);
          });

          // Ambient space wind modulator
          this.lfo = this.ctx.createOscillator();
          this.lfo.frequency.setValueAtTime(0.08, now); // Very slow

          const lfoGain = this.ctx.createGain();
          lfoGain.gain.setValueAtTime(50, now); // Sweep cutoff by 50Hz

          this.lfo.connect(lfoGain);
          if (this.biquadFilter) {
            lfoGain.connect(this.biquadFilter.frequency);
          }
          this.lfo.start(now);
          
        } catch (noiseErr) {
          console.warn('Advanced cosmic noise failed, falling back to clean suboscillator drone', noiseErr);
        }
      }

      // Chain: Filter -> Gain -> Destination
      if (this.biquadFilter && this.primaryGain) {
        this.biquadFilter.connect(this.primaryGain);
        this.primaryGain.connect(this.ctx.destination);
      }
    } catch (e) {
      console.error('Failed to start ambient synthesized drone', e);
    }
  }

  public setVolume(volume: number) {
    if (this.ctx && this.primaryGain) {
      const now = this.ctx.currentTime;
      this.primaryGain.gain.linearRampToValueAtTime(volume, now + 0.2);
    }
  }

  public stop() {
    try {
      const now = this.ctx ? this.ctx.currentTime : 0;
      
      // Stop oscillators
      this.oscillators.forEach(osc => {
        try {
          osc.stop();
        } catch (e) {}
      });
      this.oscillators = [];

      // Stop LFO
      if (this.lfo) {
        try {
          this.lfo.stop();
        } catch (e) {}
        this.lfo = null;
      }

      // Cleanup routing nodes
      if (this.primaryGain) {
        this.primaryGain.disconnect();
        this.primaryGain = null;
      }

      if (this.biquadFilter) {
        this.biquadFilter.disconnect();
        this.biquadFilter = null;
      }

      this.currentDrone = null;
    } catch (e) {
      console.warn('Error cleaning up audio:', e);
    }
  }

  public getCurrentDrone() {
    return this.currentDrone;
  }
}

export const AudioEngine = new AudioEngineClass();
