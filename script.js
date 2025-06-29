  const landing = document.getElementById("landing");
  const siteContent = document.getElementById("siteContent");
  const musique = document.getElementById("musique");
  const muteButton = document.getElementById("muteBtn");
  const volumeControl = document.getElementById("volumeControl");

  let musiqueLancee = false;

  landing.addEventListener("click", () => {
    landing.style.display = "none";
    siteContent.style.display = "block";
    musique.play().then(() => {
      musiqueLancee = true;
    }).catch((e) => {
      console.log("Erreur lors du démarrage de la musique :", e);
    });
  });

  function muteMusique() {
    if (!musiqueLancee) return;

    if (musique.paused) {
      musique.play().then(() => {
        muteButton.textContent = "🔇 Couper la musique";
      }).catch((e) => {
        console.log("Erreur lors de la relance de la musique :", e);
      });
    } else {
      musique.pause();
      muteButton.textContent = "🔊 Reprendre la musique";
    }
  }


  volumeControl.addEventListener("input", () => {
    musique.volume = volumeControl.value;
  });

      // Date de début (modifie ici la date réelle de votre début)
    const dateDebut = new Date(2025, 8, 8, 17, 0, 0);

    function updateCompteur() {
      const maintenant = new Date();
      let diff = maintenant - dateDebut; // différence en millisecondes

      if (diff < 0) {
        document.getElementById('compteur').textContent = "Surprise !";
        return;
      }

      const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
      const heures = Math.floor((diff / (1000 * 60 * 60)) % 24);

      document.getElementById('compteur').textContent =
        jours + " jours et " + heures + " heures passés ensemble";
    }

/*
          document.getElementById('compteur').textContent =
        jours + " jours et " + heures + " heures passés ensemble";
*/

    setInterval(updateCompteur, 1000 * 60 * 5); // mise à jour toutes les 5 minutes
    updateCompteur(); // mise à jour au chargements