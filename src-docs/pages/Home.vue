<template>
    <section class="home">

        <div class="hero is-fullheight">
            <div class="hero-head">
                <app-header></app-header>
            </div>
        </div>
        <app-footer></app-footer>
    </section>
</template>
<script>

    import AppHeader from '../templates/Header.vue';
    import AppFooter from '../templates/Footer.vue'

    export default {
        components: {
            AppHeader,
            AppFooter
        },
        data() {
            return {}
        },
        mounted() {

        },
        methods: {}
    }
</script>
