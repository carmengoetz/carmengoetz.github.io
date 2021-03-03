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
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl" />
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <h2 class="text-uppercase">
                  {{ client }}
                </h2>
                <p class="item-intro text-muted">
                  {{ project }}
                </p>
                <div
                  v-if="carousel != null"
                  :id="carousel.id"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div
                    v-for="item in carousel.items"
                    :key="item.index"
                    class="carousel-inner"
                  >
                    <div class="carousel-item" :class="{ active: item.active }">
                      <img
                        class="d-block w-100"
                        :src="require(`@/assets/projects/${item.image}`)"
                        :alt="item.alt"
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <p class="text-muted">
                          {{ item.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    :href="`#${carousel.id}`"
                    role="button"
                    data-slide="prev"
                  >
                    <span class="fas fa-angle-left" aria-hidden="true" />
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    :href="`#${carousel.id}`"
                    role="button"
                    data-slide="next"
                  >
                    <span class="fas fa-angle-right" aria-hidden="true" />
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <img
                  v-else
                  class="img-fluid d-block mx-auto"
                  :src="require(`@/assets/projects/${image.name}`)"
                  :alt="image.alt"
                />
                <p v-html="description" />
                <ul class="list-inline">
                  <li>Date: {{ date }}</li>
                  <li>Client: {{ client }}</li>
                  <li>Category: {{ category }}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fas fa-times" />
                  Close Project
                </button>
              </div>
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
  ],
};
</script>

<style scoped>

.projects-modal {
  padding-right: 0 !important;
}

.projects-modal .modal-dialog {
  margin: 1rem;
  max-width: 100vw;
}

.projects-modal .modal-content {
  padding: 100px 0;
  text-align: center;
}

.projects-modal .modal-content h2 {
  font-size: 3em;
  margin-bottom: 15px;
}

.projects-modal .modal-content p {
  margin-bottom: 30px;
}

.projects-modal .modal-content .item-intro {
  font-size: 16px;
  font-style: italic;
  margin: 20px 0 30px;
  font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}

.projects-modal .modal-content .list-inline {
  margin-top: 0;
  margin-bottom: 30px;
}

.projects-modal .modal-content img {
  margin-bottom: 30px;
}

.projects-modal .modal-content button {
  cursor: pointer;
}

.projects-modal .close-modal {
  position: absolute;
  top: 25px;
  right: 25px;
  width: 75px;
  height: 75px;
  cursor: pointer;
  background-color: transparent;
}

.projects-modal .close-modal:hover {
  opacity: 0.3;
}

.projects-modal .close-modal .lr {
  /* Safari and Chrome */
  z-index: 1051;
  width: 1px;
  height: 75px;
  margin-left: 35px;
  /* IE 9 */
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: #212529;
}

.projects-modal .close-modal .lr .rl {
  /* Safari and Chrome */
  z-index: 1052;
  width: 1px;
  height: 75px;
  /* IE 9 */
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  background-color: #212529;
}
</style>
