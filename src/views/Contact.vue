<template>
  <div class="contact">
    <PageHeader />

    <section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Contact Me</h2>
            <h3 class="section-subheading text-muted">
              Get in touch on me for any inquiries you may have!
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      id="name"
                      class="form-control"
                      type="text"
                      placeholder="Your Name *"
                      required="required"
                      data-validation-required-message="Please enter your name."
                    />
                    <p class="help-block text-danger" />
                  </div>
                  <div class="form-group">
                    <input
                      id="email"
                      class="form-control"
                      type="email"
                      placeholder="Your Email *"
                      required="required"
                      data-validation-required-message="Please enter your email address."
                    />
                    <p class="help-block text-danger" />
                  </div>
                  <div class="form-group">
                    <input
                      id="phone"
                      class="form-control"
                      type="tel"
                      placeholder="Your Phone"
                    />
                    <p class="help-block text-danger" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <textarea
                      id="message"
                      class="form-control"
                      placeholder="Your Message *"
                      required="required"
                      data-validation-required-message="Please enter a message."
                    />
                    <p class="help-block text-danger" />
                  </div>
                </div>
                <div class="clearfix" />
                <div class="col-lg-12 text-center">
                  <div id="success" />
                  <button
                    id="sendMessageButton"
                    class="btn btn-primary btn-xl text-uppercase"
                    type="submit"
                  >
                    Send Message
                  </button>
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
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "Contact",
  components: {
    PageHeader,
  },
};
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
  border-color: #9dc5ca;
  -webkit-box-shadow: none;
  box-shadow: none;
}

section#contact ::-webkit-input-placeholder {
  font-weight: 700;
  color: #ced4da;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}

section#contact :-moz-placeholder {
  font-weight: 700;
  color: #ced4da;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}

section#contact ::-moz-placeholder {
  font-weight: 700;
  color: #ced4da;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}

section#contact :-ms-input-placeholder {
  font-weight: 700;
  color: #ced4da;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}

/*#endregion CONTACT*/
</style>
