define(function (require, exports, module) {
    require("jquery");
    var dbHelper = require("dbHelper");
    require("jStorage");

    // 查询引擎
    var Fuse = require("fuse");
    var keyword = $.urlParam("search");
    var page = $.urlParam("page") ? parseInt($.urlParam("page")) : 0;
    var one_page_num = 9;

    if (keyword) {
        dbHelper.use(function () {
            var fuse = new Fuse(DB.posts, {keys: ['tags', 'title']});
            var result = fuse.search(keyword);
            _render(fuse.search(keyword).slice(page * one_page_num, page * one_page_num + one_page_num), result.length);
        });
    } else {
        dbHelper.use(function () {
            _render(DB.posts.slice(page * one_page_num, page * one_page_num + one_page_num), DB.posts.length);
        });
    }

    // 渲染
    function _render(articles, resultLength) {
        var $list = $("#j_article_list ul");
        var tpl =
            '<li title="{title}">' +
            '   <a href="/{path}" class="info">' +
            '       <img src="{thumbnail}" alt=""/>' +
            '   </a>' +
            '   <a href="/{path}" class="title"><h3>{title}</h3></a>' +
            '   <span class="time">{date}</span>' +
            '   <span class="classify">{tags}</span>' +
            '</li>';
        var articleHTML = "";
        var $prev = $("#j_paging .prev");
        var $next = $("#j_paging .next");

        // 渲染文章列表
        articles.forEach(function (data) {
            console.log(data.thumbnail);
            articleHTML += tpl
                .replace(/\{path\}/g, data.path)
                .replace(/\{title\}/g, data.title)
                .replace(/\{date\}/g, data.date)
                .replace(/\{tags\}/g, data.tags)
                .replace(/\{thumbnail\}/g, data.thumbnail ? data.thumbnail : "http://placekitten.com/g/" + (301 + parseInt(Math.random(1) * 10) ) + "/201");
        });
        $list.html(articleHTML);

        // 渲染搜索框
        $(".search-input").val(keyword);

        // 渲染分页
        dbHelper.use(function () {
            if (page == 0) {
                // 如果是第一页
                $prev.addClass("disabled").attr("href", "javascript:void(0);");
            } else {
                // 非第一页
                $prev.removeClass("disabled");
                // 设置链接
                if (keyword) {
                    $prev.attr("href", "?search=" + keyword + "&page=" + (page - 1));
                } else {
                    $prev.attr("href", "?page=" + (page - 1));
                }
            }
            if (page * one_page_num + one_page_num >= resultLength) {
                $next.addClass("disabled").attr("href", "javascript:void(0);");
            } else {
                $next.removeClass("disabled");
                if (keyword) {
                    $next.attr("href", "?search=" + keyword + "&page=" + (page + 1));
                } else {
                    $next.attr("href", "?page=" + (page + 1));
                }
            }
        });
    }
});