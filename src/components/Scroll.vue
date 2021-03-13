<template>
  <a @click="scrollTop" v-show="visible" class="bottom-right scroll">
    <fa icon="caret-up" type="fas" class="scroll__icon" />
  </a>
</template>

<script>
export default {
  name: "Scroll",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 20);
    },
    scrollListener: function () {
      this.visible = window.scrollY > 150;
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeUnmount: function () {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style scoped lang="scss">
.scroll {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  line-height: 40px;
  display: block;
  width: 48px;
  height: 48px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  color: white;
  border-radius: 100%;
  outline: none;
  // background-color: white;

  &:active,
  &:focus,
  &:hover {
    background-color: $xiketic;
  }

  &__icon {
    width: 45px;
    height: 45px;
    margin-top: -5px;
  }
}
</style>
