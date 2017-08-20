export default {
  inserted (el, { arg, modifiers }) {
    el.__area__ = {
      drop: {
        mode: arg,
        modifiers
      }
    }
  }
}
