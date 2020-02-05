import {shallowMount, mount} from "@vue/test-utils";
import Button from '@/Button/Button.vue'
import {destroyVM} from "../utils";

let vm

afterAll(() => {
  destroyVM(vm)
})
describe('Button Test', () => {
  describe('Props Test', () => {
    it('type', () => {
      vm = shallowMount(Button, {
        propsData: {
          type: 'danger'
        }
      })

      expect(vm.classes('type-danger')).toBe(true)
    })

    it('loading', () => {
      vm = shallowMount(Button, {
        propsData: {
          loading: true
        }
      })

      expect(vm.classes('nouse')).toBe(true)
      expect(vm.find('.loading').exists()).toBe(true)
    })

    it('iconPosition', () => {
      vm = shallowMount(Button, {
        propsData: {
          iconPosition: 'left'
        }
      })

      expect(vm.classes('icon-left')).toBe(true)
    })

    it('size', () => {
      vm = shallowMount(Button, {
        propsData: {
          size: 2
        }
      })
      expect(vm.classes('size-2')).toBe(true)
    })

    it('icon', () => {
      vm = shallowMount(Button, {
        propsData: {
          icon: 'phone',
          loading: false
        }
      })
      expect(vm.html()).toContain('c-icon')
    })
  })

  describe('Event Test', () => {
    it('click', () => {
      let fn = jest.fn()

      vm = mount({
        template: `<c-button @click="onClick"></c-button>`,
        methods: {
          onClick() {
            fn()
          }
        },
        components: {
          'c-button': Button
        }
      })
      vm.trigger('click')
      expect(fn).toHaveBeenCalled()
    })
  })
})
