define(function (require, exports, module) {
    require("jquery");

    exports.init_page_nav = init_page_nav;
    exports.init_gotop = init_gotop;

    $.urlParam = function (name) {
        var url = window.location.href;
        if (url.indexOf("?") >= 0) {
            url = url.substring(url.indexOf("?") + 1);
        }
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = url.match(reg);
        if (r != null) return decodeURIComponent(r[2]); else return "";
    };

    /**
     * (￣_,￣ )
     * 导航高亮滚动
     */
    function init_page_nav() {
        highlightNav();

        var $nav = $("#j_page_nav");
        var $nav_label = $nav.find(".nav-label");
        var cur_active_nav = $nav.find(".active");
        var $btn = $nav.find(".page-nav-btn");
        var cur_nav;

        if ($btn.length == 0) {
            return;
        }

        $nav.find("li").on("mouseenter", function () {
            cur_nav = $(this);
            $nav_label.css({"width": cur_nav.width(), "left": cur_nav.position().left});
        }).on("mouseleave", function () {
            if (cur_active_nav.length > 0) {
                $nav_label.css({"width": cur_active_nav.width(), "left": cur_active_nav.position().left});
            }
        }).trigger("mouseleave");

        $btn.on("click", function (e) {
            e.stopPropagation();
            $nav.toggleClass("active");
        });

        $("body").on("touchmove click", function () {
            $nav.removeClass("active");
        });
    }

    function highlightNav() {
        // 获取当前路径
        var curPath = window.location.href.replace("#", "");
        var navItemSelector = "#j_page_nav li a";
        var activeClass = "active";
        $(navItemSelector).each(function (i, ele) {
            var $this = $(this);
            var _href = $this.attr("href").replace("#", "");
            // 检查连接地址在当前 url 中的 index 值是否大于0
            if (_href != "" && curPath.indexOf(_href) > -1) {
                $this.closest("li").addClass(activeClass);
            }
        });
    }

    /**
     * 回到顶部
     */
    function init_gotop() {
        var $gotop = $("#j_gotop");
        var $window = $(window);

        if ($gotop.length == 0) {
            return;
        }

        $gotop.on("click.gotop", function () {
            $("html, body").animate({scrollTop: 0}, 320);
        });

        $window.on("scroll.gotop", function () {
            if ($window.scrollTop() > 800) {
                if (!$gotop.hasClass("active")) {
                    $gotop.addClass("active");
                }
            } else {
                if ($gotop.hasClass("active")) {
                    $gotop.removeClass("active");
                }
            }
        });
    }

});

function html_decode(str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&gt;/g, ">");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br>/g, "\n");
    return s;
}