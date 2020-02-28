<template>
  <div class="monster">
    <div class="header">
      <ul class="header__link">
        <li>
          <router-link to="/weapons" exact>WEAPONS</router-link>
        </li>
        <li>
          <router-link to="/monsters" exact>MONSTERS</router-link>
        </li>
        <li>
          <router-link to="/" exact>HOME</router-link>
        </li>
      </ul>
      <!--
    <button class="header__button--main">Join the Hunt</button>
      -->
    </div>
    <div class="monster__container">
      <h1 class="title">MONSTER HUNTER CREATURES</h1>
      <div class="monster__cards" v-for="monster in monsters" :key="monster.id">
        <img :src="monster.img" alt="monster" />
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
            "An Elder Dragon that protects itself with a glittering coat of metal. Its ecology and coat differ with each appearance, thus the need for a thorough investigation. An exhaustive investigation is required in order to break Kulve Taroth's giant gold plated horns. Pursue the monster to learn more about it. Gather tracks and recruit hunters to help you further your investigation"
        }
      ]
    };
  }
};
</script>

<style lang="scss" >
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.header__link {
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  color: white;
  opacity: 0.4;
  background-color: #030303;
  :hover {
    color: rgb(124, 212, 124);
  }
  :active {
    color: rgb(70, 119, 70);
  }
}

.header__link a {
  margin: 100px;
  text-decoration: none;
  color: white;
}
.title {
  text-align: center;
  margin: 20px;
}
.monster__container {
  background-color: rgba(151, 153, 151, 0.973);
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  padding-bottom: 1em;
  :hover {
    background-color: rgba(184, 184, 184, 0.884);
  }
}
.monster__cards {
  margin-left: 25%;
  margin-right: 25%;
  background-color: rgb(146, 145, 145);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  p {
    font-size: 1.3em;
    font-family: "Marcellus SC", "fallback", Helvetica, Arial, sans-serif;
    text-align: justify;
  }
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