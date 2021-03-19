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
  async mounted () {
    await import('website-carbon-badges/b.min')
  }
}
</script>
