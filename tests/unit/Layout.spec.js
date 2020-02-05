import {mount} from "@vue/test-utils";
import {destroyVM} from "../utils";
import Content from "@/Layout/Content.vue";
import Footer from "@/Layout/Footer.vue";
import Header from "@/Layout/Header.vue";
import Sidebar from "@/Layout/Sidebar.vue";
import Wrapper from "@/Layout/Wrapper.vue";

let vm

afterAll(() => {
  destroyVM(vm)
})

describe('Layout Test', () => {
  it('上中下布局', () => {
    vm = mount({
      template: `
        <c-wrapper style="margin-bottom: 30px;">
          <c-header style="height: 60px;">Header</c-header>
          <c-content style="height: 200px;">Content</c-content>
          <c-footer style="height: 60px;">Footer</c-footer>
        </c-wrapper>
      `,
      components: {
        'c-content': Content,
        'c-header': Header,
        'c-sidebar': Sidebar,
        'c-wrapper': Wrapper,
        'c-footer': Footer
      }
    })
    expect(vm).toMatchSnapshot()
  })

  it('上中下布局 + 侧边栏', () => {
    vm = mount({
      template: `
        <c-wrapper style="margin-bottom: 30px;">
          <c-header style="height: 60px;">Header</c-header>
          <c-wrapper>
            <c-sidebar style="width: 100px; height: 200px">Slider</c-sidebar>
            <c-content style="width: 200px; height: 200px">Content</c-content>
          </c-wrapper>
          <c-footer style="height: 60px;">Footer</c-footer>
        </c-wrapper>
      `,
      components: {
        'c-content': Content,
        'c-header': Header,
        'c-sidebar': Sidebar,
        'c-wrapper': Wrapper,
        'c-footer': Footer
      }
    })
    expect(vm).toMatchSnapshot()
  })

  it('左右布局', () => {
    vm = mount({
      template: `
        <c-wrapper style="margin-bottom: 30px;">
          <c-sidebar style="width: 160px; height:320px">Slider</c-sidebar>
          <c-wrapper>
            <c-header style="height: 60px;">Header</c-header>
            <c-content style="height: 200px;">Content</c-content>
            <c-footer style="height: 60px;">Footer</c-footer>
          </c-wrapper>
        </c-wrapper>
      `,
      components: {
        'c-content': Content,
        'c-header': Header,
        'c-sidebar': Sidebar,
        'c-wrapper': Wrapper,
        'c-footer': Footer
      }
    })
    expect(vm).toMatchSnapshot()
  })
})
