const path=require("path");

module.exports = {
    entry:{
        'push-notifications':'./web/js/push-notifications.ts',
    },
    devtools:'sourcemap',
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'public'),
    },
    resolve:{
        extension:['.ts']
    }
}