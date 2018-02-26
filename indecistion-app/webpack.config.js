//entry -> output

const path = require('path');

module.exports = {
    mode:'development',
    watch: true,
    entry:'./src/app.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    }
};