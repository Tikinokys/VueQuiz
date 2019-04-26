<template>
	<div id="app2">
		<div class="main">
			<div class="container">
				<div class="row">
					<div class="col">
						<p class="p1">Очки: 100</p>
					</div>
					<div class="col">
						<p class="p1">60</p>
					</div>
					<div class="col">
						<p class="p1">Вопрос: 1/5</p>
					</div>
				</div>
				<div class="row">
					<div class="question">
						<p>Как называется множество всех действительных чисел, заключенных между данными числами a и b (a < b), при этом сами эти числа не принадлежат рассматриваемому множеству чисел. </p>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<button id="answ">Интервал</button>
					</div>
					<div class="col">
						<button id="answ">Отрезок</button>
					</div>
					<div class="w-100"></div>
					<div class="col">
						<button id="answ">Окрестность</button>
					</div>
					<div class="col">
						<button id="answ">Предел</button>
					</div>
				</div>

					<button id="btn-accept">Ответить</button>
				
				<div class="container">
					<div class="row">
						<div class="col">
							<div class="row">
								<div class="row_pl">
								<img src="../assets/me.png"" width="100" height="100" alt="me avatar" class="avatar">
								</div>
							</div>
							<div class="row">
								<div class="row_pl">
								<p id="player_points">100</p>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="row">
								<div class="row_pl">
								<img src="../assets/serg.png"" width="100" height="100" alt="serg avatar" class="avatar">
								</div>
							</div>
							<div class="row">
								<div class="row_pl">
								<p id="player_points">120</p>
								</div>
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

#btn-accept{
	font-family: serif;
	margin-top: 15px;
	font-size: 40px;
}

#btn-exit{
	font-family: serif;
	font-size: 36px;
	margin-bottom: 10px;
	margin-left: 10px;
}

.p1{
	padding: 5px;
	border: 1px solid #312a22;
	border-radius:0;
}

.container{
	margin-top: 30px;
	border: 1px solid #312a22;
}

#answ{
	width: 400px;
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

.avatar{
	border-radius: 100px;
    border: 2px solid;
}

#player_points{
	padding-left: 20px;
}

.question{
	width: 990px;
}
</style>