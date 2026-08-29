const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const modal = document.getElementById('galleryModal');
const modalTitle = document.getElementById('modalTitle');
const modalNumber = document.getElementById('modalNumber');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.gallery-item').forEach((item, index) => {
  item.addEventListener('click', () => {
    modalTitle.textContent = item.dataset.title || 'Galería institucional';
    modalNumber.textContent = `GALERÍA ${String(index + 1).padStart(2, '0')}`;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

modalClose?.addEventListener('click', closeModal);
modal?.querySelector('[data-close="true"]')?.addEventListener('click', closeModal);

document.getElementById('contactForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('El formulario está preparado visualmente. Para recibir mensajes reales se puede conectar a un servicio gratuito.');
});
