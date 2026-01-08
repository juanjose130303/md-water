document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     SCROLL REVEAL (ANIMACIONES)
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
     FORMULARIO → GOOGLE FORMS + WHATSAPP
  =============================== */
  const form = document.querySelector(".lead-form");
  if (!form) return;

  form.addEventListener("submit", () => {

    // Mensaje de éxito y botón
    const successMsg = document.querySelector(".form-success");
    const submitBtn = form.querySelector("button[type='submit']");

    // Mostrar mensaje visual
    if (successMsg) {
      successMsg.style.display = "block";
    }

    // Desactivar botón para evitar doble envío
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Enviado ✓";
      submitBtn.style.opacity = ".85";
    }

    // Obtener valores del formulario
    const nombre  = form.querySelector('[name="entry.72589160"]')?.value || "";
    const ciudad  = form.querySelector('[name="entry.992979318"]')?.value || "";
    const celular = form.querySelector('[name="entry.245707119"]')?.value || "";
    const interes = form.querySelector('[name="entry.281527053"]')?.value || "";

    // Mensaje para WhatsApp
    const mensaje = `
Hola 👋
Quiero información sobre filtros MD.

🧑 Nombre: ${nombre}
📍 Ciudad: ${ciudad}
📱 Celular: ${celular}
💧 Interés: ${interes}
    `.trim();

    // ⚠️ Número de WhatsApp (formato internacional)
    const telefono = "573018220451";

    // Abrir WhatsApp luego del envío a Google Forms
    setTimeout(() => {
      window.open(
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,
        "_blank"
      );
    }, 800);

  });

});


// Scroll suave a contacto (mobile UX)
document.querySelectorAll('a[href="#contacto"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector("#contacto").scrollIntoView({
      behavior: "smooth"
    });
  });
});
