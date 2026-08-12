// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Build waveform bars dynamically
  document.querySelectorAll('.waveform').forEach(wf => {
    const count = parseInt(wf.dataset.bars || '24', 10);
    for (let i = 0; i < count; i++) {
      const bar = document.createElement('span');
      const h = 30 + Math.round(Math.sin(i * 0.7) * 20 + Math.random() * 30);
      bar.style.height = h + '%';
      bar.style.animationDelay = (i * 0.06) + 's';
      wf.appendChild(bar);
    }
  });
  document.querySelectorAll('.wave-divider').forEach(wf => {
    const count = parseInt(wf.dataset.bars || '60', 10);
    for (let i = 0; i < count; i++) {
      const bar = document.createElement('span');
      const h = 15 + Math.round(Math.abs(Math.sin(i * 0.4)) * 70);
      bar.style.height = h + '%';
      wf.appendChild(bar);
    }
  });

  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});
