module.exports = {
    productionSourceMap: false,
    css: {
        extract: false
    },
    configureWebpack: {
        optimization: {
            minimize: true
        }
    }
}
