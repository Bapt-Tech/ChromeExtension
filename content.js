// content.js

(function() {
  let devToolsOpen = false;

  // Vérifie la taille de la fenêtre pour détecter les DevTools
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

  // Vérifie régulièrement si DevTools est ouvert
  setInterval(checkDevTools, 100);

  // Rendre plus difficile l'accès à la console
  const originalConsole = console.log;
  console.log = function() {
    if (devToolsOpen) {
      alert("Tentative d'accès à la console détectée !");
      // Peut aussi envoyer un message pour prévenir l'utilisateur.
    }
    originalConsole.apply(console, arguments);
  };

  // Ralentir l'exécution du script si les DevTools sont ouverts
  setInterval(() => {
    if (devToolsOpen) {
      debugger;  // Si les DevTools sont ouverts, met en pause l'exécution du script
    }
  }, 1000);

  // Autre approche : tenter de détecter la détection de la console
  Object.defineProperty(window, 'console', {
    get: function() {
      if (devToolsOpen) {
        alert("Accès à la console détecté !");
      }
      return console;
    }
  });

})();
