<template>
  <div
    :id="id"
    class="projects-modal modal fade"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal projects-modal__close" data-dismiss="modal">
          <div class="lr">
            <div class="rl" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="modal-body">
              <h2 class="projects-modal__client">
                {{ client }}
              </h2>
              <p class="item-intro projects-modal__project">
                {{ project }}
              </p>
              <img
                class="img-fluid d-block mx-auto projects-modal__image"
                :src="require(`@/assets/projects/${image.name}`)"
                :alt="image.alt"
              />
              <p class="projects-modal__description" v-html="description" />
              <ul class="list-inline projects-modal__description">
                <li>Date: {{ date }}</li>
                <li>Client: {{ client }}</li>
                <li>Category: {{ category }}</li>
                <li v-if="github">
                  GitHub: <a :href="github.link" target="_blank">{{ github.name }}</a>
                </li>
                <li v-if="website">
                  Website: <a :href="website.link" target="_blank">{{ website.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: [
    "id",
    "project",
    "client",
    "image",
    "carousel",
    "description",
    "category",
    "date",
    "github",
    "website",
  ],
};
</script>

<style scoped lang="scss">
.projects-modal {
  .modal-dialog {
    @media (min-width: $mobile-breakpoint) {
      max-width: 75vw !important;
    }
  }
  .modal-content {
    padding: 50px 0;
    background-image: linear-gradient($royal-blue-dark, $persian-indigo);
  }

  &__close {
    position: absolute;
    top: 25px;
    right: 25px;
    width: 75px;
    height: 75px;
    cursor: pointer;
    background-color: transparent;
    &:hover {
      opacity: 0.3;
    }
    .lr {
      /* Safari and Chrome */
      z-index: 1051;
      width: 1px;
      height: 50px;
      margin-left: 35px;
      /* IE 9 */
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      background-color: $dark-orchid;
    }

    .rl {
      /* Safari and Chrome */
      z-index: 1052;
      width: 1px;
      height: 50px;
      /* IE 9 */
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
      background-color: $dark-orchid;
    }
  }

  &__client {
    font-size: 40px;
    color: $orchid;
  }

  &__project {
    font-style: italic;
    color: $blue-jeans;
  }

  &__image {
    margin-bottom: 30px;
  }

  &__description {
    color: white;
  }
}

a {
  color: $blue-jeans;
}
</style>
