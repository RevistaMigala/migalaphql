const path = require('path')
const slsw = require('serverless-webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    externals: [nodeExternals()],
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    resolve: {
        alias: {
            Data: path.resolve(__dirname, 'src/data/'),
            Errors: path.resolve(__dirname, 'src/errors/'),
            Handlers: path.resolve(__dirname, 'src/handlers/'),
            Scalars: path.resolve(__dirname, 'src/scalars/'),
            Services: path.resolve(__dirname, 'src/services/'),
            Schema: path.resolve(__dirname, 'src/schema/'),
            Src: path.resolve(__dirname, 'src/'),
            Types: path.resolve(__dirname, 'src/types/'),
            Resolvers: path.resolve(__dirname, 'src/resolvers/'),
            Utils: path.resolve(__dirname, 'src/utils/'),
        },
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: __dirname,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }],
            }
        ],
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
    },
}
