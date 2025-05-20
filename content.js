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

      // Optionnellement, vous pouvez rediriger l'utilisateur ou fermer la fenêtre
      // window.close();
    } else {
      devToolsOpen = false;
    }
  };

  // Vérification toutes les 100 ms
  setInterval(checkDevTools, 100);

  // Détecter un changement de la console
  const originalConsole = console.log;
  console.log = function() {
    if (devToolsOpen) {
      alert("Tentative d'accès à la console détectée !");
    }
    originalConsole.apply(console, arguments);
  };
})();
