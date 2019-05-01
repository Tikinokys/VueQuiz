<template>
		<div id="app2" class="my-3 py-1 bg-white rounded shadow-sm">
			<div class="main">
				<div class="container">
					<div class="row">
							<div class="col-5 col-md-3">
						        <img src="../assets/me.png"" width="180" height="180" alt="me avatar" class="avatar">
						    </div>
						    <div class="col-6 col-md-6">
						        <p id="nick">Tikinokys</p>
						    </div>
						    <div class="col-8 col-md-3">
						        <button type="button" class="btn btn-outline-dark" id="btnEdit">Редактировать</button>
						    </div>
					</div>
					<div class="col">
						<div class="row">
							<hr align="left" width="1000" size="1" color="black" class="my-4"/>
						</div>
						<div class="row py-2">
							<div class="col">
								<label>Очки: 100</label>
							</div>
							<div class="col">
								<label>Уровень: 1</label>
							</div>
						</div>
					</div>
				</div>
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
export default class Profile extends Vue {

  constructor() {
    super();
  }

  public beforeRouteLeave (to: any, from: any, next: () => {}) {
    //console.log(this.apiToken.token);
    next();
  }

  get apiToken() {
    return this.$store.getters.apiToken;
  }



}

</script>

<style lang="scss" scoped>

#body{
	background-color: green;
}

#app2 {
	font-size: 26px;
	font-family: sans-serif;
	border: 1px solid #312a22;
}

.main{
	font-size: 36px;
}

.avatar{
	border-radius: 100px;
    box-shadow: 0 0 0 3px green, 0 0 13px #333;
	float: left;
	margin-left: 10px;
	margin-top: 10px;
}

#nick{
	margin-top: 60px;
	font-size: 46px;
	text-align: left;
}

.container{
	margin-top: 30px;
	
}

#btnEdit{
	border: 1px solid #312a22;
	font-size: 20px;
}


</style>