;
(function() {
  var version = "20141223";
  seajs.config({
    base: "/",
    alias: {
      "jquery": "http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js",
      "highlight": "assets/lib/highlight/highlight.cmd.min.js",
      "prettify": "assets/lib/prettify/prettify.js",
      "fuse": "assets/lib/fuse/fuse.min.js",
      "jStorage": "assets/lib/jStorage/jStorage.cmd.js",
      "dbHelper": "assets/script/dbHelper.js",
      "common": "assets/script/common.js"
    }
    //文件映射
    ,
    map: [
        //可配置版本号
        [/\.css$/, '.css?v=' + version],
        [/\.js$/, '.js?v=' + version]
      ]
      //编码
      ,
    charset: 'utf-8'
      //,debug:true
  });
})();