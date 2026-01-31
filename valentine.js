document.addEventListener("DOMContentLoaded", () => {
  const startOverlay = document.getElementById("startOverlay");
  const introVideo = document.getElementById("introVideo");
  const valentineCard = document.getElementById("valentineCard");
  const messageEl = document.getElementById("text");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const yesVideo = document.getElementById("yesVideo");
  const bgMusic = document.getElementById("bgMusic");
  const yesMusic = document.getElementById("yesMusic");

  let i = 0;
  let noClickCount = 0;
  let musicStarted = false;

  const message = `
I know we haven't had a very good day, but regardless I WANT YOU and
there is nobody in this world I'd rather spend my time with.
I LOVE YOUUUUUUUUUUUUUUUUUU💕💕💕💕💕💕`;

  const noTexts = [
    "Hmm… maybe later? 😏",
    "Are you sure? 💖",
    "Nope 😂",
    "Try again 😜",
    "Just say yes 😘"
  ];

  /* Typewriter effect */
  function typeWriter() {
    if (i < message.length) {
      messageEl.innerHTML += message.charAt(i);
      i++;
      setTimeout(typeWriter, 80); // slower speed
    }
  }

  /* Overlay click: start intro video + background music */
  function overlayClicked() {
    startOverlay.style.display = "none";
    introVideo.style.display = "block";

    // play muted intro video
    introVideo.play();

    // start background music
    if (!musicStarted) {
      musicStarted = true;
      bgMusic.volume = 0;
      bgMusic.play();
      let vol = 0;
      const fadeIn = setInterval(() => {
        if (vol < 0.35) {
          vol += 0.01;
          bgMusic.volume = vol;
        } else {
          clearInterval(fadeIn);
        }
      }, 100);
    }
  }

  startOverlay.addEventListener("click", overlayClicked);

  /* Click on intro video: hide video, show Valentine card */
  introVideo.addEventListener("click", () => {
    introVideo.style.display = "none"; // hide intro video
    valentineCard.style.display = "block"; // show Valentine card
    typeWriter();
  });

  /* NO button */
  noBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    noBtn.textContent = noTexts[noClickCount % noTexts.length];
    noClickCount++;
    yesBtn.style.transform = `scale(${1 + noClickCount * 0.15})`;
  });

  /* YES button */
  yesBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    valentineCard.style.display = "none";
    yesVideo.style.display = "block";
    yesVideo.play();
    yesMusic.volume = 0.4;
    yesMusic.play();

    const giftText = document.createElement("div");
    giftText.textContent = "YAYYY 🎁 HERE'S A GIFT!";
    giftText.style.fontSize = "2rem";
    giftText.style.color = "#ff2d6d";
    giftText.style.textAlign = "center";
    giftText.style.marginTop = "20px";
    giftText.style.fontWeight = "600";
    yesVideo.parentNode.insertBefore(giftText, yesVideo.nextSibling);
  });
});
