function install(Vue) {
  Vue.prototype.$mousePosition = function () {
    let pos = {}
    const mouseMoveHandler = (e) => {
      pos.clientX = e.clientX
      pos.clientY = e.clientY
      pos.offsetX = e.offsetX
      pos.offsetY = e.offsetY
      pos.screenX = e.screenX
      pos.screenY = e.screenY
      pos.scrollX = e.scrollX
      pos.scrollY = e.scrollY
      document.removeEventListener('mousemove', mouseMoveHandler)
    }
    document.addEventListener("mousemove", mouseMoveHandler)
    return pos
  }
}

export default {
  install
}
