import { useBookStore } from '../store/bookStore'
import { createPinia, setActivePinia } from 'pinia'
import { expect, beforeEach, describe, it } from 'vitest'

describe('useBook', () => {
    beforeEach(() => {
        const pinia = createPinia()
        setActivePinia(pinia)
    })

    it('should initialize store with default values', () => {
        const store = useBookStore()

        expect(store.email).toBe('')
        expect(store.name).toBe('')
        expect(store.number).toBe('')
        expect(store.guest).toBe(0)
        expect(store.dateStart).toBeInstanceOf(Date)
        expect(store.dateEnd).toBeUndefined()
        expect(store.dayStart).toBe(new Date().getDate())
        expect(store.monthStart).toBe(new Date().getMonth() + 1)
        expect(store.yearStart).toBe(new Date().getFullYear())
        expect(store.dayEnd).toBeUndefined()
        expect(store.monthEnd).toBeUndefined()
        expect(store.yearEnd).toBeUndefined()
        expect(store.disabledDates).toHaveLength(2)
    })

    it('update Date correctly', () => {
        const store = useBookStore()

        const modelData: [Date, Date?] = [
            new Date('2023-06-01'),
            new Date('2023-06-05'),
        ]

        store.handleDate(modelData)

        expect(store.dateStart).toEqual(modelData[0])
        expect(store.dayStart).toBe(modelData[0].getDate())
        expect(store.monthStart).toBe(modelData[0].getMonth() + 1)
        expect(store.yearStart).toBe(modelData[0].getFullYear())
        if (modelData[1]) {
            expect(store.dateEnd).toEqual(modelData[1])
            expect(store.dayEnd).toBe(modelData[1].getDate())
            expect(store.monthEnd).toBe(modelData[1].getMonth() + 1)
            expect(store.yearEnd).toBe(modelData[1]?.getFullYear())
        } else {
            expect(store.dateEnd).toBeUndefined()
            expect(store.dayEnd).toBeUndefined()
            expect(store.monthEnd).toBeUndefined()
            expect(store.yearEnd).toBeUndefined()
        }
    })
})
