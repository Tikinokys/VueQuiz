<template>
  <div id="app2">
    <div class="container">
        <form class="form-signin">
          <h1 class="h3 mb-3 font-weight-normal">Регистрация</h1>
          <label for="inputLogin" class="sr-only">Логин</label>
          <input type="login" id="inputLogin" class="form-control" placeholder="Логин" required autofocus>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
          <label for="inputPassword" class="sr-only">Пароль</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Пароль" required>
          <label for="inputPassword2" class="sr-only">Повторите Пароль</label>
          <input type="password" id="inputPassword2" class="form-control" placeholder="Повторите Пароль" required>
          <div class="checkbox mb-3">
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Зарегистрироваться</button>
        </form>
    </div>
  </div>
</template>


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