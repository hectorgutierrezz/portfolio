const languageButtons = document.querySelectorAll("[data-language]");
const translatableElements = document.querySelectorAll("[data-ca][data-en]");
const yearElement = document.querySelector("#year");
const pageTranslations = {
  ca: {
    title: "Hèctor Gutiérrez — Enginyeria de software",
    description: "Portfolio d'Hèctor Gutiérrez, estudiant d'Enginyeria Informàtica a Barcelona.",
    navigation: "Navegació principal",
    languageSelector: "Selecciona l'idioma",
  },
  en: {
    title: "Hèctor Gutiérrez — Software Engineering",
    description: "Portfolio of Hector Gutierrez, Computer Engineering student in Barcelona.",
    navigation: "Main navigation",
    languageSelector: "Select language",
  },
};

function setLanguage(language) {
  const translations = pageTranslations[language];
  document.documentElement.lang = language;
  document.title = translations.title;
  document.querySelector('meta[name="description"]').content = translations.description;
  document.querySelector(".main-nav").setAttribute("aria-label", translations.navigation);
  document.querySelector(".language-switch").setAttribute("aria-label", translations.languageSelector);

  for (const element of translatableElements) {
    element.innerHTML = element.dataset[language];
  }

  for (const button of languageButtons) {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  }
}

for (const button of languageButtons) {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
}

yearElement.textContent = String(new Date().getFullYear());

// Active section highlight in main navigation
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".main-nav a[href^='#']");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          for (const link of navLinks) {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          }
        }
      }
    },
    { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
  );

  for (const section of sections) {
    sectionObserver.observe(section);
  }
}

// Sticky header elevation shadow on scroll
const headerWrap = document.querySelector(".site-header-wrap");
if (headerWrap) {
  window.addEventListener(
    "scroll",
    () => {
      headerWrap.classList.toggle("scrolled", window.scrollY > 20);
    },
    { passive: true }
  );
}

// Quick copy email interaction
const copyButtons = document.querySelectorAll(".copy-email-btn");
for (const btn of copyButtons) {
  btn.addEventListener("click", async () => {
    const email = btn.dataset.email;
    const tooltip = btn.querySelector(".copy-tooltip");
    try {
      await navigator.clipboard.writeText(email);
      if (tooltip) {
        const currentLang = document.documentElement.lang || "ca";
        tooltip.textContent = currentLang === "ca" ? "Copiat!" : "Copied!";
        btn.classList.add("copied");
        setTimeout(() => {
          tooltip.textContent = tooltip.dataset[currentLang] || tooltip.dataset.ca;
          btn.classList.remove("copied");
        }, 2200);
      }
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
}
