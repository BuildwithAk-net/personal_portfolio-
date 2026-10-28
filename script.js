const $ = s => document.querySelector(s);
const nav = $('.navbar'), links = $('.nav-links'), topBtn = $('#topBtn'), bar = $('#progressBar');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (window.Typed) new Typed('.typing', {
    strings: ['Web Designer', 'Front-End Developer', 'Freelancer'],
    typeSpeed: 60, backSpeed: 35, backDelay: 1400, loop: true
});

if (window.particlesJS && !reduce) particlesJS('particles-js', {
    particles: {
        number: { value: 45 }, color: { value: '#38bdf8' }, opacity: { value: .25 },
        size: { value: 2 }, line_linked: { enable: true, color: '#8b5cf6', opacity: .15 },
        move: { speed: 1 }
    },
    interactivity: { events: { onhover: { enable: false } } }
});

$('.menu-btn').addEventListener('click', () => links.classList.toggle('active'));
links.addEventListener('click', e => { if (e.target.tagName === 'A') links.classList.remove('active'); });

const secs = [...document.querySelectorAll('main section[id]')];
addEventListener('scroll', () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (y / h * 100) + '%';
    nav.classList.toggle('scrolled', y > 50);
    topBtn.style.display = y > 400 ? 'block' : 'none';
    const cur = secs.filter(s => s.offsetTop - 140 <= y).pop();
    document.querySelectorAll('.nav-links a').forEach(a =>
        a.classList.toggle('active', cur && a.getAttribute('href') === '#' + cur.id));
}, { passive: true });
topBtn.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
