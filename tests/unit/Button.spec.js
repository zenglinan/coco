import { shallowMount } from "@vue/test-utils";
import Button from '../../src/Button/Button.vue'

describe('Button.vue', () => {
  describe('props', () => {
    it('type', () => {
      const wrapper = shallowMount(Button, {
        propsData: {
          type: 'danger'
        }
      })
      expect(wrapper.classes('type-danger')).toBe(true)
    })
  })
})
