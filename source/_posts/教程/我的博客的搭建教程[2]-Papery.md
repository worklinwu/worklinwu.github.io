---
title: 我的博客的搭建教程[2]-Papery
english_title: course-static-blog-2
author: 拳头巴掌
tags: 
    - 静态博客
category: 
    - 教程
date: 2015-1-6
---
说道静态博客的搭建，主要就是学会静态博客框架的使用，和内容的维护。   
所以先要讲讲关于我所使用的静态博客框架 `Papery` 的使用。   
   
### 认识 Papery
首先是对Papery的认识，和学会基本使用。    
要学习Papery最快的方法，当然就是看文档，<a href="https://github.com/ericzhang-cn/papery" target="_blank">Papery</a> 走起。   
（若干时间过后...）    
根据提示操作，应该很快就可以搭个基本的框架了。  之后只要写一些文章，发布到你的仓库中，就可以正常访问了。
   
### 来点扩展   
先来看看我最终项目的目录结构：   
```bash
root
 | - articles.yml #文章配置
 | - ext.yml      #用户自定义扩展配置
 | - navbar.yml   #导航菜单配置
 | - pages.yml    #独立页面配置
 | - site.yml     #站点主配置
 | - data.json    #数据文件（自动生成）
 | - index.html   #首页（自动生成）
 | - about.html   #关于我页（自动生成）
 | - archive.html #文章归档页（自动生成）
 | - rss.xml      #RSS订阅源（自动生成）
 | - articles     #放置文章的目录
      |- post1.md    #post1元文本
      |- post1.html  #post1文章页面（自动生成）
      |- post2.md    #post2元文本
      |- post2.html  #post2文章页面（自动生成）
 | - pages #放置独立页面的目录
      |- page1.md    #page1元文本
      |- page1.html  #page1独立页面（自动生成）
 | - assets    #资源目录
 | - templates #模板目录
```   
我的目录结构，与Papery默认生成的有点不一样。 这是因为Papery所提供的博客功能并不能满足我的需求，我做了些修改和扩展。主要有：
1. 删除标签页
2. 新增文章归档页面
3. 新增关于我页面
4. 新增友情链接
5. 替换了原来的代码高亮方案   
6. 新增`data.json`文件，做本地存储使用，这个后面讲解
   
因为原有的代码并不能满足这些需求，因此要动到源码。   
- 首先要理解源码。到你的`npm`目录下面，找到`papery`项目，大致看了下源码，其实很简单，主要的几个文件
    ```bash
    | - bin
        |- build_runner.js      #编译整个站点
        |- create_runner.js     #生成一个新的papery站点
        |- papery.js            #程序入口
        |- server_runner.js     #在本地启动一个调试服务器
    | - lib
        |- compiler.js          #生成编译后的静态页面文件
        |- parser.js            #解析YAML配置文件信息    
  ```
- 我要修改就只有`lib`目录下两个文件。   
大致的流程就是， 解析`.yml`文件和`articles`目录下的文件，生成可供编译过程使用的数据，然后读取`templates`目录下的`.ejs`的文件，把数据带进去编译，生成html到指定文件夹。   
所以呢，我添加的`文章归档`页和`关于我`的页面就很好解决了，复制一个方法，依葫芦画瓢，再在自己的项目里创建自己需要的模板文件（要懂一点ejs）。   
   
都ok后，`papery build .` 下就可以看到结果了。   

`友情链接`就简单多了，`Papery`原本就提供基本的扩展，在`ext.yml`下添加友情链接的数据，在模板里填上自己的代码就可以了。

有关`Papery`的就差不多了，好像也讲了些这之外的，不管了。 下一篇准备讲解我的博客另外的一些扩展，基本上都是锦上添花的功能。
   
