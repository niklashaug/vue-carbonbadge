<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Vue component for the
    <a href="https://www.websitecarbon.com/badge/" target="_blank"
      >Website Carbon Badge</a
    >.
  </p>
</template>
