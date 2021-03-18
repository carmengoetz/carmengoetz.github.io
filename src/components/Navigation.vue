<template>
  <div class="navbar navbar-expand-lg">
    <router-link
      class="navbar-brand glitch__brand"
      data-text="carmen goetz"
      :to="{
        name: 'Home',
      }"
    >
      <img
        src="../assets/160293217_260754872185421_1608448610566618226_n.png"
        alt="carmen goetz"
        width="200"
      />
    </router-link>

    <div
      v-on:click="openMobileNav()"
      id="burger"
      class="navbar-toggler navbar-toggler-right"
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
    <div id="navbarResponsive" class="collapse navbar-collapse">
      <ul class="navbar-nav text-uppercase ml-auto">
        <li v-for="page in pages" :key="page.name" class="nav-item">
          <router-link
            class="nav-link glitch"
            :data-text="page.name"
            :to="{
              name: page.name,
            }"
          >
            {{ page.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: () => {
    return {
      pages: [
        { path: "/", name: "Home", exact: true },
        { path: "/career", name: "Career", exact: false },
        { path: "/skills", name: "Skills", exact: false },
        { path: "/projects", name: "Projects", exact: false },
        { path: "/contact", name: "Contact", exact: false },
      ],
    };
  },
  methods: {
    getTarget: function (item) {
      return item.newTab === false ? "" : "_blank";
    },
    openMobileNav() {
      const burger = document.getElementById("burger");
      burger.classList.toggle("toggle");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";
@import url("https://fonts.googleapis.com/css2?family=DotGothic16&display=swap");

.navbar {
  background-color: $xiketic;
}

.navbar-brand {
  color: $dark-orchid;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 3px;
  font-family: "DotGothic16", sans-serif;
  padding: 0 12px;
  margin: 0 40px -36px 40px;
}

.router-link-exact-active,
.nav-link:hover,
.navbar-brand:focus,
.navbar-brand:hover {
  color: $blue-jeans !important;
}

.nav-link {
  font-size: 90%;
  font-weight: 400;
  padding: 0.75em 0;
  letter-spacing: 1px;
  color: $dark-orchid;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}

.nav-link:hover {
  color: $blue-jeans;
}

#burger {
  display: block;
}

.line1,
.line2,
.line3 {
  width: 30px;
  height: 3px;
  margin: 8px;
  background-color: $dark-orchid;
  transition: all 0.3s ease-in;
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
.toggle .line1 {
  transform: rotate(-45deg) translate(-9px, 10px);
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}

@media (min-width: $tablet-breakpoint) {
  .navbar {
    padding-top: 4px;
    -webkit-transition: padding-top 0.3s;
    transition: padding-top 0.3s;
    border: none;
    background-color: $xiketic;
  }
  .navbar-brand {
    font-size: 40px;
  }

  .nav-link {
    padding: 1.1em 1em !important;
  }
  .navbar-shrink {
    padding-top: 0;
    padding-bottom: 0;
    background-color: $xiketic;
  }

  #burger {
    display: none;
    cursor: pointer;
  }
}
</style>
