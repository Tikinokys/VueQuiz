<template>
	<div id="app2">
		<h1 id="h1">Итоги викторины</h1>
		<div class="main">
			<div class="container">
				<div class="col">
					<p class="points">Очки</p>
				</div>
				<div class="row">
					<div class="col-6 col-md-4">
						<p class="winner"><b>Победитель!</b></p>
					</div>
					<div class="col-12 col-md-8">
						<div class="row">
							<div class="col">
								<img src="../assets/serg.png"" width="130" height="130" alt="serg avatar" class="avatar">
							</div>
							<div class="col">
								<form action="" class="nick">Frostbolt</form>
							</div>
							<div class="col">
								<p id="player_points">1000</p>
							</div>
						</div>
						<div class="row">
							<div class="col">
								<img src="../assets/me.png"" width="130" height="130" alt="me avatar" class="avatar">
							</div>
							<div class="col">
								<form action="" class="nick">Tikinokys</form>
							</div>
							<div class="col">
								<p id="player_points">900</p>
							</div>
						</div>	
					</div>
				</div>
				<div class="row">
					<button id="btn-exit">Выйти</button>
				</div>
			</div>

		</div>
	</div>
</template>



<style lang="scss" scoped>

#app2 {
  font-size: 26px;
  font-family: serif;
}

.main{
	font-size: 35px;
}

#h1{
	font-size: 60px;
}

#btn{
	font-family: serif;
	margin-top: 15px;
	font-size: 36px;
}

.container{
	margin-top: 30px;
	border: 1px solid;
}

#btn-exit{
	font-family: serif;
	font-size: 36px;
	margin-left: 19px;
}

.avatar{
	border-radius: 100px;
    border: 2px solid;
}

.nick{
	margin-top: 30px;
}

.points{
	text-align: right;
	margin-right: 42px;
	margin-top: 15px;
}

#player_points{
	margin-top: 30px;
}
.row{
	margin-bottom: 20px;
}

.winner{
	margin-top: 30px;
}
</style>