<template>
  <Navigation></Navigation>
  <div class="container" >
    <router-view/>
  </div>
  <Footer></Footer>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 100)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Hide navbar when modals trigger
    $('.experience-modal').on('show.bs.modal', function() {
        $('.navbar').addClass('d-none');
    })
    $('.experience-modal').on('hidden.bs.modal', function() {
        $('.navbar').removeClass('d-none');
    })

});

var animateHTML = function() {
    var scrollElems;
    var mastheadElem;
    var windowHeight;
    function init() {
        scrollElems = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
        checkPosition();

        mastheadElem = document.querySelector('.animate-in');

        addEventHandlers();

    }
    function addEventHandlers() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
        window.addEventListener('beforeunload', changeClass);
    }
    function checkPosition() {
        for (var i = 0; i < scrollElems.length; i++) {
            var positionFromTop = scrollElems[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                scrollElems[i].className = scrollElems[i].className.replace(
                    'hidden',
                    'fade-in-element'
                );
            }
        }
    }
    function changeClass()
    {
        mastheadElem.classList.add("animate-out");
    }

    return {
        init: init
    };
};
animateHTML().init();

export default {
  name: 'app',
  components: {
    Navigation,
    Footer
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*!
 * Start Bootstrap - Agency v5.0.5 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
 */

body {
    overflow-x: hidden;
    font-family: 'Roboto Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

p {
    line-height: 1.75;
}

a {
    color: black;
}

a:hover {
    color: #265F65;
}

.text-primary {
    color: #265F65 !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 700;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

section {
    padding: 100px 0;
}

section h2.section-heading {
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 15px;
}

section h3.section-subheading {
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 75px;
    text-transform: none;
    font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

@media (min-width: 768px) {
    section {
        padding: 150px 0;
    }
}

.btn {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-weight: 700;
}

.btn-xl {
    font-size: 18px;
    padding: 20px 40px;
}

.btn-primary {
    background-color: #265F65;
    border-color: #265F65;
}

.btn-primary:active, .btn-primary:focus, .btn-primary:hover {
    background-color: #265F65 !important;
    border-color: #265F65 !important;
    color: white;
}

.btn-primary:active, .btn-primary:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(38, 95, 101, 0.5) !important;
    box-shadow: 0 0 0 0.2rem rgba(38, 95, 101, 0.5) !important;
}

::selection {
    background: #9DC5CA;
    text-shadow: none;
}

img::selection {
    background: transparent;
}

img::-moz-selection {
    background: transparent;
}

/*#region BLINKING CURSOR*/

.blinking-cursor {
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
}

@keyframes blink {
    from, to {
        color: transparent;
    }
    50% {
        color: #265F65;
    }
}

@-moz-keyframes blink {
    from, to {
        color: transparent;
    }
    50% {
        color: #265F65;
    }
}

@-webkit-keyframes blink {
    from, to {
        color: transparent;
    }
    50% {
        color: #265F65;
    }
}

@-ms-keyframes blink {
    from, to {
        color: transparent;
    }
    50% {
        color: #265F65;
    }
}

@-o-keyframes blink {
    from, to {
        color: transparent;
    }
    50% {
        color: #265F65;
    }
}
/*endregion BLINKING CURSOR*/

/*region ANIMATIONS*/
.animate-in {
    -webkit-animation: fadeIn 1s ease-in;
    animation: fadeIn 1s ease-in;
}
.animate-out {
    -webkit-transition: opacity 1s;
    transition: opacity 1s;
    opacity: 0;
}
@-webkit-keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fade-in {
    from {opacity: 0;}
    to {opacity: 1;}
}

.fade-in-element {
    animation: fade-in 3s;
}

.hidden {
    opacity: 0;
}
/*endregion ANIMATIONS*/
</style>
