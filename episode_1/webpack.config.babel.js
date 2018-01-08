import path from 'path';

const isDebug = !process.argv.includes('production');

const serverConfig = {
    context: path.resolve(__dirname, '.'),
    name: 'server', 
    target: 'node',
    bail: !isDebug,
    cache: isDebug,
    entry: {
        server: ['./src/server.js']
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'server.js'
    },
    node: {
        __filename: true,
        __dirname: true
    },
    devtool: 'source-map'
}

export default [serverConfig];