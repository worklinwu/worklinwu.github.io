/*
 *
 * author : linwu (http://linwu.name)
 * datetime : 2015-6-4
 */
var fs = require("hexo-fs");
// 生成 about 页
hexo.extend.generator.register('about', function (locals) {
    return {
        path: "about.html",
        data: {},
        layout: ["about"]
    }
});
// 生成 archive 页
hexo.extend.generator.register('archives', function (locals) {
    return {
        path: "archives.html",
        data: {},
        layout: ["archives"]
    }
});
// 生成 README
hexo.extend.generator.register('readme', function (locals) {
    return {
        path: "README.md",
        data: function () {
            return fs.createReadStream('themes/' + hexo.config.theme + '/README.md');
        }
    }
});
// 生成 CNAME
hexo.extend.generator.register('CNAME', function (locals) {
    return {
        path: "CNAME",
        data: function () {
            return fs.createReadStream('themes/' + hexo.config.theme + '/CNAME');
        }
    }
});