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