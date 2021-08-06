import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Foods from '../views/Foods.vue'
import FoodDetail from '../views/FoodDetail.vue'
import Cart from '../views/Cart.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/foods',
        name: 'Foods',
        component: Foods
    },
    {
        path: '/foods/:id',
        name: 'FoodDetail',
        component: FoodDetail
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router