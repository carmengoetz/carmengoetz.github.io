<template>
  <div class="projects">
    <section>
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Projects</h2>
          <h3
            class="section-subheading projects__description glitch-in"
            data-text="Projects, personal or business, completed or in progress"
          >
            Projects, personal or business, completed or in progress
          </h3>
        </div>
      </div>
      <div class="row projects__items">
        <Item
          v-for="item in projects"
          :key="item.index"
          :modal="item.modal"
          :image="item.image"
          :client="item.client"
          :category="item.category"
        />
      </div>
    </section>

    <Modal
      v-for="(project, i) in projects"
      :key="`project${i}`"
      :id="project.modal.id"
      :project="project.modal.project"
      :client="project.client"
      :image="project.modal.image"
      :carousel="project.modal.carousel"
      :date="project.modal.date"
      :category="project.category"
      :description="project.modal.description"
    />
  </div>
</template>

<script>
import Item from "@/components/projects/Item.vue";
import Modal from "@/components/projects/Modal.vue";
import { glitchInElements } from "@/js/animations.js";

export default {
  name: "Projects",
  components: {
    Item,
    Modal,
  },
  setup() {
    return glitchInElements();
  },
  data: () => {
    return {
      projects: [
        {
          modal: {
            id: "projectsModal1",
            project: "My own personal website portfolio.",
            image: {
              name: "carmen-goetz2.png",
              alt: "Carmen Goetz",
            },
            date: "March 2021",
            description:
              "My own personal website, to show my skills and abilities, and display projects I am proud of.",
          },
          image: {
            name: "carmen-goetz-thumb.png",
            alt: "Carmen Goetz",
          },
          client: "Carmen Goetz",
          category: "Web Development",
        },
        {
          modal: {
            id: "projectsModal2",
            project: "Wellness Application created for Refresh as a school project.",
            image: { name: "refresh2.png", alt: "User Profile" },

            date: "September 2017 - April 2018",
            description:
              "A social media web application with an emphasis on mental health and awareness. Users have the ability to aggregate data about their mental wellness through the web application. When a user has created an account, every time they log on they are asked to enter data about their mental well being for that day. Users can view their mental health history, and give friends or wellness professionals permission to view it also. The application would be would be marketed to wellness professionals, so that they have the ability to view the history of patients, and users can find resources available to them. The main priority with the application is for users to be able to see their statistics and know what kinds of triggers there are. The purpose of the web application is to provide information and resources to the users to help with their mental health. This project was created with a group of 6 people, using the Symphony framework. Since this was a school project, it was never put into production. The source code is available to be viewed in my GitHub.",
          },
          image: {
            name: "refresh-thumb.png",
            alt: "Refresh Wellness",
          },
          client: "Refresh",
          category: "Web Development",
        },
        {
          modal: {
            id: "projectsModal3",
            project: "Portfolio for writer, artists, game designer",
            image: {
              name: "the-dewsletter.png",
              alt: "The Dewsletter",
            },
            date: "In Progress",
            description: "",
          },
          image: {
            name: "the-dewsletter-thumb.png",
            alt: "The Dewsletter",
          },
          client: "The Dewsletter",
          category: "Web Development",
        },
        // Not ready to be displayed
        // {
        //   modal: {
        //     id: "projectsModal4",
        //     project: "Portfolio for Graphic and Web Designer",
        //     image: {
        //       name: "creative-reyne.png",
        //       alt: "Creative Reyne",
        //     },
        //     date: "In Progress",
        //     description: "",
        //   },
        //   image: {
        //     name: "creative-reyne-thumb.gif",
        //     alt: "Creative Reyne",
        //   },
        //   client: "Creative Reyne",
        //   category: "Web Development",
        // },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.projects {
  &__description {
    color: $blue-jeans;
  }
}
</style>
