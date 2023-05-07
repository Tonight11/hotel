<script setup lang="ts"></script>

<template>
	<q-card class="my-card">
		<img src="https://cdn.quasar.dev/img/mountains.jpg" />

		<q-card-section>
			<div class="hello">Our Changing Planet</div>
			<div class="title">by John Doe</div>
		</q-card-section>

		<q-card-section class="q-pt-none">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
			sapiente eligendi sit ea excepturi, quasi consequuntur, nulla eum ex
			commodi fugiat libero ad. Delectus dolor corrupti dolorum, impedit
			suscipit fugit!
		</q-card-section>
	</q-card>
</template>

<style lang="scss" scoped>
	.hello {
		font-size: 1.2rem;
	}
	.my-card {
		max-width: 25rem;
		width: 100%;
	}
</style>
