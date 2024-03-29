import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue"
import RecipePage from "@/pages/RecipePage.vue"

const routes = [
    { path: '/', component: HomePage },
    { path: '/recipe/:id', component: RecipePage }
]
  
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router;