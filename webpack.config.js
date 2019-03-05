var path = require('path'); 
module.exports = {
    entry: {
        index: './js/index.js', 
        detail:'./js/chitiet.js',
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'./js/[name].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // {
            //     test:/\.ts$/,
            //     use:['ts-loader']
            // }, 
            {
                test: /\.scss$/,
                loader: ['style-loader','css-loader', 'sass-loader']
            },
            {
                test:/\.html$/,
                use:['html-loader']
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        limit: 10000,
                        name: '../demo/[path][name].[ext]',
                  
                        // limit: 2000000,
                    }
                }]
            }
        ]
    },
    
}