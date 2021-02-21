import { onMounted, onUnmounted } from 'vue'

export function fadeInElements(){
    var fadeInElements = []

    const handleScroll = () => {
      for (var i = 0; i < fadeInElements.length; i++) {
        var elem = fadeInElements[i]
        if (isElemVisible(elem)) {
          elem.style.opacity = '1'
          fadeInElements.splice(i, 1) // only allow it to run once
        }
}
    }

    const isElemVisible = (el) => {
      var elem = el.getBoundingClientRect()
      var elemTop = elem.top + 100 // 100 = buffer
      var elemBottom = elem.bottom
      return elemTop < window.innerHeight && elemBottom >= 0
    }


    onMounted(() => {
      fadeInElements = Array.from(document.getElementsByClassName('fade-in'));
      document.addEventListener('scroll', handleScroll)
      handleScroll()
    })

    onUnmounted(() => {
      document.removeEventListener('scroll', handleScroll)
    })
}