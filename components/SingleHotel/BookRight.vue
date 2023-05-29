<script setup lang="ts">
import Datepicker from '@vuepic/vue-datepicker'
import { BookRight } from '@/types/book'

const guest = defineModel<number>('guest')
const emit = defineEmits(['selectDate'])

const {
    dateStart,
    dateEnd,
    dayStart,
    dayEnd,
    monthEnd,
    monthStart,
    yearEnd,
    yearStart,
    disabledDates,
} = defineProps<BookRight>()

const selectedDate = (date) => {
    console.log(date)
    emit('selectDate', date)
}
</script>

<template>
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
                @update:model-value="selectedDate"
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
                lazy-rules
                :rules="[
                    (val) => (val !== null && val !== '') || 'Please type',
                    (val) =>
                        (val > 0 && val < 5) ||
                        'Please type biiger than 0 and less than 5',
                ]"
            />
        </div>
        <q-btn
            type="submit"
            style="background-color: #ca8647"
            text-color="white"
            label="БРОНИРОВАТЬ"
            class="book-hotel__btn"
        />
    </div>
</template>

<style lang="scss" scoped></style>
