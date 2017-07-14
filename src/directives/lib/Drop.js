export default {
  inserted (el, { arg }) {
    el.__area__ = {
      drop: arg
    }
  }
}
