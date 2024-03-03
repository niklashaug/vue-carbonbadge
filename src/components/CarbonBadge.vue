<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    dark?: boolean;
  }>(),
  {
    dark: undefined,
  },
);

import { onMounted, ref } from "vue";

const darkColorSchemaMediaQuery = window?.matchMedia(
  "(prefers-color-scheme: dark)",
);
const userDefinedDarkProperty = props.dark !== undefined;
const darkMode = ref(
  userDefinedDarkProperty ? props.dark : darkColorSchemaMediaQuery?.matches,
);

// launch listener
if (!userDefinedDarkProperty && darkColorSchemaMediaQuery) {
  darkColorSchemaMediaQuery?.addEventListener(
    "change",
    (e) => (darkMode.value = e.matches),
  );
}

onMounted(() => {
  /*@ts-ignore*/
  import("website-carbon-badges/b.min");
});
</script>

<template>
  <div id="wcb" :class="[darkMode ? 'wcb-d' : '', 'carbonbadge']"></div>
</template>
