document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     SCROLL REVEAL
  =============================== */
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 80) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();


  /* ===============================
     FORM → GOOGLE FORMS + WHATSAPP
  =============================== */
  const form = document.querySelector(".lead-form");
  if (!form) return;

  form.addEventListener("submit", () => {

    const nombre  = form.querySelector('[name="entry.72589160"]').value;
    const ciudad  = form.querySelector('[name="entry.992979318"]').value;
    const celular = form.querySelector('[name="entry.245707119"]').value;
    const interes = form.querySelector('[name="entry.281527053"]').value;

    const mensaje = `
Hola 👋
Quiero información sobre filtros MD.

🧑 Nombre: ${nombre}
📍 Ciudad: ${ciudad}
📱 Celular: ${celular}
💧 Interés: ${interes}
    `.trim();

    const telefono = "573018220451";

    setTimeout(() => {
      window.open(
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,
        "_blank"
      );
    }, 800);

  });

});
