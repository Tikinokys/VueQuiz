<template>
	<div id="app2" >
		<div class="main">
			<div class="container my-3 py-1 bg-white rounded shadow-sm">
				<div class="col">
					<p class="search">Выберите предмет</p>
					<div class="row">
						<p><select class="option" size="1" name="Subjects" v-model="subject" @change="onValuesChange">
						<option v-bind:value="s.pk" v-for="s in this.subjects">{{s.fields.name}}</option>
						</select></p>
					</div>
					<p class="search">Выберите сложность</p>
					<div class="row">
						<p><select class="option" size="1" name="Difficult" v-model="difficult" @change="onValuesChange">
						<option v-bind:value="d.pk" v-for="d in this.difficults">{{d.fields.name}}</option>
						</select></p>
					</div>
					<p class="search">Выберите тему</p>
					<div class="row">
						<p><select class="option" size="1" name="Topics">
						<option v-bind:value="t.pk" v-for="t in this.topics">{{t.fields.name}}</option>
						</select></p>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<button id="btn-back" class="btn btn-outline-danger" onclick="location.href = '/'">Назад</button>
					</div>

					<div class="col">
						<button id="btn-search" class="btn btn-outline-success ">Поиск</button>
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
export default class QuizSession extends Vue {

  constructor() {
    super();
  }
  public subject = null;
  public difficult = null;

  public mounted(){
  	 this.$store.dispatch('subject');
  	 this.$store.dispatch('difficult');
  }

  public onValuesChange(){
  	if(!!this.subject && !!this.difficult){
  		this.$store.dispatch('topic', {subject:this.subject, difficult:this.difficult});
  	}
  }

  get subjects(){
  	return this.$store.getters.subject;
  }

  get difficults(){
  	return this.$store.getters.difficult;
  }

  get topics(){
  	return this.$store.getters.topic;
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

#h1{
	font-size: 60px;
}

#btn{
	font-family: sans-serif;
	margin-bottom: 15px;
	font-size: 36px;
	width: 400px;
}

.search{

}
.container{
	border: 1px solid;
	width: 520px;
	margin-top: 30px;
}

.avatar{
	border-radius: 100px;
    border: 2px solid;
    margin-bottom: 10px;
    margin-top: 10px;
}

.players{
	margin-top: 33px;
}

#btn-back{
	font-family: sans-serif;
	font-size: 30px;
	margin-bottom: 10px;
	margin-left: 10px;
	margin-right: 150px;
	width: 140px;
}

#btn-search{
	width: 140px;
	font-size: 30px;
}

.option{
	width: 490px;
}
</style>