<template>
	<div id="app2">
		<h1 id="h2">Онлайн викторина</h1>
		<h1 id="h1">CQUIZ</h1>
		<div class="main">
			<p>Проверьте свои знания в области высшей математики. </p>
			<button id="btn" class="btn btn-outline-success">Начать играть</button>
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
export default class Main extends Vue {

  constructor() {
    super();
  }

  public beforeRouteLeave (to: any, from: any, next: () => {}) {
    //console.log(localStorage.getItem("userToken"));
    next();
  }

  get apiToken() {
    return this.$store.getters.apiToken;
  }

}

</script>

<style lang="scss" scoped>

#app2 {
  margin-top: 30px;
  font-size: 24px;
  font-family: sans-serif;
}

.main{
	margin-top: 35px;
	font-size: 34px;
}

#h1{
	font-size: 60px;
}

#h2{
	font-size: 45px;
}

#btn{
	font-family: sans-serif;
	margin-top: 15px;
	font-size: 36px;
}
</style>