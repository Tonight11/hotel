<script setup lang="ts">
const coordinates = [55, 33]
const controls = ['fullscreenControl']
const visible = ref(false)
setTimeout(() => {
    visible.value = true
}, 1000)
</script>

<template>
    <div class="single-hotel__place">
        <UISectionTitle>
            <template #lato>
                <p>Расположение</p>
            </template>
            <template #cursive><p>location</p></template>
        </UISectionTitle>
        <ClientOnly>
            <YandexMap
                v-if="visible"
                :coordinates="coordinates"
                :controls="controls"
            >
                <YandexMarker
                    :coordinates="coordinates"
                    :marker-id="123"
                ></YandexMarker>
            </YandexMap>
            <div v-else class="load">Loading map........</div>
        </ClientOnly>
    </div>
</template>

<style lang="scss">
.single-hotel__place {
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin-bottom: 7rem;
}
.yandex-container {
    min-height: 500px;
    flex: 1;
}

.load {
    min-height: 500px;
    flex: 1;
    background-color: $secondary-color;
}
</style>
