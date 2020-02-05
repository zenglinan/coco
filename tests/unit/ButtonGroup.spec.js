import {mount} from "@vue/test-utils";
import {destroyVM} from "../utils";
import ButtonGroup from "@/Button/Button-Group.vue";
import Button from '@/Button/Button.vue'

let vm

afterAll(() => {
  destroyVM(vm)
})

describe('ButtonGroup Test', () => {
  it('snapshot', () => {

    vm = mount({
      template: `
        <c-button-group>
          <c-button icon="i-left" type="default">上一页</c-button>
          <c-button type="default">更多</c-button>
          <c-button icon="i-right" icon-position="right  type="default"">下一页</c-button>
        </c-button-group>
        `,
      components: {
        'c-button-group': ButtonGroup,
        'c-button': Button
      }
    })

    expect(vm).toMatchSnapshot()
  })
})
