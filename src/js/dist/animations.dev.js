// import { onMounted, onUnmounted } from 'vue'
// export function glitchInElements(){
//     var glitchInElements = []
//     const handleScroll = () => {
//       for (var i = 0; i < glitchInElements.length; i++) {
//         var elem = glitchInElements[i]
//         if (isElemVisible(elem)) {
//           elem.classList.add('glitchy')
//           glitchInElements.splice(i, 1) // only allow it to run once
//         }
// }
//     }
//     const isElemVisible = (el) => {
//       var elem = el.getBoundingClientRect()
//       var elemTop = elem.top + 100 // 100 = buffer
//       var elemBottom = elem.bottom
//       return elemTop < window.innerHeight && elemBottom >= 0
//     }
//     onMounted(() => {
//       glitchInElements = Array.from(document.getElementsByClassName('glitch-in'));
//       document.addEventListener('scroll', handleScroll)
//       handleScroll()
//     })
//     onUnmounted(() => {
//       document.removeEventListener('scroll', handleScroll)
//     })
// }
"use strict";