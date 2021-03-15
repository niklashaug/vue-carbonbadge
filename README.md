# vue-carbonbadge
Vue component for the [Website Carbon badge](https://www.websitecarbon.com/badge/).

## Installation
```shell
npm install vue-carbonbadge
yarn add vue-carbonbadge
```

## How To Use
**1. Import the package into your main.js file**
```js
import CarbonBadge from 'vue-carbonbadge'
Vue.use(CarbonBadge)
```
**2. Use it in your HTML markup**
```html
<footer>
    <CarbonBadge></CarbonBadge>
</footer>
```
**3. You're done! 🎉**

## Customization
**Toggling dark mode**
```html
<CarbonBadge :dark="true"></CarbonBadge>
```

If the `dark` property is not specified, dark mode is detected as per user system preferences.
