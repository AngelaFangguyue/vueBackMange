import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'
import ArtList from "../views/ArtList.vue";
import CreateArt from "../views/CreateArt.vue";
import EditArt from "../views/EditArt.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/1-1",
  },
  {
    path: "/1-1",
    name: "ArtList",
    component: ArtList,
  },
  {
    path: "/1-2",
    name: "CreateArt",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CreateArt,
  },
  {
    path: "/:id/editArt",
    name: "EditArt",
    component: EditArt,
  },
];

const router = new VueRouter({
  routes,
});

// router.afterEach((to, from) => {
//   // ...
//   console.log(to.path,from.path);
// })
export default router;
