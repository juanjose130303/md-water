document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     SCROLL REVEAL (APPLE STYLE)
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
     FORMULARIO — VALIDACIÓN + WHATSAPP
  =============================== */
  const form = document.querySelector(".lead-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {

    // Campos
    const nombre  = form.querySelector('[name="entry.72589160"]');
    const ciudad  = form.querySelector('[name="entry.992979318"]');
    const celular = form.querySelector('[name="entry.245707119"]');
    const interes = form.querySelector('[name="entry.281527053"]');

    // Limpiar estilos previos
    [nombre, ciudad, celular, interes].forEach(el => {
      if (el) el.style.borderColor = "";
    });

    // Validar nombre
    if (!nombre.value.trim()) {
      nombre.style.borderColor = "var(--primary)";
      nombre.focus();
      e.preventDefault();
      return;
    }

    // Validar ciudad
    if (!ciudad.value.trim()) {
      ciudad.style.borderColor = "var(--primary)";
      ciudad.focus();
      e.preventDefault();
      return;
    }

    // Validar celular (solo números, mínimo 10)
    const celularLimpio = celular.value.replace(/\D/g, "");
    if (celularLimpio.length < 10) {
      celular.style.borderColor = "var(--primary)";
      celular.focus();
      e.preventDefault();
      return;
    }

    // Validar selección
    if (!interes.value) {
      interes.style.borderColor = "var(--primary)";
      interes.focus();
      e.preventDefault();
      return;
    }

    /* ===============================
       MENSAJE WHATSAPP
    =============================== */
    const mensaje = `
Hola 👋
Quiero información sobre filtros MD.

🧑 Nombre: ${nombre.value}
📍 Ciudad: ${ciudad.value}
📱 Celular: ${celular.value}
💧 Interés: ${interes.value}
    `.trim();

    // ⚠️ Número en formato internacional (Colombia)
    const telefono = "573018220451";

    // Abrir WhatsApp después de enviar a Google Forms
    setTimeout(() => {
      window.open(
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,
        "_blank"
      );
    }, 800);

  });

});


/* ===============================
   NEWSLETTER → GOOGLE FORMS
=============================== */

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {
  const successMsg = document.querySelector(".newsletter-success");

  newsletterForm.addEventListener("submit", () => {
    setTimeout(() => {
      newsletterForm.reset();
      if (successMsg) successMsg.style.display = "block";
    }, 800);
  });
}
