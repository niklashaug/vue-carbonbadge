<template>
  <div id="app">
    <CarbonBadge></CarbonBadge>
  </div>
</template>

<script>
import CarbonBadge from "@/components/CarbonBadge"

export default {
  name: 'App',
  components: {
    CarbonBadge
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
