<template>
<transition name="fade">
  <div class="container-projects text-light" v-if="showing">

      <div :class="[sidebar, {'opened': isSideOpen}]">
          <button class="btn" @click="showSidebar">
            <i :class="['fas', {'fa-angle-left': !isSideOpen}, {'fa-angle-right': isSideOpen}]"></i>
          </button>
          <small>
              <a class="text-light" href="https://vue-recipe-app.vercel.app/" target="_blank">Recipe App</a>
          </small>
          <small>
              <a class="text-light" href="https://dashboard-theme-switcher-6w1v4s1tr.vercel.app/" target="_blank">Theme Switcher</a>
          </small>
          <small>
              <a class="text-light" href="https://huddle-landing-challenge.vercel.app/" target="_blank">Landing</a>
          </small>
      </div>

      <!-- <div class="image">
          <h2>My Projects!</h2>
          <img src="@/assets/imgs/team.svg" alt="free" />
      </div> -->
      <div class="card rounded-sm px-20 py-20">
          <div class="gradient-bg">
              <img class="rounded-sm" src="@/assets/imgs/cpgames.png" alt="#" />
          </div>
          <div class="desc">
              <h2 class="my-10">Capital Games</h2>
              <p>For this project I used Firebase firestore, auth, and Vue Js / Vuex / Vue router. Go play !</p>
              <div class="d-flex proj-link">
                <a href="https://capitalgamesig.web.app" target="_blank">Live Project</a>
                <a href="https://github.com/IvanGH4/cap-gaming" target="_blank"><i class="fab fa-github mx-10"></i>Repo</a>
              </div>
          </div>
      </div>

      <div class="card rounded-sm px-20 py-20">
          <div class="gradient-bg">
              <img class="rounded-sm" src="@/assets/imgs/todoapp-min.png" alt="todo" />
          </div>
          <div class="desc">
              <h2 class="my-10">Todo App</h2>
              <p>In this todo app you can store your todos, filter them, and delete them. There's also a theme picker. <small>Idea from <a href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW" target="_blank">Front end Mentor</a></small></p>
              <div class="d-flex proj-link">
                <a href="https://todo-app-ruddy.vercel.app/" target="_blank">Live Project</a>
                <a href="https://github.com/IvanGH4/todo-app-challenge" target="_blank"><i class="fab fa-github mx-10"></i>Repo</a>
              </div>
          </div>
      </div> 

       <div class="card rounded-sm px-20 py-20">
          <div class="gradient-bg">
              <img class="rounded-sm" src="@/assets/imgs/mem-min.png" alt="#" />
          </div>
          <div class="desc">
              <h2 class="my-10">Memory Game</h2>
              <p>Simple memory game built with Javascript</p>
              <div class="d-flex proj-link">
                <a href="https://romantic-euclid-701120.netlify.app/" target="_blank">Live Project</a>
                <a href="https://github.com/IvanGH4/memory-game" target="_blank"><i class="fab fa-github mx-10"></i>Repo</a>
              </div>
          </div>
      </div>
      <!-- <div class="image w">
          <img src="@/assets/imgs/weather.svg" alt="free" />
      </div>
       <div class="image">
          <img src="@/assets/imgs/movie.svg" alt="free" />
      </div> -->
       <div class="card rounded-sm px-20 py-20">
          <div class="gradient-bg">
              <img class="rounded-sm" src="@/assets/imgs/movieList-min.png" alt="#" />
          </div>
          <div class="desc">
              <h2 class="my-10">Movie List</h2>
              <p>This project lists movies from TheMovieDB. It includes pagination and a search option.</p>
              <div class="d-flex proj-link">
                <a href="https://movieapp-practice.web.app/" target="_blank">Live Project</a>
                <a href="https://github.com/IvanGH4/movie-list" target="_blank"><i class="fab fa-github mx-10"></i>Repo</a>
              </div>
          </div>
      </div> 
    
      <!-- <div class="image">
          <img src="@/assets/imgs/todo.svg" alt="tasks" />
      </div> -->
  </div>
</transition>
</template>

<script>

export default {
    name: 'BaseProjects',
    props: {
        sidebar: {
            type: String,
            default: 'side-bar'
        }
    },
    data() {
        return {
            showing: false,
            isSideOpen: false
        }
    },
    mounted() {
        this.showing = true;
        setTimeout(() => {
            this.isSideOpen = true
        }, 2000);
    },
    methods: {
        showSidebar() {
            this.isSideOpen = !this.isSideOpen;
        }
    },
}
</script>