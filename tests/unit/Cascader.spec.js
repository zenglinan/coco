import {shallowMount, mount} from "@vue/test-utils";
import {destroyVM} from "../utils";
import Cascader from "@/Cascader/Cascader.vue";
import CascaderItem from "@/Cascader/CascaderItem.vue";

let vm

afterAll(() => {
  destroyVM(vm)
})

describe('Cascader Test', () => {

  describe('Prop Test', () => {
    it('selected', () => {

    })
  })

})
