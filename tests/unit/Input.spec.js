import {shallowMount, mount} from "@vue/test-utils";
import {destroyVM} from "../utils";
import Input from "@/Input/Input.vue";

let vm

afterAll(() => {
  destroyVM(vm)
})

describe('Input Test', () => {

  describe('Props Test', () => {
    it('placeholder', () => {
      const text = 'placeholder test'
      vm = shallowMount(Input, {
        propsData: {
          placeholder: text
        }
      })
      expect(vm.find('input').attributes('placeholder')).toBe(text)
    })

    it('disabled', () => {
      vm = shallowMount(Input, {
        propsData: {
          disabled: true
        }
      })
      expect(vm.find('input').attributes('disabled')).toBe('disabled')
    })

    it('value', () => {
      const text = 'value text'
      vm = shallowMount(Input, {
        propsData: {
          value: text
        }
      })
      expect(vm.find('input').element.value).toBe(text)
    })

    it('prompt', () => {
      vm = mount({
        template: `
        <c-input :prompt='promptType'
         error-message="error text" pass-message="success text"
         @blur="promptType = 'pass'"></c-input>
      `,
        components: {
          'c-input': Input
        },
        data(){
          return {
            promptType: 'error'
          }
        }
      })
      expect(vm.text()).toContain('error text')
      vm.find('input').trigger('click')
      vm.find('input').trigger('blur')
      expect(vm.text()).toContain('success text')
    })

    it('size', () => {
      vm = mount(Input, {
        propsData: {
          size: 2
        }
      })
      expect(vm.classes('size-2')).toBe(true)
    })
  })

  describe('Events Test', () => {
    let fn
    beforeEach(() => {
      fn = jest.fn()
    })

    it('click', () => {
      vm = mount({
        template: `
          <c-input @click="onClick"></c-input>
        `,
        methods: {
          onClick: fn
        },
        components: {
          'c-input': Input
        }
      })
      vm.find('input').trigger('click')
      expect(fn).toHaveBeenCalledTimes(1)
    })

    it('change', () => {
      vm = mount({
        template: `
          <c-input @change="onChange"></c-input>
        `,
        methods: {
          onChange: fn
        },
        components: {
          'c-input': Input
        }
      })
      vm.find('input').trigger('change')
      expect(fn).toHaveBeenCalledTimes(1)
    })

    it('blur', () => {
      vm = mount({
        template: `
          <c-input @blur="onBlur"></c-input>
        `,
        methods: {
          onBlur: fn
        },
        components: {
          'c-input': Input
        }
      })
      vm.find('input').trigger('blur')
      expect(fn).toHaveBeenCalledTimes(1)
    })

    it('input', () => {
      vm = mount({
        template: `
          <c-input @input="onInput"></c-input>
        `,
        methods: {
          onInput: fn
        },
        components: {
          'c-input': Input
        }
      })
      vm.find('input').trigger('input')
      expect(fn).toHaveBeenCalledTimes(1)
    })

    it('focus', () => {
      vm = mount({
        template: `
          <c-input @focus="onFocus"></c-input>
        `,
        methods: {
          onFocus : fn
        },
        components: {
          'c-input': Input
        }
      })
      vm.find('input').trigger('focus')
      expect(fn).toHaveBeenCalledTimes(1)
    })
  })
})
