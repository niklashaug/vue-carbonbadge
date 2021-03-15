<template>
  <div id="wcb" :class="[dark ? 'wcb-d' : '', 'carbonbadge']"></div>
</template>

<script>
export default {
  name: 'CarbonBadge',
  props: {
    dark: {
      type: Boolean,
      default: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  },
  mounted () {
    const script = document.createElement('script')
    script.setAttribute('src', 'https://unpkg.com/website-carbon-badges@1.1.1/b.min.js')
    document.head.appendChild(script)
  }
}
</script>
