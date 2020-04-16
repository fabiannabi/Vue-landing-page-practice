<template>
  <div>
    <Mh-header></Mh-header>
    <router-view></router-view>
    <Mh-footer></Mh-footer>
  </div>
</template>

<script>
import MHheader from "./components/MH-header.vue";
import MHcards from "./components/MH-cards.vue";
import MHmap from "./components/MH-map.vue";
import MHfooter from "./components/MH-footer.vue";

export default {
  components: {
    "Mh-header": MHheader,
    "Mh-cards": MHcards,
    "Mh-map": MHmap,
    "Mh-footer": MHfooter
  },

  name: "app",
  data() {
    return {};
  }
};
</script>

<style lang="scss" >
html {
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Marcellus SC", "fallback", Helvetica, Arial, sans-serif;
}
</style>
