/* ================= SCROLL REVEAL ================= */

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

reveals.forEach(el => observer.observe(el));


/* ================= FORM SUBMIT (FRONT ONLY) ================= */

const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    alert(
      'Gracias por tu interés 💧\n' +
      'Pronto un asesor MD se pondrá en contacto contigo.'
    );

    form.reset();
  });
}

