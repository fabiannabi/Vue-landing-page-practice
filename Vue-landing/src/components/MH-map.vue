<template>
  <div class="map__container">
    <div class="map__slideshow">
      <img v-bind:src="url" alt class="map__img" />
    </div>
    <div class="map__buttons">
      <button @click="changeImage"></button>
      <button @click="changeImage2"></button>
      <button @click="changeImage3"></button>
      <button @click="changeImage4"></button>
    </div>

    <div class="map__information">
      <h2>EXTEND YOUR HUNT</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nostrum qui vel aliquam commodi earum ullam modi unde totam iure.</p>
    </div>
  </div>
</template>




<script>
export default {
  name: "app",
  data() {
    return {
      id: 0,
      url: "../src/assets/map.jpg"
    };
  },
  methods: {
    changeImage() {
      this.url = "../src/assets/map.jpg";
    },
    changeImage2() {
      this.url = "../src/assets/map-1.jpg";
    },
    changeImage3() {
      this.url = "../src/assets/map-2.jpg";
    },
    changeImage4() {
      this.url = "../src/assets/map-3.jpg";
    }
  }
};
</script>

<style lang="scss">
.map__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 2em 2em;
  justify-items: center;
  align-items: center;
  background-color: rgba(150, 150, 150, 0.973);
}

.map__slideshow img {
  height: 500px;
  width: auto;
  box-shadow: 10px 10px grey;
}
.map__buttons {
  grid-row-start: 2;
}
.map__buttons button {
  padding: 0.5em 0.5em;
  border-style: solid 1px black;
  border-radius: 50px;
  background-color: rgba(95, 97, 95, 0.568);
}
.map__information {
  text-align: center;
  font-family: "Marcellus SC", "fallback", Helvetica, Arial, sans-serif;
  h2 {
    margin: 1em;
    color: black;
  }
  p {
    font-size: 1.3em;
  }
}
</style>
