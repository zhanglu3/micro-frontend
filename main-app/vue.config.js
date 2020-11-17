const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'pages': resolve('./src/pages'),
                '@': resolve('src')
            }
        },
    }
};