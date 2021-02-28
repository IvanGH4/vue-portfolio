<template>
    <div class="desc">
        <h2 class="my-10">{{title}}</h2>
        <p>{{desc}}</p>
        <div class="d-flex proj-link">
        <a :href="live" target="_blank">Live Project</a>
        <a :href="repo" target="_blank"><i class="fab fa-github mx-10"></i>Repo</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseProjectCard',
    props: {
        title: {
            type: String
        },
        desc: {
            type: String,
        },
        live: {
            type: String
        },
        repo: {
            type: String,
        }
    }
}
</script>

<style>

</style>