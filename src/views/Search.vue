<template>
	<div id="app2">
		<div class="main">
			<p class="search">Поиск соперников...</p>
			<div class="container my-3 py-1 bg-white rounded shadow-sm">
				<div class="row">
					<div class="col">
						<img src="../assets/me.png"" width="100" height="100" alt="me avatar" class="avatar">
					</div>
					<div class="col">
						<img src="../assets/serg.png"" width="100" height="100" alt="serg avatar" class="avatar">
					</div>
					<div class="col">
						<form action="" class="players">2/2</form>
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
	margin-top: 15px;
	font-size: 36px;
}

.search{
	margin-top: 50px;
}
.container{
	border: 1px solid;
	width: 500px;

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
</style>