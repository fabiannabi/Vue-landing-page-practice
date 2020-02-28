<template>
  <div class="weapons">
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
    <div class="weapons__container">
      <h1 class="title">MONSTER HUNTER WEAPONS</h1>
      <div class="weapons__cards" v-for="weapon in weapons" :key="weapon.id">
        <img :src="weapon.img" alt="weapons" />
        <div class="weapons__info">
          <h2>{{weapon.type}}</h2>
          <p>{{weapon.description}}</p>
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
      weapons: [
        {
          id: 0,
          type: "Great Sword",
          img: "../src/assets/great-sword.png",
          description:
            "A mighty sword that makes up for its lack of mobility with huge, punishing attacks. The Great Sword can also block attacks, making it a good all-around weapon."
        },
        {
          id: 1,
          type: "Hammer",
          img: "../src/assets/hammer.png",
          description:
            "A blunt weapon used to smash monsters with powerful attacks. It can stun monsters with repeated blows to the head."
        },
        {
          id: 2,
          type: "Charge Blade",
          img: "../src/assets/charge.png",
          description:
            "A powerful weapon that morphs between a sword / shield combo and an axe. Accumulate energy with the nimble sword, and then switch to axe mode to unleash a thunderous, energy-filled attack."
        },
        {
          id: 3,
          type: "Bow",
          img: "../src/assets/bow.png",
          description:
            "The Bow is a versatile weapon thanks to its variety of Shots, including the long-ranged Arc Shot and the damaging Power Shot, and allows its user to be highly mobile as they fire off coated arrows as support."
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
.weapons__container {
  background-color: rgba(151, 153, 151, 0.973);
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  padding-bottom: 1em;
  :hover {
    background-color: rgba(184, 184, 184, 0.884);
  }
}
.weapons__cards {
  margin-left: 25%;
  margin-right: 25%;
  background-color: rgb(146, 145, 145);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  p {
    font-size: 1.3em;
    text-align: justify;
    font-family: "Marcellus SC", "fallback", Helvetica, Arial, sans-serif;
  }
}
.weapons__info {
  text-align: start;
  padding: 0 1em;
  margin: 0 1em;
}
.weapons__cards h2 {
  text-align: center;
  font-family: "Marcellus SC", "fallback", Helvetica, Arial, sans-serif;
}
</style>