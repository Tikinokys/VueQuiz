<template>
  <div id="app2">
    <div class="container">
        <form @submit="signin" class="form-signin">
          <h1 class="h3 mb-3 font-weight-normal">CQUIZ</h1>
          <label for="inputLogin" class="sr-only" >Логин</label>
          <input type="login" id="inputLogin" class="form-control" placeholder="Логин" v-model="loginData.username" required autofocus>
          <label for="inputPassword" class="sr-only">Пароль</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Пароль" v-model="loginData.password" required>
          <div class="checkbox mb-3">

          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
        </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SignIn extends Vue {
  public loginData = {
    username: '',
    password: '',
  };
  constructor() {
    super();
  }

  public signin(event: any) {
    event.preventDefault();
    this.$store.dispatch('auth', this.loginData).then(() => {
      console.log(this.apiToken());
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