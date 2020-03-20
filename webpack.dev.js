const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin")

module.exports={
    mode:'development',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 3000
      },
    module:{
        rules:[
            {
                test:/\.html$/,
                use:['html-loader']
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:['babel-loader']
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  'file-loader']
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'src','index.html')
        })
    ]
}