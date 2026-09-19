'use strict';

const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#main-nav');
const internalLinks = document.querySelectorAll('a[href^="#"]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

internalLinks.forEach((link) => link.addEventListener('click', (event) => {
  const target = document.querySelector(link.getAttribute('href'));
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
  history.replaceState(null, '', link.getAttribute('href'));
}));

document.querySelectorAll('.faq-list details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq-list details[open]').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

const trackedSections = [...document.querySelectorAll('main section[id]')];
const navById = new Map([...navigation.querySelectorAll('a[href^="#"]')].map((link) => [link.hash.slice(1), link]));
const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navById.forEach((link, id) => link.classList.toggle('active', id === visible.target.id));
}, { rootMargin: '-30% 0px -55%', threshold: [0, .15, .4] });
trackedSections.forEach((section) => sectionObserver.observe(section));

if (!reducedMotion && window.gsap) {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  gsap.defaults({ ease: 'power3.out' });

  gsap.to('.scroll-progress', {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: { start: 0, end: 'max', scrub: 0.25 }
  });

  const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  intro.from('.site-header', { y: -30, autoAlpha: 0, duration: 0.7 })
    .from('.hero .eyebrow', { y: 20, autoAlpha: 0, duration: 0.55 }, '-=.2')
    .from('.hero-title .line > span', { yPercent: 115, duration: 0.9, stagger: 0.1 }, '-=.25')
    .from('.hero-intro, .hero-actions', { y: 24, autoAlpha: 0, duration: 0.65, stagger: 0.12 }, '-=.45')
    .from('.hero-visual', { x: 28, autoAlpha: 0, duration: 1 }, '-=.8')
    .from('.node, .metric-card', { y: 12, autoAlpha: 0, duration: 0.5, stagger: 0.06 }, '-=.55');

  gsap.to('.hero-copy', {
    yPercent: 10,
    autoAlpha: .55,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.8 }
  });
  gsap.to('.hero-visual', {
    yPercent: -9,
    rotate: 2,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }
  });

  gsap.to('.signal-one', { motionPath: { path: '.route', align: '.route', alignOrigin: [0.5, 0.5] }, duration: 11, repeat: -1, ease: 'none' });
  gsap.to('.signal-two', { motionPath: { path: '.route', align: '.route', alignOrigin: [0.5, 0.5] }, duration: 11, repeat: -1, ease: 'none', delay: -5.5 });

  gsap.from('.proof-grid article', {
    y: 35,
    autoAlpha: 0,
    stagger: .11,
    duration: .75,
    scrollTrigger: { trigger: '.proof-bar', start: 'top 88%', once: true }
  });


  gsap.from('.problem-card', {
    x: 50,
    autoAlpha: 0,
    stagger: .14,
    duration: .8,
    scrollTrigger: { trigger: '.problem-grid', start: 'top 82%', once: true }
  });

  gsap.utils.toArray('.project-card').forEach((card, index) => {
    const image = card.querySelector('.project-image img');
    const copy = card.querySelector('.project-copy');
    gsap.from(card, {
      y: 65,
      autoAlpha: 0,
      duration: .95,
      scrollTrigger: { trigger: card, start: 'top 86%', once: true }
    });
    gsap.from(copy.children, {
      y: 22,
      autoAlpha: 0,
      stagger: .07,
      duration: .55,
      delay: .12,
      scrollTrigger: { trigger: card, start: 'top 82%', once: true }
    });
    gsap.fromTo(image, { scale: 1.08 }, {
      scale: 1,
      ease: 'none',
      scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: .8 }
    });
    gsap.to(card, { '--card-shift': `${index % 2 ? -8 : 8}px`, duration: 0 });
  });

  gsap.from('.process-grid li', {
    y: 48,
    autoAlpha: 0,
    stagger: .12,
    duration: .75,
    scrollTrigger: { trigger: '.process-grid', start: 'top 84%', once: true }
  });

  gsap.utils.toArray('.section-heading').forEach((heading) => gsap.from(heading.children, {
    y: 32,
    autoAlpha: 0,
    stagger: .1,
    duration: .72,
    scrollTrigger: { trigger: heading, start: 'top 86%', once: true }
  }));

  gsap.from('.faq-list details', {
    x: 42,
    autoAlpha: 0,
    stagger: .09,
    duration: .65,
    scrollTrigger: { trigger: '.faq-list', start: 'top 85%', once: true }
  });

  gsap.from('.contact-panel > *:not(.contact-rings)', {
    y: 35,
    autoAlpha: 0,
    stagger: .1,
    duration: .7,
    scrollTrigger: { trigger: '.contact-panel', start: 'top 82%', once: true }
  });
  gsap.to('.contact-rings', {
    rotate: 28,
    ease: 'none',
    scrollTrigger: { trigger: '.contact-panel', start: 'top bottom', end: 'bottom top', scrub: 1 }
  });
}
