<template>
  <div id="app2">
    <div class="container">
        <form class="form-signin">
          <h1 class="h3 mb-3 font-weight-normal">CQUIZ</h1>
          <label for="inputLogin" class="sr-only">Логин</label>
          <input type="login" id="inputLogin" class="form-control" placeholder="Логин" required autofocus>
          <label for="inputPassword" class="sr-only">Пароль</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Пароль" required>
          <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Запомнить
          </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
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