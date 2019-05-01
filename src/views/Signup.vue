<template>
  <div id="app2">
    <div class="container my-3 py-3 bg-white rounded shadow-sm">
        <form @submit="signup" class="form-signin">
          <h1 class="h3 mb-3 font-weight-normal">Регистрация</h1>
          <label for="inputLogin" class="sr-only">Логин</label>
          <input type="login" id="inputLogin" class="form-control" placeholder="Логин" v-model="regisrationData.username" required autofocus>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="regisrationData.email" required autofocus>
          <label for="inputPassword" class="sr-only">Пароль</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Пароль" v-model="regisrationData.password" required>
          <label for="inputPassword2" class="sr-only">Повторите Пароль</label>
          <input type="password" id="inputPassword2" class="form-control" placeholder="Повторите Пароль" v-model="regisrationData.password2" required>
          <p v-if="regisrationData.password2!='' && regisrationData.password!=regisrationData.password2">Пароли не совпадают</p>

          <button class="btn btn-lg btn-primary btn-block" type="submit">Зарегистрироваться</button>
        </form>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SignUp extends Vue {
  public regisrationData = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };

  constructor() {
    super();
  }

  public signup(event: any) {
    event.preventDefault();
    if(this.regisrationData.password==this.regisrationData.password2){ 
      this.$store.dispatch('reg', this.regisrationData).then(() => {
        this.$router.replace('/signin');
      });
    }
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

#incorrectPswd{
  display: none;
}

</style>