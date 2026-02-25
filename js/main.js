document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const revealItems = document.querySelectorAll(".reveal");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  revealItems.forEach((item, index) => {
    const delay = Math.min(index * 45, 320);
    item.style.setProperty("--reveal-delay", `${delay}ms`);
  });

  if (prefersReducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  if (!prefersReducedMotion) {
    revealItems.forEach((item) => observer.observe(item));
  }

  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const empresa = document.getElementById("empresa")?.value.trim();
    const mensaje = document.getElementById("mensaje")?.value.trim();

    if (!nombre || !email || !empresa || !mensaje) {
      if (feedback) feedback.textContent = "Por favor, completa todos los campos.";
      return;
    }

    const destino = "contacto@egcxanalytics.com";
    const subject = encodeURIComponent("Solicitud de diagnóstico - EG CX Analytics");
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nEmail: ${email}\nEmpresa: ${empresa}\n\nMensaje:\n${mensaje}`
    );

    const mailtoLink = `mailto:${destino}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    if (feedback) {
      feedback.textContent = "Se abrió tu cliente de correo para enviar el mensaje.";
    }
  });
});
