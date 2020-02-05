import {mount} from "@vue/test-utils";
import {destroyVM} from "../utils";
import Col from "@/Grid System/Col.vue";
import Row from "@/Grid System/Row.vue";

let vm

afterAll(() => {
  destroyVM(vm)
})

describe('Grid System Test', () => {

  it('col', () => {
    vm = mount({
      template: `
        <div>
          <c-row>
            <c-col span="24" style="height: 30px;" class="target"></c-col>
          </c-row>
        </div>
      `,
      components: {
        'c-row': Row,
        'c-col': Col
      }
    })
    expect(vm.find('.target').classes('col-24')).toBe(true)
  })

  it('offset', () => {
    vm = mount({
      template: `
        <div>
          <c-row class="c-row">
            <c-col span="10" style="height: 30px;"></c-col>
            <c-col span="12" offset="2" style="height: 30px;" class="target"></c-col>
          </c-row>
        </div>
      `,
      components: {
        'c-row': Row,
        'c-col': Col
      }
    })
    expect(vm.find('.target').classes('col-12')).toBe(true)
    expect(vm.find('.target').classes('offset-2')).toBe(true)
  })

  it('gutter', () => {
    vm = mount({
      template: `
        <div>
          <c-row gutter="10" class="target">
            <c-col span="12" style="height: 30px;"><div></div></c-col>
            <c-col span="12" style="height: 30px;"><div></div></c-col>
          </c-row>
        </div>
      `,
      components: {
        'c-row': Row,
        'c-col': Col
      }
    })
    expect(window.getComputedStyle(vm.find('.target').element).marginLeft).toBe('-5px')
    expect(window.getComputedStyle(vm.find('.target').element).marginRight).toBe('-5px')
  })
})
