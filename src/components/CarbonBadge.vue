<script setup lang="ts">
  import {onMounted, ref} from "vue";

  const darkModeInitialState = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const darkMode = ref(darkModeInitialState)

  // launch listener
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e =>
      darkMode.value = e.matches
  )

 onMounted(() => {
   /*@ts-ignore*/
   import('website-carbon-badges/b.min')
 })
</script>

<template>
  <div id="wcb" :class="[darkMode ? 'wcb-d' : '', 'carbonbadge']"></div>
</template>

<style scoped>

</style>