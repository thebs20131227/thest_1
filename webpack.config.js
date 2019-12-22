const path=require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin=require('vue-loader/lib/plugin')

module.exports={
    entry:{
        path:path.join(__dirname,'./src/main.js'),
        
    },
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    mode:'development',
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.vue$/,loader:'vue-loader'},
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=1734051&name=[hash:8]-[name].[ext]' },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }
            
        ]
    },
   
}