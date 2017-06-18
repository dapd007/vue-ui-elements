<template>
    <section>
        <app-header></app-header>

        <div class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Documentation</h1>
                    <h2 class="subtitle"></h2>
                </div>
            </div>

            <div class="hero-foot">
                <nav class="tabs is-boxed">
                    <div class="container">
                        <ul>
                            <li v-for="tab in tabs" :class="{ 'is-active': currentTab === tab.component }">
                                <a @click="currentTab = tab.component">
                                    {{ tab.title }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

        <nav class="nav has-shadow">
            <div class="container">
                <component :is="currentTab"></component>
            </div>
        </nav>

        <section class="section">
            <router-view></router-view>
        </section>

        <app-footer></app-footer>
    </section>
</template>

<script>
    import AppHeader from '../../templates/Header.vue'
    import AppFooter from '../../templates/Footer.vue'

    //  Components
    import Start from './Start/Start.vue'
    import General from './General/General.vue'
    import Forms from './Forms/Forms.vue'

    export default {
        components: {
            AppHeader,
            AppFooter,
            Start,
            General,
            Forms,
//            FormElements,
//            DataManipulation
        },
        data() {
            return {
                currentTab: 'Start',
                tabs: [
                    { title: 'Start', component: 'Start' },
                    { title: 'General', component: 'General' },
                    { title: 'Forms', component: 'Forms' },
//                    { title: 'Form', component: 'FormElements' },
//                    { title: 'Data', component: 'DataManipulation' }
                ]
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.currentTab = to.meta.category
            })
        }
    }
</script>