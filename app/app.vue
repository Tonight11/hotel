<script setup>
	useHead({
		link: [
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap',
			},
			{
				rel: 'preconnect',
				href: 'https://fonts.gstatic.com',
			},
			{
				rel: 'preconnect',
				href: 'https://fonts.googleapis.com',
			},
		],
	});
</script>

<template>
	<div>
		<div class="wrapper">
			<NuxtLoadingIndicator
				color="repeating-linear-gradient(to right,rgb(144, 170, 255) 0%,rgb(72, 115, 255) 100%)"
			/>
			<NuxtLayout>
				<NuxtLink to="/">Home</NuxtLink>
				<NuxtLink to="/hotel">Hotel</NuxtLink>
				<NuxtLink to="/hotel/123">SHotel</NuxtLink>
				<NuxtPage />
			</NuxtLayout>
		</div>
	</div>
</template>

<style lang="scss">
	@import '@/assets/styles/style.scss';

	.page-enter-active,
	.page-leave-active {
		transition: all 0.3s;
	}
	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		filter: blur(0.5rem);
	}
</style>
