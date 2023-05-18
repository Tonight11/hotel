<script setup lang="ts">
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
let isModalOpen = ref(false)

const email = ref('')
const guest = ref(0)

const dateStart = ref(new Date())
const dateEnd = ref()
const dayStart = computed(() => dateStart.value.getDate())
const monthStart = computed(() => dateStart.value.getMonth() + 1)
const yearStart = computed(() => dateStart.value.getFullYear())
const dayEnd = ref(null)
const monthEnd = ref(null)
const yearEnd = ref(null)
const handleDate = (modelData: any): void => {
    dateStart.value = modelData[0]
    if (modelData[1]) {
        dateEnd.value = modelData[1]
        dayEnd.value = dateEnd.value.getDate()
        monthEnd.value = dateEnd.value.getMonth() + 1
        yearEnd.value = dateEnd.value.getFullYear()
    }
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
    <teleport to="body">
        <modals-modal
            v-if="isModalOpen"
            @close="isModalOpen = false"
        ></modals-modal>
    </teleport>
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
                <div class="book-hotel__date">
                    <div class="book-hotel__name">Date</div>

                    <Datepicker
                        :value="dateStart"
                        :range="true"
                        :min-date="dateStart"
                        dark
                        preview-format="false"
                        :enable-time-picker="false"
                        :disabled-dates="disabledDates"
                        no-disabled-range
                        @update:model-value="handleDate"
                    >
                        <template #trigger>
                            <div class="book-hotel__calendar">
                                <IconCalendar />
                            </div>
                        </template>
                    </Datepicker>
                    <div class="book-hotel__selected">
                        <span v-if="dateStart">{{
                            `${dayStart}.${monthStart}.${yearStart}`
                        }}</span>

                        <span v-if="dateEnd">
                            - {{ `${dayEnd}.${monthEnd}.${yearEnd}` }}</span
                        >
                    </div>
                </div>
                <div class="book-hotel__guest">
                    <div class="book-hotel__name">
                        Number of guests <span>(max 4)</span>
                    </div>
                    <q-input
                        v-model.number="guest"
                        class="book-hotel__count"
                        type="number"
                        max="4"
                        min="0"
                        bg-color="transparent"
                        color="yellow"
                        label-color="white"
                        :input-style="{ color: 'white' }"
                    />
                </div>
                <q-btn
                    style="background-color: #ca8647"
                    text-color="white"
                    label="БРОНИРОВАТЬ"
                    class="book-hotel__btn"
                    @click="isModalOpen = true"
                />
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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

    &__date {
        display: flex;
        align-items: center;
        gap: 3rem;
    }

    &__name {
        font-size: 2.4rem;
        text-transform: uppercase;

        & span {
            opacity: 65%;
            font-size: 1.6rem;
            text-transform: lowercase;
        }
    }

    &__selected {
        padding-bottom: 0.3rem;
        border-bottom: 2px solid $secondary-color;
    }

    &__guest {
        display: flex;
        align-items: flex-end;
        gap: 3rem;
    }
    &__count {
        width: 10rem;
    }

    &__btn {
        width: 100%;
        padding: 1.6rem 0;
        font-size: 1.8rem;
    }
}

.q-field--standard .q-field__control::before {
    border-color: $secondary-color;
}

.q-field--standard:hover .q-field__control::before {
    border-color: $secondary-color;
}

.dp__main {
    width: auto;
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
