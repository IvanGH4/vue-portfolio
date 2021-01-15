<template>
<transition name="foot-in">
  <footer v-if="showFooter">
     <div>
       <h4>Thank you for your visit!</h4>
       <p>Feel free to check my <a href="https://github.com/IvanGH4" target="_blank">GitHub</a> profile to see all my projects!</p>
       <p class="d-flex" @click="copy"><i class="fas fa-envelope"></i> Send me an Email<span><i class="far fa-copy"></i></span></p>
     </div>
  </footer>
</transition>
</template>

<script>
export default {
    name: 'BaseFooter',
    data() {
      return {
        mail: 'ivangarciaharriague@gmail.com',
        showFooter: false
      }
    },
    mounted() {
      this.showFooter = true
    },
    methods: {
      copy() {
        navigator.clipboard.writeText(this.mail);
          this.$toasted.show('Email copied to clipboard!', { 
            theme: "toasted-primary", 
            type: "success",
            position: "bottom-center", 
            duration : 2000,
            fullWidth: false,
        });
      }
    }
}
</script>