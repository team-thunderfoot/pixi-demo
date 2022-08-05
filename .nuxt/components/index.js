export { default as VCol } from '../../components/base/foundation/VCol.vue'
export { default as VContainer } from '../../components/base/foundation/VContainer.vue'
export { default as VRow } from '../../components/base/foundation/VRow.vue'
export { default as VSection } from '../../components/base/components/VSection.vue'
export { default as Footer } from '../../components/footer/Footer.vue'
export { default as HeroA } from '../../components/hero/heroA.vue'
export { default as Preloader } from '../../components/preloader/Preloader.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
