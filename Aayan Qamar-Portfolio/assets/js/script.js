'use strict';

const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#main-nav');

menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion && window.gsap) {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  intro.from('.site-header', { y: -30, autoAlpha: 0, duration: 0.7 })
    .from('.hero .eyebrow', { y: 20, autoAlpha: 0, duration: 0.55 }, '-=.2')
    .from('.hero-title .line > span', { yPercent: 115, duration: 0.9, stagger: 0.1 }, '-=.25')
    .from('.hero-intro, .hero-actions', { y: 24, autoAlpha: 0, duration: 0.65, stagger: 0.12 }, '-=.45')
    .from('.hero-visual', { scale: 0.86, autoAlpha: 0, duration: 1 }, '-=.8')
    .from('.node, .metric-card', { scale: 0, autoAlpha: 0, duration: 0.55, stagger: 0.08 }, '-=.55');
  gsap.to('.orbit-one', { rotation: 360, transformOrigin: '50% 50%', duration: 30, repeat: -1, ease: 'none' });
  gsap.to('.orbit-two', { rotation: -360, transformOrigin: '50% 50%', duration: 24, repeat: -1, ease: 'none' });
  gsap.to('.signal-one', { motionPath: { path: '.route', align: '.route', alignOrigin: [0.5, 0.5] }, duration: 11, repeat: -1, ease: 'none' });
  gsap.to('.signal-two', { motionPath: { path: '.route', align: '.route', alignOrigin: [0.5, 0.5] }, duration: 11, repeat: -1, ease: 'none', delay: -5.5 });
  gsap.utils.toArray('.reveal').forEach((element) => gsap.from(element, { scrollTrigger: { trigger: element, start: 'top 87%', once: true }, y: 42, autoAlpha: 0, duration: 0.8, ease: 'power3.out' }));
  gsap.utils.toArray('.project-art svg').forEach((art) => gsap.from(art, { scrollTrigger: { trigger: art, start: 'top 85%', once: true }, scale: 0.82, rotation: -2, autoAlpha: 0, duration: 1, ease: 'power3.out' }));
  gsap.from('.flow-line', { scrollTrigger: { trigger: '.principle-visual', start: 'top 80%', once: true }, strokeDashoffset: 220, duration: 2, stagger: 0.18, ease: 'power2.out' });
  if (window.matchMedia('(pointer: fine)').matches) {
    const glow = document.querySelector('.cursor-glow');
    window.addEventListener('pointermove', (event) => gsap.to(glow, { x: event.clientX, y: event.clientY, duration: 0.7, ease: 'power2.out' }));
    document.querySelector('.hero-visual').addEventListener('pointermove', (event) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      gsap.to('.system-map', { x: (event.clientX - bounds.left - bounds.width / 2) * 0.018, y: (event.clientY - bounds.top - bounds.height / 2) * 0.018, duration: 0.7 });
    });
  }
}
