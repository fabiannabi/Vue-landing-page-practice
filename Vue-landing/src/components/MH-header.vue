<template>
  <div class="header">
    <div class="header__link">
      <a href>Weapons</a>
      <a href>Monsters</a>
    </div>
    <button class="header__button--main">Join the hunt</button>
  </div>
</template>




<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.header {
  background-image: url(../assets/mh-title.jpg);
  height: 100vh;
  background-size: cover;
  background-position: center;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.header__link {
  font-size: 1.5em;
  text-align: center;
  margin: auto;
  background-color: #5c5150;
}

.header__link a {
  margin: 100px;
  text-decoration: none;
  color: white;
}

.header__button--main {
  display: flex;
  padding: 10px;
  margin-top: 750px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 1.5em;
  font-size: 1.2em;
  font-weight: bold;
  color: rgba(15, 14, 14, 0.781);
}
</style>
