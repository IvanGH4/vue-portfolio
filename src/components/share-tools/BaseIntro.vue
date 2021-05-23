<template>
  <div class="intro-wrapper bg-primary px-40 py-20">
    <div class="container-portada">
      <!-- <transition name="slide">
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
                <a href="https://www.linkedin.com/in/iv%C3%A1n-garc%C3%ADa-harriague-8a71b91b7/" target="_blank">Contact me</a>
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
      </transition> -->
      <div class="row">
        <div class="col">
          <h2 id="name" class="text-info">Iván García</h2>
          <h1 id="title" class="text-light">
            Full Stack Develo<span class="text-primary">per</span>
          </h1>
        </div>
        <div class="col circles-wrapper" id="intro-img">
          <div class="circle-1"></div>
          <div class="circle-2"></div>
          <div class="circle-3"></div>
        </div>
        <div class="col-md-4 circles-wrapper" id="intro-img">
          <div class="circle-1" ref="cir1"></div>
          <div class="circle-2" ref="cir2"></div>
          <div class="circle-3" ref="cir3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseIntro",
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
    this.$refs.cir1.style.display = "block";
    this.$refs.cir2.style.display = "block";
    this.$refs.cir3.style.display = "block";
    setInterval(() => {
      let left1 = Math.floor(Math.random() * 300);
      let left2 = Math.floor(Math.random() * 250);
      let left3 = Math.floor(Math.random() * 200);
      let top1 = Math.floor(Math.random() * 200);
      let top2 = Math.floor(Math.random() * 150);
      let top3 = Math.floor(Math.random() * 100);

      this.$refs.cir1.style.left = `${left1}px`;
      this.$refs.cir2.style.left = `${left2}px`;
      this.$refs.cir3.style.left = `${left3}px`;
      this.$refs.cir1.style.top = `-${top1}px`;
      this.$refs.cir2.style.top = `-${top2}px`;
      this.$refs.cir3.style.top = `-${top3}px`;
    }, 700);
  },
  methods: {},
};
</script>