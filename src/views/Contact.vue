<template>
  <div class="contact">
    <PageHeader 
      :heading=heading
      :page=page
      :showResume=false
      >
    </PageHeader>

    <section id="contact">
        <div class="container">
            <div class="row hidden">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase">Contact Me</h2>
                    <h3 class="section-subheading text-muted">Get in touch on me for any inquiries you may have!</h3>
                </div>
            </div>
            <div class="row hidden">
                <div class="col-lg-12">
                    <form id="contactForm" name="sentMessage" novalidate="novalidate">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name.">
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address.">
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number.">
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="col-lg-12 text-center">
                                <div id="success"></div>
                                <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'Contact',
  components: {
    PageHeader
  },
  data: () => {
    return  {
      heading: 'Contact',
      page: 'contact',
      showResume: false
    }
  }
}
</script>

<style scoped>
/*#region CONTACT*/

section#contact {
    background-color: #212529;
    background-image: url("../assets/apple-devices-computer-contemporary-234527.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 50px;
}

section#contact .section-heading {
    color: #fff;
}

section#contact .form-group {
    margin-bottom: 25px;
}

section#contact .form-group input,
section#contact .form-group textarea {
    padding: 20px;
}

section#contact .form-group input.form-control {
    height: auto;
}

section#contact .form-group textarea.form-control {
    height: 248px;
}

section#contact .form-control:focus {
    border-color: #9DC5CA;
    -webkit-box-shadow: none;
    box-shadow: none;
}

section#contact ::-webkit-input-placeholder {
    font-weight: 700;
    color: #ced4da;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

section#contact :-moz-placeholder {
    font-weight: 700;
    color: #ced4da;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

section#contact ::-moz-placeholder {
    font-weight: 700;
    color: #ced4da;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

section#contact :-ms-input-placeholder {
    font-weight: 700;
    color: #ced4da;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

/*#endregion CONTACT*/
</style>