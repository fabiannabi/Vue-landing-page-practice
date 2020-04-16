<template>
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
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" />
    </div>
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

<style lang="scss" >
.header {
  background: #bfd2eb52;
  width: auto;
  min-height: 40vh;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.header__link {
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  background-color: rgba(151, 175, 226, 0.404);
}

.header__link li {
  margin: 20px;

  list-style: none;
  :hover {
    transition: ease-out 1s;
    color: rgba(3, 8, 151, 0.849);
  }
  :active {
    color: rgb(28, 10, 150);
  }
}

.header__link a {
  list-style: none;
  text-decoration: none;
  font-weight: bold;
  color: rgba(79, 74, 204, 0.678);
}
.logo {
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>
