<template>
	<div id="app2">
		<div class="main">
			<div class="container my-3 py-1 bg-white rounded shadow-sm">
				<div class="row">
					<div class="col">
						<p class="p1">{{points}}</p>
					</div>
					<div class="col" >
						<div class="row justify-content-center" id="time">
							<img src="../assets/time.png"" width="50" height="50" alt="time quiz" class="time">
							<p class="p2">{{time}}</p>
						</div>
					</div>
					<div class="col">
						<p class="p1">Вопрос: {{countQ}}/5</p>
					</div>
				</div>
				<div class="row">
					<div class="question">
						<p>{{question}}</p>
					</div>
				</div>
				<div class="answers_grid">
						<button id="answ" class="btn btn-outline-secondary btn-lg">{{answer[0]}}</button>
						<button id="answ" class="btn btn-outline-secondary btn-lg">{{answer[1]}}</button>
						<button id="answ" class="btn btn-outline-secondary btn-lg">{{answer[2]}}</button>
						<button id="answ" class="btn btn-outline-secondary btn-lg">{{answer[3]}}</button>
				</div>

					<button id="btn-accept" class="btn btn-success">Ответить</button>
				
				<div class="container">
					<div class="row ">
						<div class="col " id="border">
							<div class="row justify-content-center">
								<div class="row_pl ">
								<img src="../assets/avatar.png"" width="100" height="100" alt="me avatar" class="avatar">
								</div>
							</div>
							<div class="row justify-content-center">
								<div class="row_pl">
								<p id="player_points">{{playerPoints[0]}}</p>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="row justify-content-center">
								<div class="row_pl">
								<img src="../assets/avatar.png"" width="100" height="100" alt="serg avatar" class="avatar">
								</div>
							</div>
							<div class="row justify-content-center">
								<div class="row_pl">
								<p id="player_points">{{playerPoints[1]}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="row">
					<button id="btn-exit" class="btn btn-outline-danger">Выйти</button>
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
export default class QuizSession extends Vue {

  public question = 'Дифференцируемая функция может иметь экстремум в тех точках, где..';
  public answer = ['Производная равна нулю или не существует','Производная не существует','Производная равна нулю','Производная меньше нуля'];
  public points = '80';
  public countQ = '2';
  public playerPoints = ['60','40'];
  public time = '25';

  constructor() {
    super();
  }

  get apiToken() {
    return this.$store.getters.apiToken;
  }

}

</script>

<style lang="scss" scoped>

#app2 {
	font-size: 26px;
	font-family: sans-serif;
}

.main{
	font-size: 35px;
}

#btn-accept{
	font-family: sans-serif;
	margin-top: 15px;
	font-size: 35px;
}

#btn-exit{
	font-family: sans-serif;
	font-size: 30px;
	margin-bottom: 10px;
	margin-left: 10px;
}

.p1{
	padding: 5px;
	border: 1px solid #312a22;
	border-radius:0;
}

.p2{
	padding-left: 10px;
	font-size: 40px;
	//border-radius:0;
}

.container{
	margin-top: 30px;
	border: 1px solid #312a22;
}

#answ{
	width: 400px;
	font-size: 25px;
}

.row{
	margin-top: 10px;
}

.row_pl{
	margin-left: 20px;
}

.col{
	margin-bottom: 10px;
	
}

#border{
	border-right: 1px solid #312a22;
}

.avatar{
	border-radius: 100px;
    border: 2px solid;
}

#player_points{
	
}

.question{
	width: 970px;
	margin-left: 15px;
	margin-right: 15px;
}

#row{
	border: 1px solid #312a22;
}

#time{
	//border: 1px solid #312a22;
	margin-top: 5px;
}

.answers_grid{
	display: grid;
	grid-template-columns:1fr 1fr;
	grid-template-rows:1fr 1fr;
	grid-gap: 15px;
}
</style>