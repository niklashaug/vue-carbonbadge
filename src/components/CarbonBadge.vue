<template>
  <div id="wcb" :class="[darkMode ? 'wcb-d' : '', 'carbonbadge']"></div>
</template>

<script>
export default {
  name: 'CarbonBadge',
  data () {
    return {
      darkMode: this.dark
    }
  },
  props: ['dark'],
  async mounted () {
    await import(/* webpackMode: "eager" */ 'website-carbon-badges/b.min')

    if(this.dark === undefined) {
      // set dark mode automatically
      this.darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

      // launch listener
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e =>
        this.darkMode = e.matches
      )
    }
  }
}
</script>
