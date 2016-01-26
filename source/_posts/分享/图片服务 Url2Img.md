---
title: 图片服务 Url2Img
english_title: project-Url2Img
author: 拳头巴掌
tags: 
    - 工具
    - 图片
category: 
    - 分享
date: 2015-2-13
---

`图片服务`  
过去为解决前端开发过程中图片问题，找了很多图片的服务。 例如
* <a href="http://placehold.it/" target="_blank">http://placehold.it/</a>    
    服务器速度不错, 大小/颜色/文字, 一个不差 
* <a href="http://placekitten.com/" target="_blank">http://placekitten.com/</a>     
    喜欢猫的人的福音    
    根据输入的尺寸, 生成对应的猫猫图.  
    *注意, 尺寸<=100px 的无法显示    
    （我的博客首页的猫猫图就是用这个的 (～￣▽￣)～）
* <a href="http://lorempixel.com/" target="_blank">http://lorempixel.com/</a>      
    生成的图片色彩丰富.  
    需要高保真
* <a href="http://nosrc.net/ " target="_blank">http://nosrc.net/</a>   
    生成的图片相对单调.  
    通过生成svg的代码, 来实现占位符.
* <a href="http://dummyimage.com/ " target="_blank">http://dummyimage.com/</a>   
    生成图片的字体还不错  
    api还挺强大的    
* <a href="http://fpoimg.com/ " target="_blank">http://fpoimg.com/</a>   
    API简洁，但实用     
    生成的样式也不错    
    
有几款确实给我的开发带来了遍历。`但是`还是有问题啊，有时候服务器忙，图片加载超慢的，甚至图裂了。这让我开发起来有点遗憾。 SO，自己DIY一个吧。  
自己会点`node`，所以打算用`node`搭建一个，但是`node`对图片的处理能力貌似不强。但多谢`nosrc`这个项目，因为它也是用`nodejs`搭建的。看了它的源码后才找到了点灵感，就是用`SVG`。好了思路有了，就是折腾了。  

折腾了两天，终于做出了点东西，下面是一些介绍  
源码在 Github 上： <a href="https://github.com/worklinwu/Url2Img" target="_blank">Url2Img</a>    

------------------------------------------------

`Url2Img` 是一个图片服务，通过URL请求返回一张`SVG`图片，你可以通过参数来设置图片的背景色和文字色。

### Params:

* `/` : 参数为空的话生成一个0像素的 `空白图片`
* `/{width}` : 生成 `等宽高` 的图片。  （默认的背景色是`#aaa`，文字色是`#fff`）
* `/{width}/{height}` : 生成 `指定宽高` 的图片。 
* `/{width}/{height}/t` : 生成 背景为`透明色` 的图片 
* `/{width}/{height}/r` : 生成 背景色为`随机色` 的图片
* `/{width}/{height}/bgColor` : 生成 `指定背景色` 的图片
* `/{width}/{height}/bgColor/fontColor` : 生成 `指定背景色` 和 `指定文字色` 的图片
    
### How to use:
```
$ npm install
```
```
$ node app
```
在浏览器中输入
* http://127.0.0.1:5405
* http://127.0.0.1:5405/300
* http://127.0.0.1:5405/300/150/r
* http://127.0.0.1:5405/300/150/t
* http://127.0.0.1:5405/300/150/f55
* http://127.0.0.1:5405/300/150/f55
* http://127.0.0.1:5405/300/150/f55/ccc
