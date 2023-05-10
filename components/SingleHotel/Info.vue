<script setup lang="ts">
const info = ref([
    {
        id: 1,
        title: 'Этажность',
        text: '1',
    },
    {
        id: 2,
        title: 'Комнат',
        text: '49',
    },
    {
        id: 3,
        title: 'Парковочных мест',
        text: '20',
    },
])
</script>

<template>
    <div class="single-hotel__info">
        <q-card v-for="item in info" :key="item.id" class="single-hotel__card">
            <q-card-section>
                <div class="text-h4">{{ item.title }}</div>
            </q-card-section>

            <q-separator dark inset />

            <q-card-section>
                <div class="text-h2">{{ item.text }}</div>
            </q-card-section>
        </q-card>
    </div>
</template>

<style lang="scss" scoped></style>
