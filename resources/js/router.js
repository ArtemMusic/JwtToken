import {createRouter, createWebHistory} from "vue-router";

const route = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/users', component: () => import('./components/User/Index.vue'),
            name: 'users.index',
            alias: '/'
        },
        {
            path: '/users/login', component: () => import('./components/User/Login.vue'),
            name: 'users.login'
        },
        {
            path: '/users/register', component: () => import('./components/User/Register.vue'),
            name: 'users.register'
        },
        {
            path: '/user/person', component: () => import('./components/User/Person.vue'),
            name: 'user.person',
        },
        {
            path: '/:catchAll(.*)', component: () => import('./components/User/Person.vue'),
            name: '404'
        }
    ]
});

route.beforeEach((to, from, next) => {
    const access_token = localStorage.getItem('access_token');
    if (!access_token) {
        if (to.name === 'users.login' || to.name === 'users.register') {
            return next()
        } else {
            return next({
                name: 'users.login'
            })
        }
    }

    if ((to.name === 'users.login' || to.name === 'users.register') && access_token) {
        return next({
            name: 'user.person'
        })
    }

    next();
})

export default route;
