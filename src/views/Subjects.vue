<template>
	<div id="app2" >
		<div class="main">
			<div class="container my-3 py-1 bg-white rounded shadow-sm">
				<div class="col">
					<p class="search">Выберите предмет</p>
					<div class="row">
						<form action="">
							<p><select class="option" size="1" name="Subjects">
							<option value="s1" selected>Математический анализ</option>
							<option value="s2">Дифференциальные уравнения</option>
							<option value="s3">Дискретная математика</option>
							<option value="s4">Комплексный анализ</option>
							</select></p>
						</form>
					</div>
					<p class="search">Выберите тему</p>
					<div class="row">
						<form action="">
							<p><select class="option" size="1" name="Topics">
							<option value="t1" selected>Матрицы</option>
							<option value="t2">Определители</option>
							<option value="t3">Пределы</option>
							<option value="t4">Интегралы</option>
							</select></p>
						</form>
					</div>
					<p class="search">Выберите сложность</p>
					<div class="row">
						<form action="">
							<p><select class="option" size="1" name="Type">
							<option value="type1" selected>Теория</option>
							<option value="type2">Задачи</option>
							</select></p>
						</form>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<button id="btn-back" class="btn btn-outline-danger">Назад</button>
					</div>

					<div class="col">
						<button id="btn-search" class="btn btn-outline-success ">Поиск</button>
					</div>
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