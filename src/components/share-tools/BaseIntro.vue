<template>
  <div class="container-portada">
      <transition name="slide">
        <div class="portada-left" v-if="show">
                <div class="d-flex my-pic">
                    <img src="@/assets/imgs/me.png" alt="me" />
                    <h1 class="my-20 mx-10">
                        Hi! I'm Iván García
                    </h1>
                </div>
                <p class="my-10">
                    I'm a Front-End Developer focused on Vue js, and a Software Tester from Uruguay.
                </p>
                <p class="my-10">
                I really like writing code and learn new things, I am very responsible and committed.
                </p>
                <p>
                    I am very interested on keep growing as a developer and as a person. I am looking forward to have my first work experience where I can apply all my knowledge!
                </p>
            <div class="my-40">
                <router-link to="/projects" class="bg-light border-primary rounded-sm d-block t-center text-primary py-10 px-20 work-btn">Take a look at my work</router-link>
            </div>
        </div>
      </transition>
      <transition name="slide-fade">
      <div class="portada-right" v-if="show">
          <h2 class="my-20">My stack</h2>
          <div class="techs">
              <div class="row">
                <img src="@/assets/imgs/html-5.svg" alt="html">
                <img src="@/assets/imgs/css-3.svg" alt="css">
                <img src="@/assets/imgs/js.png" alt="js">
              </div>
              <div class="row">
                <img src="@/assets/imgs/logo.png" alt="vue">
                <img src="@/assets/imgs/sass.svg" alt="vue">
                <img src="@/assets/imgs/fb-min.png" alt="firebase">
              </div>

          </div>
      </div>
      </transition>
  </div>
</template>

<script>
export default {
    name: 'BaseIntro',
    data() {
        return {
            show: false
        }
    },
    mounted() {
        this.show = true
    }
}
</script>