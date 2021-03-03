<template>
  <div class="projects">
    <PageHeader />
    <section>
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Projects</h2>
          <h3 class="section-subheading projects__description">
            Projects, personal or business, completed or in progress
          </h3>
        </div>
      </div>
      <div class="row">
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
import PageHeader from "@/components/PageHeader.vue";
import Item from "@/components/projects/Item.vue";
import Modal from "@/components/projects/Modal.vue";

export default {
  name: "Projects",
  components: {
    PageHeader,
    Item,
    Modal,
  },
  data: () => {
    return {
      projects: [
        {
          modal: {
            id: "projectsModal1",
            project: "My own personal website portfolio.",
            image: {
              name: "carmen-goetz.png",
              alt: "Carmen Goetz",
            },
            carousel: null,
            date: "February 2019",
            description:
              "My own personal website, to show my skills and abilities, and display projects I am proud of. I took inspiration from the <a href='https://startbootstrap.com/themes/agency/' target='_blank'>agency</a> bootstrap template. I created this website with HTML, CSS, JavaScript, jquery, PHP, and Bootstrap<br />",
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
            image: null,
            carousel: {
              id: "refresh-carousel",
              items: [
                {
                  image: "refresh1.png",
                  alt: "Registration",
                  description: "Registration Page",
                  active: true,
                },
                {
                  image: "refresh2.png",
                  alt: "User Profile",
                  description: "User Profile",
                },
                {
                  image: "refresh5.png",
                  alt: "Wellness Professional Profile",
                  description: "Wellness Professional Profile",
                },
                {
                  image: "refresh6.png",
                  alt: "Enter Your Wellness Status",
                  description: "Enter Your Wellness Status",
                },
                {
                  image: "refresh8.png",
                  alt: "List of Nearby Wellness Professionals",
                  description: "List of Nearby Wellness Professionals",
                },
                {
                  image: "refresh9.png",
                  alt: "Messaging",
                  description: "Messaging",
                },
              ],
            },
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
            project: "Business Website for Yoga Instructor",
            image: {
              name: "abundantly-ethan.jpg",
              alt: "",
            },
            carousel: null,
            date: "In Progress",
            description:
              "Business website for a local yoga instructor, Abundantly Ethan. This website will showcase services available, pricing, and calendar for customers to view at any given time. The project is still in development. I am creating this website using the ReactJS framework.",
          },
          image: {
            name: "abundantly-ethan-thumb.jpg",
            alt: "Abundantly Ethan",
          },
          client: "Abundantly Ethan",
          category: "Web Development",
        },
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
