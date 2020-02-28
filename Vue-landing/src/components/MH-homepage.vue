<template>
  <div>
    <Mh-header></Mh-header>
    <Mh-cards></Mh-cards>
    <Mh-map></Mh-map>
  </div>
</template>

<script>
import MHheader from "./MH-header.vue";
import MHcards from "./MH-cards.vue";
import MHmap from "./MH-map.vue";
import MHfooter from "./MH-footer.vue";

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

<style lang="scss"></style>
