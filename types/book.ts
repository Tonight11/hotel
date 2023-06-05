export interface BookRight {
    dateStart: Date
    dateEnd?: Date
    dayStart: number
    monthStart: number
    yearStart: number
    dayEnd?: number
    monthEnd?: number
    yearEnd?: number
    disabledDates: Array<Date>
}
