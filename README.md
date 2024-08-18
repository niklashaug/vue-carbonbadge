# vue-carbonbadge
Vue component for the [Website Carbon badge](https://www.websitecarbon.com/badge/).

## Installation
**via npm**
```shell
npm install vue-carbonbadge
```

**or via yarn**
```shell
yarn add vue-carbonbadge
```

## Usage
### Vue 3
```vue
<template>
    <CarbonBadge />
</template>

<script setup>
    import CarbonBadge from "vue-carbonbadge";
</script>
```

### Nuxt 3
In Nuxt, you need to wrap the component in a `<ClientOnly>` component to prevent the badge from being rendered on the server:
```vue
<template>
  <ClientOnly>
    <CarbonBadge/>
  </ClientOnly>
</template>

<script setup>
  import CarbonBadge from "vue-carbonbadge"
</script>
```

## Customization
**Toggling dark mode**
```html
<CarbonBadge :dark="true" />
```

If the `dark` property is not specified, dark mode is detected as per user system preferences.
