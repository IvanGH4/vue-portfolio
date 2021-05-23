<template>
  <nav class="navbar bg-primary text-light px-40 py-20">
    <div class="circle-abs"></div>
    <ul class="nav-items">
      <li class="icons">
        <a
          class="text-primary"
          href="https://www.linkedin.com/in/ivan-garcia-harriague/"
          target="_blank"
          ><i class="fab fa-linkedin"></i
        ></a>
        <a
          class="text-primary"
          href="https://twitter.com/ivanGH_4"
          target="_blank"
          ><i class="fab fa-twitter"></i
        ></a>
        <a
          class="text-primary"
          href="https://github.com/IvanGH4"
          target="_blank"
          ><i class="fab fa-github"></i
        ></a>
      </li>
      <li class="links">
        <router-link class="link custom-link" to="/">Home</router-link>
        <router-link class="link custom-link" to="/projects"
          >Projects</router-link
        >
        <router-link class="link custom-link" to="/about">About</router-link>
      </li>
      <li class="mobile-btn">
        <button :class="[btnBurger, { open: isMenuOpen }]" @click="openMenu">
          <span class="top-line"></span>
          <span class="middle-line"></span>
          <span class="bottom-line"></span>
        </button>
      </li>
      <!-- <li class="myName">
        <router-link to="/projects">Projects</router-link>
      </li>
      <li class="myName">
        <router-link to="/about">About</router-link>
      </li> -->
    </ul>
    <ul :class="[menu, { show: isMenuOpen }]">
      <li>
        <router-link class="link-menu-item" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="link-menu-item" to="/projects"
          >Projects</router-link
        >
      </li>
      <li>
        <router-link class="link-menu-item" to="/about">About me</router-link>
      </li>
      <li class="icons menu-links">
        <a
          class="text-primary mx-5"
          href="https://www.linkedin.com/in/iv%C3%A1n-garc%C3%ADa-harriague-8a71b91b7/"
          target="_blank"
          ><i class="fab fa-linkedin"></i
        ></a>
        <a
          class="text-primary mx-5"
          href="https://twitter.com/ivanGH_4"
          target="_blank"
          ><i class="fab fa-twitter"></i
        ></a>
        <a
          class="text-primary mx-5"
          href="https://github.com/IvanGH4"
          target="_blank"
          ><i class="fab fa-github"></i
        ></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "BaseNav",
  props: {
    btnBurger: {
      type: String,
      default: "hamburger",
    },
    menu: {
      type: String,
      default: "side-menu",
    },
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  watch: {
    $route() {
      //esto detecta si cambias de pagina.
      this.isMenuOpen = false;
    },
  },
};
</script>

<style>
</style>