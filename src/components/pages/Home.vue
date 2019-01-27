<template>
  <main>
    <div class="container my-96 my-lg-128">
      <div class="row">
        <div class="col">
          <h1 class="mb-32">Hi, I’m Jevgenijs Zaremba.</h1>
          <p class="subtitle-large mb-32 text-dark">
            I am User Interface Designer & Web Developer with deep passion for turning ideas and wireframes into interactive web applications.
            Currently working at
            <a
              href="http://sonarworks.com"
            >Sonarworks</a>.
          </p>
          <p class="body-large">Outside of my full-time commitments, I work with a select freelance client base to create amazing products and solutions.</p>
        </div>
      </div>
    </div>
    <hr>
    <About></About>
  </main>
</template>

<script>
import About from '@/components/templates/About'
export default {
  components: {
    About
  }
}
</script>
