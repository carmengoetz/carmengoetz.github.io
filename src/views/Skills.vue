<template>
  <div class="skills">
    <PageHeader 
      :heading=heading
      :page=page
      :showResume=false
      >
    </PageHeader>
    <section id=skills>
    <div class="container">
      <div class="row ">
        <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Skills</h2>
            <h3 class="section-subheading text-light"></h3>
        </div>
      </div>

      <div v-for="skills in skills" :key=skills.index class="row text-center  skill-row">
          <Skill v-for="skill in skills" :key="skill.title"
            :title=skill.title
            :description=skill.description
            :icon=skill.icon>
          </Skill>
      </div>
    </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import Skill from '@/components/skills/Skill.vue'

export default {
  name: 'Skills',
  components: {
    PageHeader,
    Skill
  },
  data: () => {
    return {
      heading: 'Skills',
      page: 'skills',
      showResume: false,
      skills: [
        [
          {
            title: 'Web Frontend/Backend',
            description: 'Languages and Frameworks:<br>HTML, CSS, JavaScript, PHP, KnockoutJS, Bootstrap, Symphony.',
            icon: 'fa-desktop'
          },
          {
            title: 'Systems',
            description: 'Languages:<br>Java, C#, C, Visual Basic',
            icon: 'fa-code'
          },
          {
            title: 'Version Control',
            description: 'Experience using Bit Bucket and GitHub. Commits are always well commented and documented',
            icon: 'fa-code-branch'
          }
        ],
        [
          {
            title: 'Database',
            description: 'Languages and Applications:<br>SQL, SQLite, Oracle',
            icon: 'fa-database'
          },
          {
            title: 'Network Administration',
            description: 'Experience with Mac, Windows, Linux, and Microsoft Windows Server 2008 and 2012 R2, worked in PowerShell (ISE), Command Prompt, Linux Terminal',
            icon: 'fa-server'
          },
          {
            title: 'Mobile Development',
            description: 'Development in Android Studio, Xamarin, and Swift',
            icon: 'fa-mobile-alt'
          }
        ],
        [
          {
            title: 'File Management',
            description: 'Deep understanding of computer folder structures, plenty of experience with Microsoft Word, Excel, and Access',
            icon: 'fa-file'
          },
          {
            title: 'Communication',
            description: 'Training received for email, chat, and telephone etiquette. Easily approachable and communicate with',
            icon: 'fa-comments'
          }
        ]
      ]
    }
  }
}
</script>

<style scoped>
@media (min-width: 768px) {
    .skill-row {
        margin-bottom: 30px;
    }
}

#skills {
    background-color: #202326;
    margin-top: 50px;
}

h2 {
    color: #9DC5CA;
}
</style>