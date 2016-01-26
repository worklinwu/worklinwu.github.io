/*
 * author : linwu (http://linwu.name)
 * datetime : 2015-6-4
 */
var fs = require("hexo-fs");
var moment = require('moment');
var _ = require("underscore");

// 在部署完成前
hexo.on("deployBefore", function () {
});

// 在部署成功后
hexo.on("deployAfter", function () {
});

// 在 Hexo 结束前
hexo.on("exit", function () {
    generatePostDataJson(hexo.locals.get("posts"));
    //error fs.copyFile(hexo.config.root + 'themes/' + hexo.config.theme + '/README.md', hexo.public_dir + '/README.md');
});

// 在静态文件生成前
hexo.on("generateBefore", function () {
});

// 在静态文件生成后
hexo.on("generateAfter", function () {
    //console.log(typeof hexo.locals.get("posts").sort('-date'));
    //console.log(hexo.route.list());
    //console.log(hexo.locals.get("posts").sort('-date'));
    //console.log(hexo);
});

// 在文章文件建立后
hexo.on("new", function (post) {
});

// 在处理原始文件前
// 此事件会返回一个地址，代表 Box（Box）的根目录。
hexo.on("processBefore", function (path) {
    //console.log("processBefore :" + arguments[0]);
});

// 在处理原始文件后
hexo.on("processAfter", function (path) {
    //console.log("processAfter :" + arguments[0]);
});

// 在初始化完成后
hexo.on("ready", function () {
});


/**
 * 生成数据文件
 */
var generatePostDataJson = function (posts) {
    var result = {};
    var output = hexo.public_dir + '/data.json';
    var item;

    result.posts = [];
    posts.data = _.sortBy(posts.data, function (item) {
        return -new Date(item.date);
    });
    for (var i = 0; i < posts.data.length; i++) {
        item = posts.data[i];
        result.posts.push({
            //id: item._id,
            title: item.title,
            //english_title: item.english_title,
            author: item.author,
            thumbnail: item.thumbnail,
            date: moment(item.date).format("YYYY-MM-DD"),
            //slug: item.slug,
            //published: item.published,
            //updated: moment(item.updated).format("YYYY-MM-DD"),
            //comments: item.comments,
            //photos: item.photos,
            //link: item.photos,
            path: item.path,
            //permalink: item.permalink,
            //full_source: item.full_source,
            //asset_dir: item.asset_dir,
            tags: _.map(item.tags.data, function (item) {
                return item.name
            }),
            categories: _.map(item.categories.data, function (item) {
                return item.name
            })
            //prev: item.prev && item.prev.path,
            //next: item.next && item.next.path
        });
    }

    fs.writeFileSync(output, JSON.stringify(result));
    console.info('Build DataJson completed!');

};