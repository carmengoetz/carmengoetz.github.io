"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.glitchInElements = glitchInElements;

var _vue = require("vue");

function glitchInElements() {
  var glitchInElements = [];

  var handleScroll = function handleScroll() {
    for (var i = 0; i < glitchInElements.length; i++) {
      var elem = glitchInElements[i];

      if (isElemVisible(elem)) {
        elem.classList.add('glitchy');
        glitchInElements.splice(i, 1); // only allow it to run once
      }
    }
  };

  var isElemVisible = function isElemVisible(el) {
    var elem = el.getBoundingClientRect();
    var elemTop = elem.top + 100; // 100 = buffer

    var elemBottom = elem.bottom;
    return elemTop < window.innerHeight && elemBottom >= 0;
  };

  (0, _vue.onMounted)(function () {
    glitchInElements = Array.from(document.getElementsByClassName('glitch-in'));
    document.addEventListener('scroll', handleScroll);
    handleScroll();
  });
  (0, _vue.onUnmounted)(function () {
    document.removeEventListener('scroll', handleScroll);
  });
}