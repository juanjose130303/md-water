form.addEventListener("submit", (e) => {

  // ===============================
  // VALIDACIONES UX
  // ===============================

  const nombre  = form.querySelector('[name="entry.72589160"]');
  const ciudad  = form.querySelector('[name="entry.992979318"]');
  const celular = form.querySelector('[name="entry.245707119"]');
  const interes = form.querySelector('[name="entry.281527053"]');

  // Limpiar estados previos
  [nombre, ciudad, celular, interes].forEach(el => {
    el.style.borderColor = "";
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

  // Validar celular (mínimo 10 dígitos)
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

  // ===============================
  // WHATSAPP (NO SE TOCA LÓGICA)
  // ===============================

  const mensaje = `
Hola 👋
Quiero información sobre filtros MD.

🧑 Nombre: ${nombre.value}
📍 Ciudad: ${ciudad.value}
📱 Celular: ${celular.value}
💧 Interés: ${interes.value}
  `.trim();

  const telefono = "573018220451";

  setTimeout(() => {
    window.open(
      `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  }, 800);

});
