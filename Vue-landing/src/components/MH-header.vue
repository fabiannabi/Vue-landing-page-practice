<template>
  <div class="header">
    <div class="header__link">
      <a href>Weapons</a>
      <a href>Monsters</a>
    </div>
    <!--
    <button class="header__button--main">Join the Hunt</button>
    -->
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

.header__button--main {
  display: flex;
  padding: 10px;
  margin-top: 750px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 1.5em;
  font-size: 1.2em;
  font-weight: bold;
  color: rgb(226, 243, 187);
  background-color: rgb(114, 155, 91);
  &:hover {
    background-color: rgb(137, 187, 108);
    color: rgb(236, 240, 234);
    &:active {
      background-color: rgb(115, 158, 90);
    }
  }
}
</style>