<script setup lang="ts"></script>

<template>
	<div class="single-hotel">
		<div class="single-hotel__first">
			<title></title>
			<nuxt-img class="single-hotel__img" src="/hello.jpeg" />
		</div>
		<div class="container">
			<div class="single-hotel__inner">
				<single-hotel-adress />
				<single-hotel-info />
				<single-hotel-about />
				<single-hotel-place />
				<single-hotel-book />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
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
			display: flex;
			gap: 2.5rem;
			justify-content: center;
			margin-bottom: 12rem;

			@media screen and (max-width: 700px) {
				flex-direction: column;
			}
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

			@media screen and (max-width: 1180px) {
				flex-direction: column;
			}

			& img {
				max-height: 465px;
			}
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
