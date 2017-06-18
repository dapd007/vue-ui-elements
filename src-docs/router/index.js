import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = require('../pages/Home.vue');

const Docs = require('../pages/docs/Docs.vue');
const Install = require('../pages/docs/Start/Install.vue');

//  General
const Icon = require('../pages/docs/General/Icon.vue');

//  Forms
const Radio = require('../pages/docs/Forms/Radio.vue');

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
                //  Start
                {
                    path: 'install',
                    component: Install,
                    meta: {
                        category: 'Start'
                    }
                },
                {
                    path: '',
                    redirect: 'install'
                },
                //  General
                {
                    path: 'icon',
                    component: Icon,
                    meta: {
                        category: 'General'
                    }
                },
                //  Forms
                {
                    path: 'radio',
                    component: Radio,
                    meta: {
                        category: 'Forms'
                    }
                }
            ]
        }
    ]
})
