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
```vue
<template>
    <CarbonBadge />
</template>

<script setup>
    import CarbonBadge from "vue-carbonbadge";
</script>
```

## Customization
**Toggling dark mode**
```html
<CarbonBadge :dark="true" />
```

If the `dark` property is not specified, dark mode is detected as per user system preferences.
