document.addEventListener("DOMContentLoaded", () => {

  /* ================= SCROLL REVEAL ================= */

  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(el => observer.observe(el));

  /* ================= FORM VALIDATION ================= */

  const form = document.querySelector(".lead-form");
  if (!form) return;

  const button = form.querySelector(".btn-primary");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, select");
    let valid = true;

    inputs.forEach(input => {
      if (!input.value || input.value.includes("Selecciona")) {
        input.style.borderColor = "#ef4444";
        valid = false;
      } else {
        input.style.borderColor = "var(--border-soft)";
      }
    });

    if (!valid) {
      showMessage("Por favor completa todos los campos", false);
      return;
    }

    button.innerText = "Enviando...";
    button.style.pointerEvents = "none";

    setTimeout(() => {
      showMessage("Solicitud enviada correctamente", true);
      form.reset();
      button.innerText = "Enviar solicitud";
      button.style.pointerEvents = "auto";
    }, 1200);
  });

  function showMessage(text, success) {
    let msg = document.querySelector(".form-message");

    if (!msg) {
      msg = document.createElement("div");
      msg.className = "form-message";
      form.appendChild(msg);
    }

    msg.innerText = text;
    msg.style.color = success ? "#22c55e" : "#ef4444";
    msg.style.marginTop = "14px";
    msg.style.fontSize = ".9rem";
  }

});
