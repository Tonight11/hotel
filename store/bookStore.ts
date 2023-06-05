import { defineStore } from 'pinia'

export const useBookStore = defineStore('bookStore', () => {
    const email = ref('')
    const name = ref('')
    const number = ref('')
    const guest = ref(0)

    const dateStart = ref(new Date())
    const dateEnd = ref<Date>()
    const dayStart = computed(() => dateStart.value.getDate())
    const monthStart = computed(() => dateStart.value.getMonth() + 1)
    const yearStart = computed(() => dateStart.value.getFullYear())
    const dayEnd = ref<number>()
    const monthEnd = ref<number>()
    const yearEnd = ref<number>()

    const updateEndDateValues = (date: Date) => {
        dateEnd.value = date
        dayEnd.value = dateEnd.value.getDate()
        monthEnd.value = dateEnd.value.getMonth() + 1
        yearEnd.value = dateEnd.value.getFullYear()
    }

    const handleDate = (modelData: [Date, Date?]): void => {
        dateStart.value = modelData[0]
        if (modelData[1]) {
            updateEndDateValues(modelData[1])
        }
    }
    const disabledDates = computed((dates: Date[]): Date[] => {
        const today = new Date()

        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)

        const afterTomorrow = new Date(tomorrow)
        afterTomorrow.setDate(tomorrow.getDate() + 1)

        return [tomorrow, afterTomorrow]
    })

    return {
        email,
        name,
        number,
        guest,
        dayStart,
        monthStart,
        yearStart,
        dayEnd,
        monthEnd,
        yearEnd,
        dateStart,
        dateEnd,
        disabledDates,
        handleDate,
    }
})
