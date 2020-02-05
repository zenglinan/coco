
export function destroyVM(vm) {
  vm && vm.$destroy && vm.$destroy()
}
