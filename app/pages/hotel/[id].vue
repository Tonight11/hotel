<script setup lang="ts"></script>

<template>
	<div class="single-hotel">
		<div class="single-hotel__first">
			<title></title>
			<nuxt-img class="single-hotel__img" src="/hello.jpeg" />
		</div>
		<div class="container">
			<div class="single-hotel__inner">
				<div class="single-hotel__adress">
					<div class="single-hotel__adress-text">Расположение</div>
					<div class="single-hotel__adress-name">
						г. Москва, ул. Л.Толстого 100
					</div>
				</div>
				<div class="single-hotel__info">
					<q-card class="single-hotel__card" v-for="item in 3">
						<q-card-section>
							<div class="text-h4">Этажность</div>
						</q-card-section>

						<q-separator dark inset />

						<q-card-section>
							<div class="text-h2">1</div>
						</q-card-section>
					</q-card>
				</div>
				<div class="single-hotel__about">
					<nuxt-img sizes="sm:100vw lg:70vw" height="465" src="/hello.jpeg" />
					<div class="single-hotel__text">
						Жилой комплекс "Sky Dive" расположен в центре Дубая. Это лучшее
						место для тех, кто ищет баланс между работой и отдыхом. Уникальный
						архитектурный стиль жилого комплекса "Sky Dive" придаст новую
						достопримечательность нашему городу.
					</div>
				</div>
				<div class="single-hotel__place">
					<title-section>Расположение</title-section>
				</div>
				<div class="single-hotel__book">
					<title-section>Бронировать</title-section>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.single-hotel {
		&__inner {
		}

		&__first {
		}

		&__img {
			width: 100%;
		}
		&__adress {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			margin-top: 6rem;
			margin-bottom: 12rem;
		}

		&__adress-text {
			margin-bottom: 2rem;
			font-size: 2.4rem;
		}

		&__adress-name {
			font-size: 3.2rem;
		}

		&__info {
			background-color: $light-yellow-color;
			width: 90rem;
			display: flex;
			gap: 2.5rem;
			justify-content: center;
			margin-bottom: 12rem;
		}

		&__card {
			border-radius: 0;
			background-color: transparent;
			flex: 0 1 33.333%;
			border: 3px solid rgba($color: $light-yellow-color, $alpha: 0.65);
		}

		&__about {
			display: flex;
			gap: 6rem;
			margin-bottom: 7.3rem;
		}

		&__about-img {
		}

		&__text {
			font-size: 3.2rem;
		}
		&__place {
			margin-bottom: 7rem;
		}
		&__book {
			margin-bottom: 16rem;
		}
	}
</style>
