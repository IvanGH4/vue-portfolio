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
              <a class="text-light" href="https://github.com/IvanGH4/test" target="_blank">Node Blog</a>
          </small>
      </div>

    <!-- Cards  -->
      <div class="card rounded-sm px-20 py-20">
        <div class="gradient-bg">
            <img class="rounded-sm" src="@/assets/imgs/dev-blog.png" alt="#" />
        </div>
        <BaseProjectCard
            :title="projects[0].title"    
            :desc="projects[0].desc"
            :live="projects[0].live"
            :repo="projects[0].repo"
        />
      </div> 

      <div class="card rounded-sm px-20 py-20">
          <div class="gradient-bg">
              <img class="rounded-sm" src="@/assets/imgs/todoapp-min.png" alt="todo" />
          </div>
          <BaseProjectCard
            :title="projects[1].title"    
            :desc="projects[1].desc"
            :live="projects[1].live"
            :repo="projects[1].repo"
        />
      </div> 

      <div class="card rounded-sm px-20 py-20">
          <div class="gradient-bg">
              <img class="rounded-sm" src="@/assets/imgs/cpgames.png" alt="#" />
          </div>
          <BaseProjectCard
            :title="projects[2].title"    
            :desc="projects[2].desc"
            :live="projects[2].live"
            :repo="projects[2].repo"
        />
      </div>

       <div class="card rounded-sm px-20 py-20">
          <div class="gradient-bg">
              <img class="rounded-sm" src="@/assets/imgs/mem-min.png" alt="#" />
          </div>
          <BaseProjectCard
            :title="projects[3].title"    
            :desc="projects[3].desc"
            :live="projects[3].live"
            :repo="projects[3].repo"
        />
      </div>
  </div>
</transition>
</template>

<script>
import BaseProjectCard from '@/components/share-tools/BaseProjectCard';

export default {
    name: 'BaseProjects',
    components: {
        BaseProjectCard
    },
    props: {
        sidebar: {
            type: String,
            default: 'side-bar'
        }
    },
    data() {
        return {
            showing: false,
            isSideOpen: false,
            projects: [
                {
                    title: 'Dev-spot Blog App',
                    desc: 'Blog app where you can publish, filter, and read articles. Made with Vue, Tailwind, and Firebase(Auth, Firestore, Storage).',
                    live: 'https://dev-spot-blog.web.app/',
                    repo: 'https://github.com/IvanGH4/vue-blog'
                },
                {
                    title: 'Todo App',
                    desc: "In this todo app you can store your todos, filter them, and delete them. There's also a theme picker.",
                    live: 'https://todo-app-ruddy.vercel.app/',
                    repo: 'https://github.com/IvanGH4/todo-app-challenge'
                },
                {
                    title: 'Capital Games',
                    desc: 'For this project I used Firebase firestore, auth, and Vue Js / Vuex / Vue router. Go play !',
                    live: 'https://capitalgamesig.web.app',
                    repo: 'https://github.com/IvanGH4/cap-gaming'
                },
                {
                    title: 'Memory Game',
                    desc: 'Simple memory game built with Javascript',
                    live: 'https://romantic-euclid-701120.netlify.app/',
                    repo: 'https://github.com/IvanGH4/memory-game'
                },
            ]
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