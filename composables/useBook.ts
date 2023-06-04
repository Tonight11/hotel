// move to pinia => bookStore.ts

export const useBook = <T extends Date | null>() => {
    const email = ref('')
    const name = ref('')
    const number = ref('')
    const guest = ref(0)

    const dateStart = ref(new Date())
    const dateEnd = ref<T>(null as T)
    const dayStart = computed(() => dateStart.value.getDate())
    const monthStart = computed(() => dateStart.value.getMonth() + 1)
    const yearStart = computed(() => dateStart.value.getFullYear())
    const dayEnd = ref<number | null>(null)
    const monthEnd = ref<number | null>(null)
    const yearEnd = ref<number | null>(null)

    const updateEndDateValues = (date: Date) => {
        const dateEndRef = toRef(dateEnd, 'value')
        dateEndRef.value = date
        dayEnd.value = dateEndRef.value.getDate()
        monthEnd.value = dateEndRef.value.getMonth() + 1
        yearEnd.value = dateEndRef.value.getFullYear()
    }

    const handleDate = (modelData: [Date, T?]): void => {
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
}
