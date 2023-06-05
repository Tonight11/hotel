<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import { useBookStore } from '~/store/bookStore'
import { storeToRefs } from 'pinia'

const isModalOpen = ref(false)
const { handleDate } = useBookStore()
const {
    email,
    name,
    number,
    guest,
    dayStart,
    dayEnd,
    monthStart,
    monthEnd,
    yearStart,
    yearEnd,
    dateStart,
    dateEnd,
    disabledDates,
} = storeToRefs(useBookStore())

const onSubmit = () => {
    isModalOpen.value = true
}
</script>

<template>
    <teleport to="body">
        <LazyUIModal
            v-if="isModalOpen"
            :name="name"
            :mail="email"
            :number="number"
            :date="`${dayStart}.${monthStart}.${yearStart}${dayEnd ? '-' : ''}${
                dayEnd || ''
            }${dayEnd ? '.' : ''}${monthEnd || ''}${dayEnd ? '.' : ''}${
                yearEnd || ''
            }`"
            :guests-sum="guest"
            @close="isModalOpen = false"
        ></LazyUIModal>
    </teleport>
    <div class="single-hotel__book book-hotel">
        <UISectionTitle>
            <template #lato>
                <p>Бронировать</p>
            </template>
            <template #cursive><p>book</p></template>
        </UISectionTitle>
        <q-form action="#" class="book-hotel__form" @submit="onSubmit">
            <SingleHotelBookLeft
                v-model:email="email"
                v-model:name="name"
                v-model:number="number"
            />
            <SingleHotelBookRight
                v-model:guest="guest"
                :date-start="dateStart"
                :date-end="dateEnd"
                :day-start="dayStart"
                :month-start="monthStart"
                :year-start="yearStart"
                :day-end="dayEnd"
                :month-end="monthEnd"
                :year-end="yearEnd"
                :disabled-dates="disabledDates"
                @select-date="handleDate"
            />
        </q-form>
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
