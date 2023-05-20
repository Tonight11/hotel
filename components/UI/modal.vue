<template>
    <div class="modal">
        <q-card class="my-card text-white card">
            <img
                src="@/assets/imgs/closeBtn.svg"
                class="img"
                @click="$emit('close')"
            />
            <q-card-section>
                <div class="small-text">Имя</div>
                <div class="big-text">{{ name }}</div>
            </q-card-section>
            <q-card-section>
                <div class="small-text">Почта</div>
                <div class="big-text">{{ mail }}</div>
            </q-card-section>
            <q-card-section>
                <div class="small-text">Номер</div>
                <div class="big-text">{{ number }}</div>
            </q-card-section>
            <q-card-section>
                <div class="small-text">Дата</div>
                <div class="big-text">{{ date }}</div>
            </q-card-section>
            <q-card-section>
                <div class="small-text">Кол-во гостей</div>
                <div class="big-text">{{ guestsSum }}</div>
            </q-card-section>
            <q-checkbox
                v-model="personalData"
                dark
                label="Я даю согласие на обработку моих персональных данных"
                color="red"
                class="checkbox"
            />
            <div class="modal__payment-result">
                <p class="big-text">Итоговая цена:</p>
                <p class="big-text">{{ payment }} руб</p>
            </div>
            <q-btn
                style="background-color: #ca8647"
                text-color="white"
                label="БРОНИРОВАТЬ"
                class="Button"
            />
        </q-card>
    </div>
</template>

<script setup lang="ts">
// refactor to TS and move to composables
let personalData = ref(true)
const emits = defineEmits(['close'])
const props = defineProps({
    name: {
        required: true,
        type: String,
        default: 'Саня',
    },
    mail: {
        required: true,
        type: String,
        default: 'random@gmail.com',
    },
    number: {
        required: false,
        type: String,
        default: '+7 777 777 77 77',
    },
    date: {
        required: true,
        type: String,
        default: '01.12.2023 - 05.12.2023',
    },
    guestsSum: {
        required: true,
        type: Number,
        default: 4,
    },
    payment: {
        required: true,
        type: Number,
        default: 50000,
    },
})
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/modalComp.scss);
</style>
