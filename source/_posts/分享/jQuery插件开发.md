---
title: jQuery插件开发
english_title: query-plugin-develop
author: 拳头巴掌
tags: 
    - jquery
category: 
    - 分享
date: 2015-3-3
---

关于jQuery插件的开发自己也做了少许研究，自己也写过多个插件，在自己的团队了也分享过一次关于插件的课。开始的时候整觉的很复杂的代码，现在再次看的时候就清晰了许多。这里我把我自己总结出来的东西分享出来，帮助那些和我一样曾经遇到过同样问题的人。  

## 我要做什么
> `javascript 插件` : 插件是一种遵循一定规范的应用程序接口编写出来的代码，用于处理特定的问题。  

我想要得到的`javascript 插件`应该会有以下几个特征
1. 代码相对独立
2. 链式操作
3. 插件可配置
4. 有可操作的方法，插件的生命周期可控制
5. 配置可被缓存
6. 可扩展
7. 无冲突处理
8. 事件代理，动态初始化

`* 以下的代码均假设存在 jQuery`

## 插件的第一形态
面对这种情况，通常我们会通过定义`function`的方式来实现。
```js
function pluginName($selector){
    $.each($selector, function () {
        $(this).css("background-color", "#ccc");
        // to do something...
    });
}
// pluginName(document.getElementsByClassName("demo"));
```
因为我谈的是jQuery插件开发，那么我现在把这段代码扩展到jQuery上，代码如下：
```js
// IIFE(立即调用函数表达式);  [参考 http://suqing.iteye.com/blog/1981591/]
;(function ($) {

    // 扩展这个方法到jQuery.
    // $.extend() 是吧方法扩展到 $ 对象上，和 $.fn.extend 不同。 扩展到 $.fn.xxx 上后，
    // 调用的时候就可以是 $(selector).xxx()
    $.fn.extend({
        // 插件名字
        pluginName: function () {
            // 遍历匹配元素的集合
            // 注意这里有个"return"，作用是把处理后的对象返回，实现链式操作
            return this.each(function () {
                // 在这里编写相应的代码进行处理
            });
        }
    });

// 传递jQuery到内层作用域去, 如果window,document用的多的话, 也可以在这里传进去.
// })(jQuery, window, document, undefined);
})(jQuery, undefined);
// 调用方式 $(".selector").pluginName().otherMethod();
```
但是还差的远，目前只解决了两个问题
1. <del>`代码相对独立`</del>
2. <del>`链式操作`</del>
3. 插件可配置
4. 有可操作的方法，插件的生命周期可控制
5. 配置可被缓存
6. 可扩展
7. 无冲突处理
8. 事件代理，动态初始化

## 插件的第二形态
现在来给插件添加参数支持。代码如下
```js
;(function($){
	$.fn.pluginName = function(options) {
        // 合并参数，通过“extend”合并默认参数和自定义参数
		var args = $.extend({}, $.fn.pluginName.defaults, options);

		return this.each(function() {
		    console.log(args.text);
            // to do something...
		});
	};

    // 默认参数
	$.fn.pluginName.defaults = {
	    text : "hello"
	};

})(jQuery);
// $(".selector").pluginName({
//     text : "hello world!"
// });
```
添加参数支持还比较容易些，又解决一问题
1. <del>`代码相对独立`</del>
2. <del>`链式操作`</del>
3. <del>`插件可配置`</del>
4. 有可操作的方法，插件的生命周期可控制
5. 配置可被缓存
6. 可扩展
7. 无冲突处理
8. 事件代理，动态初始化

## 插件的第三形态
现在来添加方法的支持，我前面所提到的*生命周期可控制*，意思差不多，例如添加`reInit`,`destory`等方法来控制插件。
```js
;(function($){
    $.fn.pluginName = function (method) {
        // 如果第一个参数是字符串, 就查找是否存在该方法, 找到就调用; 如果是object对象, 就调用init方法;.
        if (methods[method]) {
            // 如果存在该方法就调用该方法
            // apply 是吧 obj.method(arg1, arg2, arg3) 转换成 method(obj, [arg1, arg2, arg3]) 的过程.
            // Array.prototype.slice.call(arguments, 1) 是把方法的参数转换成数组.
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            // 如果传进来的参数是"{...}", 就认为是初始化操作.
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.pluginName');
        }
    };

    // 不把方法扩展在 $.fn.pluginName 上. 在闭包内建个"methods"来保存方法, 类似共有方法.
    var methods = {
        /**
         * 初始化方法
         * @param _options
         * @return {*}
         */
        init : function (_options) {
            return this.each(function () {
                var $this = $(this);
                var args = $.extend({}, $.fn.pluginName.defaults, _options);
                // ...
            })
        },
        publicMethod : function(){
            private_methods.demoMethod();
        }
    };
    
    // 私有方法
    function private_methods = {
        demoMethod : function(){}
    }

    // 默认参数
    $.fn.pluginName.defaults = {
    };

})(jQuery);
// 调用方式
// $("div").pluginName({...});  // 初始化
// $("div").pluginName("publicMethod");  // 调用方法
```
又解决一问题
1. <del>`代码相对独立`</del>
2. <del>`链式操作`</del>
3. <del>`插件可配置`</del>
4. <del>`有可操作的方法，插件的生命周期可控制`</del>
5. 配置可被缓存
6. 可扩展
7. 无冲突处理
8. 事件代理，动态初始化

## 插件的第四形态
第三形态的插件修改就已经可以应对大多数插件的需求了。精益求精嘛，继续升级。  
第四形态的插件是照帮`司徒正美`的`《javascript框架设计》`的代码。加了点面向对象的知识。
```js
(function ($) {

    var Plugin = function (element, options) {
        this.element = element;
        this.options = options;
    };

    Plugin.prototype = {
        create: function () {
            console.log(this.element);
            console.log(this.options);
        }
    };

    $.fn.pluginName = function (options) {
        // 合并参数
        return this.each(function () {
            // 在这里编写相应的代码进行处理
            var ui = $._data(this, "pluginName");
            // 如果该元素没有初始化过(可能是新添加的元素), 就初始化它.
            if (!ui) {
                var opts = $.extend(true, {}, $.fn.pluginName.defaults, typeof options === "object" ? options : {});
                ui = new Plugin(this, opts);
                // 缓存插件
                $._data(this, "pluginName", ui);
            }
            // 调用方法
            if (typeof options === "string" && typeof ui[options] == "function") {
                // 执行插件的方法
                ui[options].apply(ui, args);
            }
        });
    };

    $.fn.pluginName.defaults = {};

})(jQuery);
// 调用的方式和之前一样。
```

这里特别要提下缓存这个东西，插件用多了，觉的这个真的是好东西。  
在传统面向对象的插件开发中，至少会声明个变量保存它，但是我到目前写的jQuery插件中都没有，用起来很麻烦。自从把初始化后的插件缓存起来后，方便了许多。通过代码`$("#target").data("pluginName")`就可以取到对象了。
来看看还有什么问题没有解决
1. <del>`代码相对独立`</del>
2. <del>`链式操作`</del>
3. <del>`插件可配置`</del>
4. <del>`有可操作的方法，插件的生命周期可控制`</del>
5. <del>`配置可被缓存`</del>
6. 可扩展
7. 无冲突处理
8. 事件代理，动态初始化

## 插件的第五形态
看了上面的代码是否脑子有点晕了，如果是，休息片刻，稍后回来，下面的代码更精彩。
最后一个方案算是比较全面的了。方案来自`Bootstrap`，下面代码以 Bootstrap 的 button 插件为例.
```js
!function ($) {
    // ecma262v5 的新东西, 强制使用严谨的代码编写.
    "use strict";

    // BUTTON PUBLIC CLASS DEFINITION
    // ==============================

    var Button = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Button.DEFAULTS, options);
    };

    Button.DEFAULTS = {
        loadingText: 'loading...'
    };

    Button.prototype.setState = function (state) {
        // ...
    };

    Button.prototype.toggle = function () {
        // ...
    };


    // BUTTON PLUGIN DEFINITION
    // ========================

    var old = $.fn.button; // 这里的 $.fn.button 有可能是之前已经有定义过的插件，在这里做无冲突处理使用。

    $.fn.button = function (option) {
        return this.each(function () {
            var $this = $(this);
            // 判断是否初始化过的依据
            var data = $this.data('bs.button');
            var options = typeof option == 'object' && option;

            // 如果没有初始化过, 就初始化它
            if (!data) $this.data('bs.button', (data = new Button(this, options)));

            if (option == 'toggle') data.toggle();
            else if (option) data.setState(option)
        })
    };

    // ① 暴露类名, 可以通过这个为插件做自定义扩展
    $.fn.button.Constructor = Button;
    // 扩展的方式
    // 设置 : $.fn.button.Constructor.newMethod = function(){}
    // 使用 : $btn.button("newMethod");

    // ② 无冲突处理
    $.fn.button.noConflict = function () {
        $.fn.button = old;
        return this
    };

    // ③ 事件代理, 智能初始化
    $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
        var $btn = $(e.target);
        // 查找要初始化的对象
        if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn');
        // 直接调用方法, 如果没有初始化, 内部会先进行初始化
        $btn.button('toggle');
        e.preventDefault();
    });

}(jQuery);
```
来看看还有什么问题没有解决
1. <del>`代码相对独立`</del>
2. <del>`链式操作`</del>
3. <del>`插件可配置`</del>
4. <del>`有可操作的方法，插件的生命周期可控制`</del>
5. <del>`配置可被缓存`</del>
6. <del>`可扩展`</del>
7. <del>`无冲突处理`</del>
8. <del>`事件代理，动态初始化`</del>

### 补充
现在的插件都要求灵活性要高，比如希望插件可以同时适配`jQuery`和`Zepto`，又或者需要支持AMD或者CMD规范。
- 支持jQuery和Zepto 
```js
if (window.jQuery || window.Zepto) {
    (function ($) {
        // plugin code...
    })(window.jQuery || window.Zepto);
}
```
- 中间件支持，node
```js
if (typeof(module) !== 'undefined')
{
    module.exports = pluginName;
}
```
- requirejs(AMD) support
```js
if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return pluginName;
    });
}
```
- seajs(CMD) support
```js
if (typeof define === 'function') {
    define([], function () {
        'use strict';
        return pluginName;
    });
}
```
------------
呼~，问题都解决了，代码若有看不懂的地方可以多看看。后面的几个看不懂也没有关系，在实际的开发中，前面几个够用了。要强调下，并不是越高级的写法越好，要看自己项目的需求合理的选择。  
当然还有更多更好的插件开发方式，有待大家自己去发现了。