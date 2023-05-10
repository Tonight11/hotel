<script setup lang="ts">
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
const email = ref('')

const date = ref(new Date())
const handleDate = (modelData: any): void => {
    date.value = modelData
}
const disabledDates = computed(() => {
    const today = new Date()

    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const afterTomorrow = new Date(tomorrow)
    afterTomorrow.setDate(tomorrow.getDate() + 1)

    return [tomorrow, afterTomorrow]
})
</script>

<template>
    <div class="single-hotel__book book-hotel">
        <titles-section-title>
            <template #lato>
                <p>Бронировать</p>
            </template>
            <template #cursive><p>book</p></template>
        </titles-section-title>
        <form action="#" class="book-hotel__form" @submit.prevent="">
            <div class="book-hotel__right">
                <q-input
                    v-model="email"
                    outlined
                    label="Email"
                    bg-color="transparent"
                    color="yellow"
                    label-color="white"
                    :input-style="{ color: 'white' }"
                />
                <q-input
                    v-model="email"
                    outlined
                    label="Name"
                    bg-color="transparent"
                    color="yellow"
                    label-color="white"
                    :input-style="{ color: 'white' }"
                />
                <q-input
                    v-model="email"
                    outlined
                    label="Number"
                    bg-color="transparent"
                    color="yellow"
                    label-color="white"
                    :input-style="{ color: 'white' }"
                />
            </div>
            <div class="book-hotel__left">
                <Datepicker
                    :value="date"
                    :range="true"
                    :min-date="date"
                    dark
                    preview-format="false"
                    :enable-time-picker="false"
                    :disabled-dates="disabledDates"
                    no-disabled-range
                    @update:modelValue="handleDate"
                >
                    <template #trigger>
                        <div class="book-hotel__calendar">
                            <IconCalendar />
                        </div>
                    </template>
                </Datepicker>
                {{ date }}
            </div>
        </form>
    </div>
</template>

<style lang="scss">
.q-field--outlined input {
    font-size: 1.8rem;
}
.q-field--outlined .q-field__control:before {
    border-color: $secondary-color;
}
.q-field--outlined:hover .q-field__control:before {
    border-color: $light-yellow-color;
}

.book-hotel {
    margin-top: 20rem;
    &__form {
        display: flex;
        gap: 10rem;
        justify-content: space-between;
    }

    &__right {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        flex: 50%;
    }

    &__left {
        flex: 50%;
    }

    &__calendar {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background: $secondary-color;
    }
}

.dp__menu {
    padding: 1rem 2rem;
}

.dp__calendar {
    font-size: 1.8rem;
}
.dp__calendar_header_item {
    font-weight: 700;
}
.dp__month_year_select {
    font-size: 1.8rem;
}
.dp__overlay {
    font-size: 1.5rem;
}
.dp__input_icons {
    width: 2.5rem;
    height: 2.5rem;
}
.dp__action_row {
    font-size: 1.8rem;
}
.dp__selection_preview {
    font-size: 1.6rem;
}
.dp__today {
    border: 1px solid $secondary-color;
}
.dp__range_end,
.dp__range_start,
.dp__active_date {
    background: $secondary-color;
}
</style>
