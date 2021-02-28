<template>
  <div class="navbar navbar-expand-lg fixed-top">
    <router-link
      class="navbar-brand"
      :to="{
        name: 'Software Developer',
      }"
    >
      <img src="../assets/logos/LogoMakr-81msP7.png" width="300" alt="carmen goetz" />
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
            class="nav-link"
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
        { path: "/about", name: "About", exact: false },
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

.navbar {
  background-color: $xiketic;
}

.navbar-brand {
  color: $dark-orchid;
  font-family: "Kaushan Script", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
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

@media (min-width: 992px) {
  .navbar {
    padding-top: 25px;
    -webkit-transition: padding-top 0.3s;
    transition: padding-top 0.3s;
    border: none;
    background-color: $xiketic;
  }
  .navbar-brand {
    font-size: 1.75em;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .nav-link {
    padding: 1.1em 1em !important;
  }
  .navbar-shrink {
    padding-top: 0;
    padding-bottom: 0;
    background-color: $xiketic;
  }
  .navbar-shrink .navbar-brand {
    font-size: 1.25em;
    padding: 12px 0;
  }
  #burger {
    display: none;
    cursor: pointer;
  }
}
</style>
