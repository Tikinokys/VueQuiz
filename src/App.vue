<template>
  <div id="app">
    <div id="nav" style="background-color: gray; color: gray" class="my-1 rounded shadow-sm">
      <router-link to="/" >Главная</router-link> |
      <router-link to="/profile">Профиль</router-link> |
      <router-link to="/subjects">Выбор</router-link> |
      <router-link to="/search">Поиск противника</router-link> |
      <router-link to="/quiz">Сессия</router-link> |
      <router-link to="/quizresult">Результаты</router-link> |
      <router-link to="/about">О викторине</router-link> |
      <router-link to="/signin">Вход</router-link> |
      <router-link to="/signup">Регистрация</router-link> |
      <button @click="logout">Выйти</button>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {
  public logout(event: any) {
    event.preventDefault();
    this.$store.commit('logout');
    this.$router.replace('/signin');
  }
}

</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  max-width: 1000px;
  margin: 0 auto;
  padding-top: 10px;
}
#nav {
  font-size: 16px;
  padding: 10px 0 14px;
  height: 40px;
  font-weight: 500;
  a {
    font-weight: bold;
    color: white;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
