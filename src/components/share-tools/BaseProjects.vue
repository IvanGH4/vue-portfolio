<template>
<transition name="fade">
  <div class="container-projects text-light" v-if="showing">
      <div class="image">
          <h2>My Projects!</h2>
          <img src="@/assets/imgs/team.svg" alt="free" />
      </div>
      <div class="card rounded-sm">
          <div class="gradient-bg">
              <img src="@/assets/imgs/cpgames.png" alt="#" />
          </div>
          <div class="desc px-20 py-20">
              <h2 class="my-10">Capital Games</h2>
              <p>For this project I used Firebase firestore, auth, and Vue Js / Vuex / Vue router. Go play !</p>
              <div class="d-flex proj-link">
                <a href="https://capitalgamesig.web.app" target="_blank">Live Project</a>
                <a href="https://github.com/IvanGH4/cap-gaming" target="_blank"><i class="fab fa-github mx-10"></i>Repo</a>
              </div>
          </div>
      </div>
       <div class="card rounded-sm">
          <div class="gradient-bg">
              <img src="@/assets/imgs/weather.png" alt="#" />
          </div>
          <div class="desc px-20 py-20">
              <h2 class="my-10">Weather App</h2>
              <p>Simple weather app using Vue js and Open Weather Map API. Find the weather for any place.</p>
              <div class="d-flex proj-link">
                <a href="https://weatherapp-ig.web.app" target="_blank">Live Project</a>
                <a href="https://github.com/IvanGH4/weather-app" target="_blank"><i class="fab fa-github mx-10"></i>Repo</a>
              </div>
          </div>
      </div>
      <div class="image w">
          <img src="@/assets/imgs/weather.svg" alt="free" />
      </div>
       <div class="image">
          <img src="@/assets/imgs/movie.svg" alt="free" />
      </div>
       <div class="card rounded-sm">
          <div class="gradient-bg">
              <img src="@/assets/imgs/movieList-min.png" alt="#" />
          </div>
          <div class="desc px-20 py-20">
              <h2 class="my-10">Movie List</h2>
              <p>This project lists movies from TheMovieDB. It includes pagination and a search option.</p>
              <div class="d-flex proj-link">
                <a href="https://movieapp-practice.web.app/" target="_blank">Live Project</a>
                <a href="https://github.com/IvanGH4/movie-list" target="_blank"><i class="fab fa-github mx-10"></i>Repo</a>
              </div>
          </div>
      </div> 
  </div>
</transition>
</template>

<script>
export default {
    name: 'BaseProjects',
    data() {
        return {
            showing: false
        }
    },
    mounted() {
        this.showing = true
    }
}
</script>