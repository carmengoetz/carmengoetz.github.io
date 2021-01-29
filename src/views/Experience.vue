<template>
  <div class="skills">
    <PageHeader 
      :heading=heading
      :page=page
      :showResume=false
      >
    </PageHeader>

    <!-- experience Grid -->
    <section id="experience">
        <div class="container">
            <div class="row hidden">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase">experience</h2>
                    <h3 class="section-subheading text-light">Projects, personal or business, completed or in progress</h3>
                </div>
            </div>
            <div class="row hidden">
              <Item v-for="item in projects" :key=item.index
                :modal=item.modal
                :image=item.image
                :client=item.client
                :category=item.category
                >
              </Item>
            </div>
        </div>
    </section>

    <Modal :key=projects[0].index
      :id=projects[0].modal.id
      :project=projects[0].modal.project
      :client=projects[0].client
      :image=projects[0].modal.image
      :date=projects[0].modal.date
      :category=projects[0].category
    >
      <p>My own personal website, to show my skills and abilities, and display projects I am proud of. I took inspiration from the
        <a href="https://startbootstrap.com/themes/agency/" target="_blank">agency</a>
        bootstrap template. I created this website with HTML, CSS, JavaScript, jquery, PHP, and Bootstrap<br>
      </p>
    </Modal>

    <Modal :key=projects[1].index
      :id=projects[1].modal.id
      :project=projects[1].modal.project
      :client=projects[1].client
      :carousel=projects[1].modal.carousel
      :date=projects[1].modal.date
      :category=projects[1].category
    >
      <p>A social media web application with an emphasis on mental health and awareness.
        Users have the ability to aggregate data about their mental wellness through the web application.
        When a user has created an account, every time they log on they are asked to enter data
        about their mental well being for that day. Users can view their mental health history, and give
        friends or wellness professionals permission to view it also. The application would be
        would be marketed to wellness professionals, so that they have the ability to view the history
        of patients, and users can find resources available to them. The main priority with the application
        is for users to be able to see their statistics and know what kinds of triggers there are.
        The purpose of the web application is to provide information and resources to the users
        to help with their mental health. This project was created with a group of 6 people,
        using the Symphony framework. Since this was a school project, it was never put into
        production. The source code is available to be viewed in my GitHub.</p>
    </Modal>

    <Modal :key=projects[2].index
      :id=projects[2].modal.id
      :project=projects[2].modal.project
      :client=projects[2].client
      :image=projects[2].modal.image
      :date=projects[2].modal.date
      :category=projects[2].category
    >
      <p>Business website for a local yoga instructor, Abundantly Ethan. This website will showcase
        services available, pricing, and calendar for customers to view at any given time. The
        project is still in development. I am creating this website using the ReactJS framework.
      </p>
    </Modal>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import Item from '@/components/experience/Item.vue'
import Modal from '@/components/experience/Modal.vue'

export default {
  name: 'Experience',
  components: {
    PageHeader,
    Item,
    Modal
  },
  data: () => {
    return {
      heading: 'Experience',
      page: 'experience',
      showResume: false,
      projects:  [
        {
          modal: {
            id: 'experienceModal1',
            project: 'My own personal website portfolio.',
            image: {
              name: 'carmen-goetz.png',
              alt: 'Carmen Goetz'
            },
            date: 'February 2019'
          },
          image: {
            name: 'carmen-goetz-thumb.png',
            alt: 'Carmen Goetz'
          },
          client: 'Carmen Goetz',
          category: 'Web Development'
        },
        {
          modal: {
            id: 'experienceModal2',
            project: 'Wellness Application created for Refresh as a school project.',
            carousel: {
              id: 'refresh-carousel',
              items: [
                {
                  image: 'refresh1.png',
                  alt: 'Registration',
                  description: 'Registration Page',
                  active: true
                },
                {
                  image: 'refresh2.png',
                  alt: 'User Profile',
                  description: 'User Profile'
                },
                {
                  image: 'refresh5.png',
                  alt: 'Wellness Professional Profile',
                  description: 'Wellness Professional Profile'
                },
                {
                  image: 'refresh6.png',
                  alt: 'Enter Your Wellness Status',
                  description: 'Enter Your Wellness Status'
                },
                {
                  image: 'refresh8.png',
                  alt: 'List of Nearby Wellness Professionals',
                  description: 'List of Nearby Wellness Professionals'
                },
                {
                  image: 'refresh9.png',
                  alt: 'Messaging',
                  description: 'Messaging'
                }
              ]
            },
            date: 'September 2017 - April 2018'
          },
          image: {
            name: 'refresh-thumb.png',
            alt: 'Refresh Wellness'
          },
          client: 'Refresh',
          category: 'Web Development'
        },
        {
          modal: {
            id: 'experienceModal3',
            project: 'Business Website for Yoga Instructor',
            image: {
              name: 'abundantly-ethan.jpg',
              alt: ''
            },
            date: 'In Progress',
          },
          image: {
            name: 'abundantly-ethan-thumb.jpg',
            alt: 'Abundantly Ethan'
          },
          client: 'Abundantly Ethan',
          category: 'Web Development'
        }
      ]
    }
  }
}
</script>

<style scoped>

#experience {
    background-color: #202326;
    margin-top: 50px;
}

.carousel-caption {
    position: relative;
    left: auto;
    right: auto;
}
.carousel-control-prev {
    margin-left: -100px;
}

.carousel-control-next {
    margin-right: -100px;
}

.fa-angle-left, .fa-angle-right {
    color: grey;
    font-size: 40px;
    padding-bottom: 100px;
}


h2, h4 {
    color: #9DC5CA;
}

/*#region EXPERIENCE*/


.experience-modal {
    padding-right: 0 !important;
}

.experience-modal .modal-dialog {
    margin: 1rem;
    max-width: 100vw;
}

.experience-modal .modal-content {
    padding: 100px 0;
    text-align: center;
}

.experience-modal .modal-content h2 {
    font-size: 3em;
    margin-bottom: 15px;
}

.experience-modal .modal-content p {
    margin-bottom: 30px;
}

.experience-modal .modal-content p.item-intro {
    font-size: 16px;
    font-style: italic;
    margin: 20px 0 30px;
    font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

.experience-modal .modal-content ul.list-inline {
    margin-top: 0;
    margin-bottom: 30px;
}

.experience-modal .modal-content img {
    margin-bottom: 30px;
}

.experience-modal .modal-content button {
    cursor: pointer;
}

.experience-modal .close-modal {
    position: absolute;
    top: 25px;
    right: 25px;
    width: 75px;
    height: 75px;
    cursor: pointer;
    background-color: transparent;
}

.experience-modal .close-modal:hover {
    opacity: 0.3;
}

.experience-modal .close-modal .lr {
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

.experience-modal .close-modal .lr .rl {
    /* Safari and Chrome */
    z-index: 1052;
    width: 1px;
    height: 75px;
    /* IE 9 */
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    background-color: #212529;
}
/*#endregion EXPERIENCE*/
</style>