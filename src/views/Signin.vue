<template>
  <div id="app2">
    <div class="container my-3 py-3 bg-white rounded shadow-sm">
        <form @submit="signin" class="form-signin">
          <h1 class="h3 mb-3 font-weight-normal">CQUIZ</h1>
          <label for="inputLogin" class="sr-only" >Логин</label>
          <input type="login" id="inputLogin" class="form-control" placeholder="Логин" v-model="loginData.username" required autofocus>
          <label for="inputPassword" class="sr-only">Пароль</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Пароль" v-model="loginData.password" required>

          <button class="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
        </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteUpdate',
  'beforeRouteLeave',
]);

@Component
export default class SignIn extends Vue {
  public loginData = {
    username: '',
    password: '',
  };

  public userT = {};

  constructor() {
    super();
  }

  public beforeRouteEnter (to: any, from: any, next: () => {}) {
    //console.log('beforeRouteEnter');
    next();
  }

  public beforeRouteLeave (to: any, from: any, next: () => {}) {
    //console.log(this.apiToken.token);
    next();
  }

  public beforeRouteUpdate(to: any, from: any, next: () => {}) {

    next();
  }

  public signin(event: any) {
    event.preventDefault();
    this.$store.dispatch('auth', this.loginData).then(() => {
      console.log(this.apiToken.token);
      if(!!this.apiToken.token){
        this.$router.replace('/');
      }
    });
  }

  get apiToken() {
    return this.$store.getters.apiToken;
  }

}

</script>


<style lang="scss" scoped>

#app2{
  margin-top: 30px;
}

.container{
  border: 1px solid #312a22;
  padding-bottom: 15px;
  padding-top: 15px;
  width: 400px;
}

.form-control{
  margin-bottom: 5px;
}

</style>