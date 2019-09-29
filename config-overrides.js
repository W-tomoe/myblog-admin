const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias
} = require('customize-cra');
const path = require('path');

module.exports = override(
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, 'src/components'),
        assets: path.resolve(__dirname, 'src/assets'),
        pages: path.resolve(__dirname, 'src/pages'),
        config: path.resolve(__dirname, 'src/config'),
        store: path.resolve(__dirname, 'src/store'),
        utils: path.resolve(__dirname, 'src/utils'),
    }),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {},
    }),
);