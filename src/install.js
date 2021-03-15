import CarbonBadgeComponent from './components/CarbonBadge.vue'

const CarbonBadge = {
    install(Vue) {
        Vue.component('CarbonBadge', CarbonBadgeComponent);
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(CarbonBadge)
}

export default CarbonBadge
