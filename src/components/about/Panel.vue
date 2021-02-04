<template>
  <li :class="{inverted: inverted}">
    <div class="timeline-image">
      <img
        class="rounded-circle img-fluid"
        :src="image"
        alt="tbd"
      >
    </div>
    <div class="timeline-panel">
      <div class=" timeline-heading ">
        <h4>{{ year }}</h4>
        <h5 class="subheading">
          {{ heading }}
        </h5>
      </div>
      <div class=" timeline-body ">
        <p class="text-light">
          {{ description }}
        </p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
    name: 'Panel',
    props: ['year', 'heading', 'image', 'description', 'inverted']
}
</script>

<style scoped>

li {
    position: relative;
    min-height: 50px;
    margin-bottom: 50px;
}

li:after, li:before {
    display: table;
    content: ' ';
}

li:after {
    clear: both;
}

li .timeline-panel {
    position: relative;
    float: right;
    width: 100%;
    padding: 0 20px 0 100px;
    text-align: left;
}

li .timeline-panel:before {
    right: auto;
    left: -15px;
    border-right-width: 15px;
    border-left-width: 0;
}

li .timeline-panel:after {
    right: auto;
    left: -14px;
    border-right-width: 14px;
    border-left-width: 0;
}

li .timeline-image {
    position: absolute;
    z-index: 100;
    left: 0;
    width: 80px;
    height: 80px;
    margin-left: 0;
    text-align: center;
    color: #3a3c41;
    border-radius: 100%;
    background-color: white;
}

li .timeline-image h4 {
    font-size: 10px;
    line-height: 14px;
    margin-top: 12px;
}

li.inverted > .timeline-panel {
    float: right;
    padding: 0 20px 0 100px;
    text-align: left;
}

li.inverted > .timeline-panel:before {
    right: auto;
    left: -15px;
    border-right-width: 15px;
    border-left-width: 0;
}

li.inverted > .timeline-panel:after {
    right: auto;
    left: -14px;
    border-right-width: 14px;
    border-left-width: 0;
}

li:last-child {
    margin-bottom: 0;
}

.timeline .timeline-heading h4 {
    margin-top: 0;
    color: #265F65 !important;
}

.timeline .timeline-heading h4.subheading {
    text-transform: none;
}

.timeline .timeline-body > ul,
.timeline .timeline-body > p {
    margin-bottom: 0;
}

@media (min-width: 768px) {
    li {
        min-height: 100px;
        margin-bottom: 100px;
    }
    li .timeline-panel {
        float: left;
        width: 41%;
        padding: 0 20px 20px 30px;
        text-align: right;
    }
    li .timeline-image {
        left: 50%;
        width: 100px;
        height: 100px;
        margin-left: -50px;
    }
    li .timeline-image h4 {
        font-size: 13px;
        line-height: 18px;
        margin-top: 16px;
    }
    li.inverted > .timeline-panel {
        float: right;
        padding: 0 30px 20px 20px;
        text-align: left;
    }
}

@media (min-width: 992px) {
    li {
        min-height: 150px;
    }
    li .timeline-panel {
        padding: 0 20px 20px;
    }
    li .timeline-image {
        width: 150px;
        height: 150px;
        margin-left: -75px;
    }
    li .timeline-image h4 {
        font-size: 18px;
        line-height: 26px;
        margin-top: 30px;
    }
    li.inverted > .timeline-panel {
        padding: 0 20px 20px;
    }
}

@media (min-width: 1200px) {
    li {
        min-height: 170px;
    }
    li .timeline-panel {
        padding: 0 20px 20px 100px;
    }
    li .timeline-image {
        width: 170px;
        height: 170px;
        margin-left: -85px;
    }
    li .timeline-image h4 {
        margin-top: 40px;
    }
    li .inverted > .timeline-panel {
        padding: 0 100px 20px 20px;
    }
}
</style>