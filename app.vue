<template>
	<div>
		<NuxtLoadingIndicator
			color="repeating-linear-gradient(to right,rgb(144, 170, 255) 0%,rgb(72, 115, 255) 100%)"
		/>
		<NuxtLayout>
			<q-btn
				color="red"
				icon="mail"
				icon-right="send"
				label="On Left and Right"
			/>
			<q-btn flat style="color: #ff0080" label="Fuchsia Flat" />
			<q-btn style="background: goldenrod; color: white" label="Goldenrod" />
			<q-btn outline style="color: goldenrod" label="Goldenrod" />
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
