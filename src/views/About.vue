<template>
<transition name="bounce">
  <div class="about" v-if="showAbout">
      <h2>More about me</h2>
      <p>I recently finished a Front-End development course at Instituto BIOS, and I also took a Software Tester course at Plan Ceibal. <br> I feel very comfortable working on Vue js, and I am also open and looking forward to learn as much as I can!</p>
      <img src="@/assets/imgs/about-min.png" alt="/">
  </div>
</transition>
</template>

<script>
export default {
  data() {
    return {
      showAbout: false,
    }
  },
  mounted() {
    this.showAbout = true;
  }
}
</script>