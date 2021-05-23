<template>
  <div class="bg-info text-light py-40">
    <div class="portada-left">
      <div class="d-flex my-pic">
        <div>
          <img src="@/assets/imgs/me.png" alt="me" />
        </div>
        <div>
          <p class="my-10">
            I'm a Front-End Developer focused on Vue js, and a Software Tester
            from Uruguay.
          </p>
          <p class="my-10">
            I really like writing code and learn new things, I am very
            responsible and committed.
          </p>
          <p class="my-10">
            I am very interested on keep growing as a developer and as a person.
            I am looking forward to have my first work experience where I can
            apply all my knowledge!
          </p>
          <div class="d-flex intro-text-links">
            <p>Contact me:</p>
            <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseIntroText",
};
</script>