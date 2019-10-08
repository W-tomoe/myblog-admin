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
        'components': path.resolve(__dirname, '@/components'),
        'assets': path.resolve(__dirname, '@/assets'),
        'pages': path.resolve(__dirname, '@/pages'),
        'config': path.resolve(__dirname, '@/config'),
        'store': path.resolve(__dirname, '@/store'),
        'utils': path.resolve(__dirname, '@/utils'),
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