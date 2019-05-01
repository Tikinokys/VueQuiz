<template>
  <div id="app">
    <div id="nav" style="background-color: gray; color: gray" class="my-1 rounded shadow-sm">
      <router-link to="/" id="rl">Главная</router-link> 
      <router-link to="/profile" v-if="this.accToken!=null" id="rl">Профиль</router-link> 
      <router-link to="/subjects" id="rl">Выбор</router-link> 
      <router-link to="/search" id="rl">Поиск противника</router-link> 
      <router-link to="/quiz" id="rl">Сессия</router-link> 
      <router-link to="/quizresult" id="rl">Результаты</router-link> 
      <router-link to="/about" id="rl">О викторине</router-link> 
      <router-link to="/signin" v-if="this.accToken==null" id="rl">Вход</router-link> 
      <router-link to="/signup" v-if="this.accToken==null" id="rl">Регистрация</router-link> 
      <button @click="logout" v-if="this.accToken!=null" class="btn btn-default">Выйти</button>
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
    this.$store.dispatch('logout');
    this.$router.replace('/signin');
  }

  get accToken() {
    return this.$store.state.accessToken;
  }
}

</script>

<style lang="scss" >

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

.btn-default{
  //margin-bottom: -10px;
  font-size: 16px;
  color:white;
  font-weight: bold;
  padding: 0px;
}

.btn-default:hover{
  color:white;
  text-decoration: underline;
}

#rl{
  margin-right: 10px;
}
</style>
