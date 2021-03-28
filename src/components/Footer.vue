<template>
  <div class="container footer">
    <div class="row">
      <div class="col-md-4">
        <span class="footer__copyright">Copyright &copy; Carmen Goetz 2021</span>
      </div>
      <div class="col-md-4">
        <ul class="list-inline social-buttons footer__buttons">
          <li v-for="social in socials" :key="social.name" class="list-inline-item">
            <a :href="social.link" target="_blank" class="footer__link glitch__footer">
              <fa
                :icon="social.icon"
                type="fab"
                class="footer__icon glitch__footer glitch__footer--effect-1"
              ></fa>
              <fa
                :icon="social.icon"
                type="fab"
                class="footer__icon glitch__footer glitch__footer--effect-2"
              ></fa>
              <fa :icon="social.icon" type="fab" class="footer__icon glitch__footer"></fa>
            </a>
          </li>
        </ul>
      </div>
      <!-- <div class="col-md-4" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => {
    return {
      socials: [
        {
          name: "linkedin",
          link: "https://linkedin.com/in/carmengoetz/",
          icon: "linkedin-in",
        },
        {
          name: "facebook",
          link: "https://www.facebook.com/carmen.goetz",
          icon: "facebook-f",
        },
        {
          name: "instagram",
          link: "https://www.instagram.com/carmenbgoetz",
          icon: "instagram",
        },
        { name: "github", link: "https://github.com/carmengoetz", icon: "github" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

/*#region FOOTER*/
.footer {
  padding: 25px 0;
  text-align: center;
  bottom: 10px;

  &__copyright {
    margin-top: 40px;
    font-size: 90%;
    line-height: 60px;
    font-family: $font-primary;
    color: $blue-jeans;
  }

  &__buttons {
    margin-bottom: 20px;
  }

  &__link {
    font-size: 20px;
    line-height: 50px;
    display: block;
    width: 50px;
    height: 50px;
    color: white;
    position: relative;
  }
  &__icon {
    width: 30px;
    height: 30px;
    position: absolute;
  }
}
/*#endregion FOOTER*/
</style>
