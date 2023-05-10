import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import HotelAbout from '../components/SingleHotel/About.vue'

describe('HotelAbout', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(HotelAbout)
        expect(wrapper.vm).toBeTruthy()
    })
})
