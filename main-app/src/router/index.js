import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './modules'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes
})

// router.beforeEach((to, from, next) => {
//   console.log('beforeEach:', to, from)
//   next();
// })

export default router
