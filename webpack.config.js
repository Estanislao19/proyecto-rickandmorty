const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');//va a copiar nuestros estilos hacia la carpeta dist

module.exports = {
    entry:'./src/index.js', //codigo inicial
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'main.js'//el copilado se va a llamar main.js
    },
    resolve: {
        extensions:['.js'],
    },
    module:{
        rules: [
            {
               test: /\.js?$/,
               exclude:/node_module/,
               use: {
                loader:'babel-loader',
               } 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject:true,
                template: './public/index.html',
                filename: './index.html'
            }
        ),
        new CopyWebpackPlugin({
            patterns: [{ from: './src/styles/styles.css',
            to: '' }],
          })
    ]
}