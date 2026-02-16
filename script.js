// Toggle mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('#mobileMenu') && !e.target.closest('#menuBtn')) {
    mobileMenu.classList.add('hidden');
  }
});

// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Contact form → WhatsApp
function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value;
  const text = `مرحباً، أريد طلب خدمة ${service}. الاسم: ${name}، الهاتف: ${phone}، الرسالة: ${message}`;
  window.open(`https://wa.me/967737207420?text=${encodeURIComponent(text)}`, '_blank');
}
