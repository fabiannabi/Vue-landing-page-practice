<template>
  <div>
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

<style lang="scss">
html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
