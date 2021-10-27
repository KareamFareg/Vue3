import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Uploadimage from "../components/global/Uploadimage";
import Blog from "../views/Blog";
import Calender from "../views/Calendar";
import Slider from "../views/Slider";
import Chat from "../views/Chats";
import store from "../store/index";
import DcHeros from "../views/DcHeros";


const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/upload",
    component:Uploadimage
  },
  {
    path:'/blog',
    component:Blog
  },
  {
    path:'/calendar',
    component:Calender
  },
  {
    path:'/slider',
    component:Slider
  },
  {
    path:'/dcheros',
    component:DcHeros
  },
  {
    path:'/chat',
    component:Chat,
    meta:{middleware:"auth"}

  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, _,next)=>{
   if(to.meta.middleware){
     const middleware = require(`../middlewares/${to.meta.middleware}`);
       if(middleware){
       middleware.default(next,store);
     }else {
       next();
     }
   }else {
     next();
   }
});
export default router;
