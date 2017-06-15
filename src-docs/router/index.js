import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = require('../pages/Home.vue');

const Docs = require('../pages/docs/Docs.vue');
const Install = require('../pages/docs/Start/Install.vue');

const Playground = require('../pages/docs/Start/Playground.vue');

export default new Router({
    linkActiveClass: 'is-active',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/docs',
            component: Docs,
            children: [
                {
                    path: 'install',
                    component: Install,
                    meta: {
                        category: 'Start'
                    }
                },
                {
                    path: 'playground',
                    component: Playground,
                    meta: {
                        category: 'Start'
                    }
                },
                {
                    path: '',
                    redirect: 'install'
                }
            ]
        }
    ]
})
