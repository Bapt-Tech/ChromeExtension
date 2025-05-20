// content.js

(function() {
  // Détecte si les outils de développement sont ouverts via la taille de la fenêtre
  let devToolsOpen = false;

  const checkDevTools = () => {
    const threshold = 160;
    const width = window.outerWidth - window.innerWidth > threshold;
    const height = window.outerHeight - window.innerHeight > threshold;
    if (width || height) {
      devToolsOpen = true;
      alert("Les outils de développement sont ouverts !");
    } else {
      devToolsOpen = false;
    }
  };

  // Vérification toutes les 100 ms
  setInterval(checkDevTools, 100);

  // Bloquer certains raccourcis clavier (Ctrl + Shift + I, F12)
  document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey && event.shiftKey && event.key === 'I') || event.key === 'F12') {
      event.preventDefault();  // Empêche l'action de se produire
      alert("Raccourci bloqué : Ouvrir les DevTools est désactivé.");
    }
  });

  // Détecter un changement de la console
  const originalConsole = console.log;
  console.log = function() {
    if (devToolsOpen) {
      alert("Tentative d'accès à la console détectée !");
    }
    originalConsole.apply(console, arguments);
  };
})();
