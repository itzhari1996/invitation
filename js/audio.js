export const audio = (() => {
  let audio = null;

  const init = () => {
    audio = new Audio("./assets/music/sound.mp3");
    audio.currentTime = 0;
    audio.autoplay = true;
    audio.muted = false;
    audio.loop = true;
    audio.volume = 1;
    audio.load();
  };

  const button = async (button) => {
    if (button.getAttribute("data-status") !== "true") {
      await audio.play();
      button.setAttribute("data-status", "true");
      button.innerHTML = '<i class="fa-solid fa-circle-pause spin-button"></i>';
      return;
    }

    button.setAttribute("data-status", "false");
    audio.pause();
    button.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
  };

  return {
    init,
    play: () => audio.play(),
    button,
  };
})();
