<template>
	<div id="app2">
		<div class="main">
			<div class="container">
				<div class="row">
						<div class="col-5 col-md-3">
					        <img src="../assets/me.png"" width="180" height="180" alt="me avatar" class="avatar">
					    </div>
					    <div class="col-13 col-md-9">
					        <form action="" class="nick">Tikinokys</form>
					    </div>
				</div>
				<div class="col">
					<div class="row">
						<hr align="left" width="1000" size="1" color="black" />
					</div>
					<div class="row">
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



<style lang="scss" scoped>

#app2 {
	font-size: 26px;
	font-family: serif;
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

.nick{
	margin-top: 60px;
	font-size: 46px;
	text-align: left;
}

.container{
	margin-top: 30px;
	border: 1px solid #312a22;
}


</style>