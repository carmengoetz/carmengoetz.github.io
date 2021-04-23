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
          class=""
        />
      </ul>
    </div>
  </div>
</template>

<script>
import Panel from "@/components/career/Panel.vue";

export default {
  name: "Timeline",
  components: {
    Panel,
  },
  data: () => {
    return {
      panels: [
        {
          year: "2016",
          heading: "Enrolling in CST",
          image: require("../../assets/career/saskpolytechlogo.jpg"),
          description:
            "I’ve always had a knack for 1s and 0s, and knew that I wanted to pursue a career of creating things using computers. I wasn’t sure exactly how or what, but I decided to take a chance and start by enrolling in the Computer Systems Technology Diploma at Saskatchewan Polytechnic. As I started in my classes, it didn’t take me long to discover that I found my passion was in Web Development! ",
          inverted: false,
        },
        {
          year: "2017",
          heading: "Getting involved at Canada Learning code",
          image: require("../../assets/career/CLClogo.png"),
          description:
            "I heard about Canada Learning Code (CLC, formerly known as Ladies learning Code) through networking with other developers in the community. After chatting with a few of the developers to learn more, I knew I had to get involved. Since then, I have become a mentor at various workshops on entry level subjects (HTML/CSS, JavaScript, Responsive Development, etc), and even instructed a workshop myself.",
          inverted: true,
        },
        {
          year: "2019",
          heading: "Graduation",
          image: require("../../assets/career/grad.jpg"),
          description:
            "In May of 2019, I graduated from Saskpolytechnic with a Diploma in Computer Systems Technology! I went full force into the industry at my position at 7shifts and was ready to show and implement what I had learned during the past three years.",
          inverted: false,
        },
        {
          year: "2019",
          heading: "Starting at 7shifts",
          image: require("../../assets/career/7shifts-logo.png"),
          description:
            "In the final weeks before graduation, I was hired on as a Software Developer at 7shifts, in Saskatoon, Saskatchewan.  During the last 3 years of my career at 7shifts, I’ve grown into my career with a variety of opportunities, such as X, Y, Z. I have been involved in challenging, but rewarding projects and presented solutions that have been implemented into our teams, in the departments and on the company roadmap. While accomplishing these milestones in my career, I’ve had the opportunity to continually grow and learn from intelligent mentors and pair and collaborate with exceptional people who have facilitated knowledge transfer and continual learning in my current position.",
          inverted: true,
        },
        {
          year: "2019",
          heading: "Chapter Coordinator for Canada Learning Code",
          image: require("../../assets/career/CLClogo.png"),
          description:
            "n the summer of 2019, I was presented with the opportunity to be the Coordinator for Saskatoon’s Canada Learning Code Chapter. In this position, I would streamline and run Canada learning Code educational projects and community events. In addition, I managed and promoted events on our social media accounts and networked with the community to acquire mentors, facilitators and curious new learners for upcoming events.",
          inverted: false,
        },
        {
          year: "2020",
          heading: "Joining 7shifts' Diversity Equity and Inclusion committee ",
          image: require("../../assets/career/7shifts-logo.png"),
          description:
            "In honing my skills for community involvement and my passion for Diversity, Equity and Inclusion (DE&I) I joined the committee in October of 2020 to join my colleagues in becoming a more inclusive community. Since the inception of the committee, I’ve made various contributions that have been implemented, such as X,Y and Z.",
          inverted: true,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/_variables.scss";

.timeline {
  position: relative;
  padding: 0;
  list-style: none;

  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 40px;
    width: 2px;
    margin-left: -1.5px;

    @media (min-width: $mobile-breakpoint) {
      left: 50%;
    }
  }
}
</style>
