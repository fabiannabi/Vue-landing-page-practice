import weapons from "./components/MH-weapons.vue";
import homepage from "./components/Home.vue";
import monsters from "./components/MH-monsters.vue";

export default [
  {
    path: "/weapons",
    component: weapons
  },
  {
    path: "/monsters",
    component: monsters
  },
  {
    path: "/",
    component: homepage
  }
];
