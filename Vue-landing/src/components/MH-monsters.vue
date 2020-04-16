<template>
  <div class="monster">
    <h1 class="title">DISCOVER NEW CREATURES</h1>
    <div class="monster__container">
      <div class="monster__cards" v-for="monster in monsters" :key="monster.id">
        <img class="monster__img" :src="monster.img" alt="monster" />
        <div class="monster__info">
          <h2>{{monster.type}}</h2>
          <p>{{monster.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import MHheader from "./MH-header.vue";
export default {
  components: {
    "Mh-header": MHheader
  },
  name: "app",
  data() {
    return {
      monsters: [
        {
          id: 0,
          type: "Kulu-Ya-Ku",
          img: "../src/assets/kulu.jpg",
          description:
            "An odd bird wyvern that has developed limbs capable of carrying weapons.It's been spotted stealing eggs from nests found in the Ancient Forest and Wildspire Waste"
        },
        {
          id: 1,
          type: "Kushala Daora",
          img: "../src/assets/daora.jpg",
          description:
            "An elder dragon that shields itself with fierce winds, preventing anyone from approaching it. Its skin consists of hard, metallic scales."
        },
        {
          id: 2,
          type: "Nergigante",
          img: "../src/assets/nergi.jpg",
          description:
            "A terrible elder dragon that appears when other elders are in the vicinity. Its penchant for destruction is well documented."
        },
        {
          id: 3,
          type: "Kulve Taroth",
          img: "../src/assets/kulve.jpg",
          description:
            "An Elder Dragon that protects itself with a glittering coat of metal. Its ecology and coat differ with each appearance."
        }
      ]
    };
  }
};
</script>

<style lang="scss" >
.monster {
  margin: 4rem 0;
}
.title {
  text-align: center;
}
.monster__container {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(700px, 1fr));
  align-items: center;
  justify-items: center;
  grid-gap: 15px;
  padding-bottom: 1em;
}
.monster__cards {
  height: 350px;
  width: 650px;
  background-color: rgb(162, 182, 196);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  border-radius: 20px;
  justify-items: center;
  p {
    font-size: 1.3em;
    text-align: justify;
  }
}

.monster__cards:hover {
  transition: 0.2s ease-out;
  transform: scale(1.009);
  background-color: rgba(132, 143, 177, 0.884);
}
.monster__img {
  border-radius: 10px;
  box-shadow: 10px 5px rgb(111, 117, 134);
}
.monster__info {
  text-align: start;
  padding: 0 1em;
  margin: 0 1em;
}
.monster__cards h2 {
  text-align: center;
  font-family: "Marcellus SC", "fallback", Helvetica, Arial, sans-serif;
}
</style>