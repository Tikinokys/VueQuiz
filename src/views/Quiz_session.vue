<template>
	<div id="app2">
		<div class="main">
			<div class="container my-3 py-1 bg-white rounded shadow-sm">
				<div class="row">
					<div class="col">
						<p class="p1">Очки: 100</p>
					</div>
					<div class="col" >
						<div class="row justify-content-center" id="time">
							<img src="../assets/time.png"" width="50" height="50" alt="time quiz" class="time">
							<p class="p2">28</p>
						</div>
					</div>
					<div class="col">
						<p class="p1">Вопрос: 3/5</p>
					</div>
				</div>
				<div class="row">
					<div class="question">
						<p>Как называется множество всех действительных чисел, заключенных между данными числами a и b (a < b), при этом сами эти числа не принадлежат рассматриваемому множеству чисел. </p>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<button id="answ" class="btn btn-outline-secondary btn-lg">Интервал</button>
					</div>
					<div class="col">
						<button id="answ" class="btn btn-outline-secondary btn-lg">Отрезок</button>
					</div>
					<div class="w-100"></div>
					<div class="col">
						<button id="answ" class="btn btn-outline-secondary btn-lg">Окрестность</button>
					</div>
					<div class="col">
						<button id="answ" class="btn btn-outline-secondary btn-lg">Предел</button>
					</div>
				</div>

					<button id="btn-accept" class="btn btn-success">Ответить</button>
				
				<div class="container">
					<div class="row ">
						<div class="col " id="border">
							<div class="row justify-content-center">
								<div class="row_pl ">
								<img src="../assets/me.png"" width="100" height="100" alt="me avatar" class="avatar">
								</div>
							</div>
							<div class="row justify-content-center">
								<div class="row_pl">
								<p id="player_points">100</p>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="row justify-content-center">
								<div class="row_pl">
								<img src="../assets/serg.png"" width="100" height="100" alt="serg avatar" class="avatar">
								</div>
							</div>
							<div class="row justify-content-center">
								<div class="row_pl">
								<p id="player_points">120</p>
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
	width: 990px;
}

#row{
	border: 1px solid #312a22;
}

#time{
	//border: 1px solid #312a22;
	margin-top: 5px;
}
</style>