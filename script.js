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
