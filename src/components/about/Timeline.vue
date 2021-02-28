<template>
  <div class="row">
    <div class="col-lg-12">
      <ul class="timeline">
        <Panel
          v-for="panel in panels"
          :key="panel.index"
          :year="panel.year"
          :heading="panel.heading"
          :image="panel.image"
          :description="panel.description"
          :inverted="panel.inverted"
          class="fade-in"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import Panel from '@/components/about/Panel.vue'
import { fadeInElements } from '@/js/animations.js'

export default {
  name: 'Timeline',
  components: {
      Panel
  },
  setup () {
    return fadeInElements();
  },
  data: () => {
    return {
      panels: [
        { 
            year: '2016', 
            heading: 'Enrolling in CST', 
            image: require('../../assets/about/saskpolytechlogo.jpg') ,
            description: "I have always had a knack for 1s and 0s, and I knew I wanted to pursue a career of creating things using computers, but I was unsure of what exactly. So I decided to enroll in Computer Systems Technology at Saskpolytech. It didn't take long for me to realize my passion for Web Development!",
            inverted: false
        },
        { 
            year: '2017', 
            heading: 'Getting involved at Canada Learning code', 
            image: require('../../assets/about/CLClogo.png') ,
            description: "Through networking with people in the industry, I heard about Canada Learning Code (CLC, formerly Ladies Learning Code). Since then, I have mentored at many of their workshops, and even instructed a workshop myself. This required me to present theory, give code examples and exercises, and  assist learners with the content, as well as provide 1-on-1 support for learners, adults and children, throughout day long workshops",
            inverted: true
        },
        { 
            year: '2019', 
            heading: 'Graduation', 
            image: require('../../assets/about/grad.jpg') ,
            description: "In May of 2019, I graduated from Saskpolytech with a Diploma in Computer Systems technology! I went full force into the industry, ready to show what I had learnt in the past three years.",
            inverted: false
        },
        { 
            year: '2019', 
            heading: 'Starting at 7shifts', 
            image: require('../../assets/about/7shifts-logo.png') ,
            description: "Before I graduated, I was hired on as a software developer at 7shifts in Saskatoon. At 7shifts I have been able to grown in my career with many different opportunities. I have been involved on difficult but rewarding projects and presenting solutions and leading them to help execute on the team / department / company roadmap. While doing that, I have been able to learn from intelligent mentors, and pair and collaborate with exceptional people and facilitate knowledge transfers and continual learning.",
            inverted: true
        },
        { 
            year: '2019', 
            heading: 'Chapter Coordinator for Canada Learning Code', 
            image: require('../../assets/about/CLClogo.png') ,
            description: "In the summer of 2019, I was given the opportunity to be the Coordinator for Saskatoon's Chapter. I would streamline and run Canada Learning Code learning projectss and community events, manage social media accounts to promote events and reach out to the community, and aquire learners, mentors, and facilitators for upcoming events utilizing my abilities to network within the community.",
            inverted: false
        },
        { 
            year: '2020', 
            heading: "Joining 7shifts' Diversity Equity and Inclusion committee ", 
            image: require('../../assets/about/7shifts-logo.png') ,
            description: "",
            inverted: true
        },
      ],
    }
  }
}
</script>

<style scoped>
.timeline {
    position: relative;
    padding: 0;
    list-style: none;
}

.timeline:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 40px;
    width: 2px;
    margin-left: -1.5px;
}

@media (min-width: 768px) {
    .timeline:before {
        left: 50%;
    }
}

</style>