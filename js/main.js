
// import your modules/components here
import LoginPage from "./modules/LoginPage.js"

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes: [
      {
        path: '/',  // the location bar url
        name: 'login', // name of the route
        component: LoginPage // component to render
      }
    ] // short for `routes: routes`
  })
  
  // 5. Create and mount the root instance.
  const app = Vue.createApp({})
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  app.use(router)
  
  app.mount('#app')
  