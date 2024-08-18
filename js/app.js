import { util } from "./util.js";
import { audio } from "./audio.js";

document.addEventListener("DOMContentLoaded", () => {
  util.init();
  audio.init();
  window.AOS.init();

  window.util = util;
  window.audio = audio;
});
