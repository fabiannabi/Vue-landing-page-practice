<template>
  <div class="cards">
    <div class="card__container" v-for="card in CardsInfo" :key="card.id">
      <h1 class="cards__tittle">{{card.title}}</h1>
      <img class="cards__img" v-bind:src="card.img" alt />
      <div class="cards__description">{{card.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      CardsInfo: [
        {
          title: "HUNT",
          id: 1,
          img: "../src/assets/hunt.jpg",
          description:
            "As a hunter, you'll take on quests to hunt monsters in a variety of habitats, use your knowledge and power to survive."
        },
        {
          title: "CAPTURE",
          id: 2,
          img: "../src/assets/capture.png",
          description:
            "Build traps to aid your hunt, set, bait and wait for the moment to sedate that monster, add them to your reseach information"
        },
        {
          title: "CRAFT",
          id: 3,
          img: "../src/assets/craft.jpg",
          description:
            "Take down these monsters and receive materials that you can use to create stronger weapons and armor in order to hunt even more dangerous monsters."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 5em;
  padding-bottom: 5em;
  grid-gap: 10px;
  background-color: rgba(151, 153, 151, 0.973);

  justify-items: center;
  :hover {
    background-color: rgba(184, 184, 184, 0.884);
  }
}
.card__container {
  border-style: (solid 10px black);
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  max-width: 600px;
  height: 500px;
  justify-items: center;
  text-align: center;
  background-color: rgb(146, 145, 145);
}
.cards__img {
  height: 250px;
  box-shadow: 10px 10px grey;
  width: auto;
}
.cards__tittle {
  padding-top: 1.5em;
  font-size: 1.5em;
}
.cards__description {
  font-size: 1.3em;
}
</style>
