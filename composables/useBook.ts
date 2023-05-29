export const useBook = () => {
    const email = ref('')
    const name = ref('')
    const number = ref('')
    const guest = ref(0)

    const dateStart = ref(new Date())
    const dateEnd = ref()
    const dayStart = computed(() => dateStart.value.getDate())
    const monthStart = computed(() => dateStart.value.getMonth() + 1)
    const yearStart = computed(() => dateStart.value.getFullYear())
    const dayEnd = ref(null)
    const monthEnd = ref(null)
    const yearEnd = ref(null)
    const handleDate = (modelData: Array<Date>): void => {
        console.log(modelData)
        dateStart.value = modelData[0]
        if (modelData[1]) {
            dateEnd.value = modelData[1]
            dayEnd.value = dateEnd.value.getDate()
            monthEnd.value = dateEnd.value.getMonth() + 1
            yearEnd.value = dateEnd.value.getFullYear()
        }
    }
    const disabledDates = computed((dates) => {
        const today = new Date()

        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)

        const afterTomorrow = new Date(tomorrow)
        afterTomorrow.setDate(tomorrow.getDate() + 1)

        dates = [tomorrow, afterTomorrow]

        return dates
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
