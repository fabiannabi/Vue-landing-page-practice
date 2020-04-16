<template>
  <div class="weapons">
    <h1 class="title">CRAFT AMAZING WEAPONS</h1>
    <div class="weapons__container">
      <div class="weapons__cards" v-for="weapon in weapons" :key="weapon.id">
        <img class="weapon__img" :src="weapon.img" alt="weapons" />
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
.weapons {
  margin: 4rem 0;
}

.title {
  text-align: center;
  margin: 20px;
}
.weapons__container {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(700px, 1fr));
  align-items: center;
  justify-items: center;
  grid-gap: 10px;
  padding-bottom: 1em;
}
.weapons__cards:hover {
  transition: 0.2s ease-out;
  transform: scale(1.009);
  background-color: rgba(134, 153, 179, 0.884);
}
.weapons__cards {
  height: 350px;
  width: 650px;
  background-color: rgb(162, 182, 196);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  p {
    font-size: 1.3em;
    text-align: justify;
  }
}
.weapon__img {
  background-color: rgba(104, 139, 153, 0.692);
  border-radius: 10px;
  box-shadow: 10px 5px rgb(111, 117, 134);
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