/* ============================================================
   Cultivora Land — formulaire d'abonnement
   Envoie { "email": "..." } en POST (JSON) vers l'endpoint défini
   dans l'attribut data-endpoint du formulaire (par défaut
   /api/subscribe). Le backend doit répondre :
     - 2xx            → inscription enregistrée
     - 400 / 422      → adresse invalide
     - 429            → trop de tentatives
     - autre / réseau → service momentanément indisponible
============================================================ */
(function () {
  "use strict";

  var form = document.getElementById("sub-form");
  if (!form) return;

  var input = document.getElementById("sub-email");
  var feedback = document.getElementById("sub-feedback");
  var consent = document.getElementById("sub-consent");
  var success = document.getElementById("sub-success");
  var button = form.querySelector(".sub-submit");
  var label = form.querySelector(".sub-submit__label");
  var endpoint = form.getAttribute("data-endpoint") || "/api/subscribe";
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var defaultLabel = label.textContent;

  function setError(message) {
    feedback.textContent = message;
    feedback.className = "sub-feedback is-error";
    input.setAttribute("aria-invalid", "true");
  }

  function clearError() {
    feedback.textContent = "";
    feedback.className = "sub-feedback";
    input.removeAttribute("aria-invalid");
  }

  function setLoading(on) {
    button.disabled = on;
    button.classList.toggle("is-loading", on);
    label.textContent = on ? "Envoi…" : defaultLabel;
  }

  function showSuccess() {
    form.hidden = true;
    feedback.hidden = true;
    if (consent) consent.hidden = true;
    success.hidden = false;
    success.setAttribute("tabindex", "-1");
    success.focus();
  }

  function unavailable() {
    setError(
      "L'inscription est momentanément indisponible. Réessayez dans quelques instants ou écrivez-nous depuis la page Contact."
    );
  }

  input.addEventListener("input", function () {
    if (input.getAttribute("aria-invalid")) clearError();
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearError();

    var email = input.value.trim();

    if (!email) {
      setError("Veuillez saisir votre adresse e-mail.");
      input.focus();
      return;
    }
    if (!emailRe.test(email)) {
      setError("Cette adresse e-mail ne semble pas valide.");
      input.focus();
      return;
    }

    // Champ piège : un humain ne le remplit jamais.
    if (form.elements.website && form.elements.website.value) {
      showSuccess();
      return;
    }

    setLoading(true);

    var controller = "AbortController" in window ? new AbortController() : null;
    var timer = setTimeout(function () {
      if (controller) controller.abort();
    }, 12000);

    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email: email }),
      signal: controller ? controller.signal : undefined
    })
      .then(function (response) {
        clearTimeout(timer);
        if (response.ok) {
          showSuccess();
        } else if (response.status === 400 || response.status === 422) {
          setError("Cette adresse e-mail ne semble pas valide.");
        } else if (response.status === 429) {
          setError("Trop de tentatives. Réessayez dans quelques minutes.");
        } else {
          unavailable();
        }
      })
      .catch(function () {
        clearTimeout(timer);
        unavailable();
      })
      .then(function () {
        setLoading(false);
      });
  });
})();
