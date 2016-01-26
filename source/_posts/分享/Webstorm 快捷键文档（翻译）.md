---
title: Webstorm 快捷键文档（翻译）
english_title: share-webstorm-keymaps
author: 拳头巴掌
tags: 
    - webstorm
    - 翻译
category: 
    - 分享
date: 2015-4-2
---
<style type="text/css">
    .m-keymap-list dt{ line-height:3em; font-size:18px; color:#666; }
    .m-keymap-list dd{ margin-bottom:5px; line-height:1.5; }
    .m-keymap-list .desc{ position:relative; display:inline; cursor:default; }
    .m-keymap-list dd .origin{ display:none; position:absolute; line-height:1; left:0; top:1.8em; padding:4px 6px 4px 3.2em; border:1px solid #bdb; border-radius:3px; background-color:#efe; z-index:10; white-space:nowrap; font-size:14px; }
    .m-keymap-list dd .origin:before{ content:'原文 :'; position:absolute; left:4px; top:0; display:block; line-height:22px; }
    .m-keymap-list dd .origin:after{ content:''; position:absolute; left:10px; top:-5px; display:block; z-index:8; width:9px; height:5px; background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAAOElEQVQIW2NkQAO77+7+76rsyogsjMIBKTBWMmY4e+8sA7JCuCKYApgJyArBitAVoCtkxKUAWSEAwjIfWCPZqY4AAAAASUVORK5CYII=) no-repeat 50% 50%;}
    .m-keymap-list dd .active .origin{ display:block; }
</style>

近期`Webstorm10`发布啦， 作为一个奇葩的付费用户，自然是要关注下的。 折腾了大概一天的时间，收获还是有的，并不是说新版的哪些功能让我有收获，而是发现之前都没有好好的研究它。   

无意中看到个API文档，又恰逢最近在恶补英语，就拿来翻译下了。（翻译略烂，不要拍砖）  


<dl class="m-keymap-list">
    <dt>Editing</dt>
    <dd>`Ctrl + Shift + Enter` : <div class="desc">补全当前语句<span class="origin">Complete statement</span></div></dd>
    <dd>`Ctrl + P` :<div class="desc">显示参数信息<span class="origin">Parameter info (within method call arguments)</span></div></dd>
    <dd>`Ctrl + Q` :<div class="desc">快速查看文档 (另外在`function`前面加`/**`加回车可以快速生成文档)<span class="origin">Quick documentation lookup</span></div></dd>
    <dd>`Ctrl + mouse over` :<div class="desc">查看代码简单的信息<span class="origin">code Brief Info</span></div></dd>
    <dd>`Ctrl + F1` :<div class="desc">显示错误信息(鼠标移到错误的地方也会显示)<span class="origin">Show descriptions of error or warning at caret</span></div></dd>
    <dd>`Alt + Insert` :<div class="desc">插入代码(有个叫`Dummy Text Generator`的插件, 可以用这个快捷键生成随机文字)<span class="origin">Generate code...</span></div></dd>
    <dd>`Ctrl + Alt + T` :<div class="desc">包裹选中的代码(比如插入if..else结构)<span class="origin">Surround with... (if..else, try..catch, for, etc.)</span></div></dd>
    <dd>`Ctrl + /` :<div class="desc">添加/取消单行注释<span class="origin">Comment/uncomment with line comment</span></div></dd>
    <dd>`Ctrl + Shift + /` :<div class="desc">添加/取消多行注释<span class="origin">Comment/uncomment with block comment</span></div></dd>
    <dd>`Ctrl + W` :<div class="desc">逐层向外选择代码块(相当实用)<span class="origin">Select successively increasing code blocks</span></div></dd>
    <dd>`Ctrl + Shift + W` :<div class="desc">逐层向内取消选择的代码块<span class="origin">Decrease current selection to previous state</span></div></dd>
    <dd>`Alt + Q` :<div class="desc">显示上下文信息(光标落在最后一个挂号时, 会自动显示)<span class="origin">Context info</span></div></dd>
    <dd>`Alt + Enter` :<div class="desc">显示动作和quick-fies的意图(注意到偶尔出现在选中行前面的小灯泡了吗? 就是他了.)<span class="origin">Show intention actions and quick-fies</span></div></dd>
    <dd>`Ctrl + Alt + L` :<div class="desc">格式化代码(还可以使用`Alt + C + R`)<span class="origin">Reformat code</span></div></dd>
    <dd>`Ctrl + Alt + I` :<div class="desc">自动缩进<span class="origin">Auto-indent line(s)</span></div></dd>
    <dd>`Tab / Shift + Tab` :<div class="desc">缩进<span class="origin">Indent/unindent selected lines</span></div></dd>
    <dd>`Ctrl + X , Shift + Delete` :<div class="desc">剪切<span class="origin">Cut current line or selected block to clipboard</span></div></dd>
    <dd>`Ctrl + C , Ctrl + Insert` :<div class="desc">复制<span class="origin">Copy current line or selected block to clipboard</span></div></dd>
    <dd>`Ctrl + V , Shift + Insert` :<div class="desc">粘贴<span class="origin">Paste from clipboard</span></div></dd>
    <dd>`Ctrl + Shift + V` :<div class="desc">从近期缓存中选择粘贴内容<span class="origin">Paste from recent buffrs...</span></div></dd>
    <dd>`Ctrl + D` :<div class="desc">复制当前行或者所选块<span class="origin">Duplicate current line or selected block</span></div></dd>
    <dd>`Ctrl + Y` :<div class="desc">删除光标所在位置行<span class="origin">Delete line at caret</span></div></dd>
    <dd>`Ctrl + Shift + J` :<div class="desc">将多行代码合并到一行<span class="origin">Join lines</span></div></dd>
    <dd>`Shift + Enter` :<div class="desc">插入一行<span class="origin">Start new line</span></div></dd>
    <dd>`Ctrl + Shift + U` :<div class="desc">转换大小写<span class="origin">Toggle case for word at caret or selected block</span></div></dd>
    <dd>`Ctrl + Shift + ] / [` :<div class="desc">选择代码到代码块结束/开始<span class="origin">Select till code block end/start</span></div></dd>
    <dd>`Ctrl + Delete` :<div class="desc">删除文字到该行末尾<span class="origin">Delete to word end</span></div></dd>
    <dd>`Ctrl + NumPad+/-` :<div class="desc">折叠代码块<span class="origin">Expand/collapse code block</span></div></dd>
    <dd>`Ctrl + Shift + NumPad+` :<div class="desc">展开所有代码块<span class="origin">Expand all</span></div></dd>
    <dd>`Ctrl + Shift + NumPad-` :<div class="desc">折叠所有代码块<span class="origin">Collapse all</span></div></dd>
    <dd>`Ctrl + F4` :<div class="desc">关闭当前选项卡<span class="origin">Close active editor tab</span></div></dd>
</dl>


<dl class="m-keymap-list">
    <dt>Multiple carets and selections</dt>
    <dd>`Alt + Click` :<div class="desc">添加或删除插入符号<span class="origin">Add or remove caret</span></div></dd>
    <dd>`Alt + J` :<div class="desc">选择下一个匹配的事件(例如搜索, 选择下一个匹配的结果)<span class="origin">Select next occurrence</span></div></dd>
    <dd>`Shift + Ctrl + Alt + J` :<div class="desc">类似上一个<span class="origin">Select all occurrences</span></div></dd>
    <dd>`Alt + Shift + J` :<div class="desc">相反...<span class="origin">Unselect occurrence</span></div></dd>
    <dd>`Esc` :<div class="desc">取消当前的事件或任务, 回到代码编辑界面<span class="origin">Unselect all occurrences or carets</span></div></dd>
</dl>



<dl class="m-keymap-list">
    <dt>Running</dt>
    <dd>`Alt + Shift + F10/F9` :<div class="desc">选择配置文件并运行/调试<span class="origin">Select confiuration and run/debug</span></div></dd>
    <dd>`Shift + F10/F9` :<div class="desc">运行/调试<span class="origin">Run/Debug</span></div></dd>
    <dd>`Ctrl + Shift + F10/F9` :<div class="desc">类似<span class="origin">Run/Debug context confiuration from editor</span></div></dd>
    <dd>`Alt + Shift + R` :<div class="desc">重新运行测试<span class="origin">Rerun tests</span></div></dd>
</dl>


<dl class="m-keymap-list">
    <dt>Debugging</dt>
    <dd>`F8` :<div class="desc">单步执行(不进入函式)<span class="origin">Step over</span></div></dd>
    <dd>`F7` :<div class="desc">单步执行(进入函式)<span class="origin">Step into</span></div></dd>
    <dd>`Shift + F7` :<div class="desc">智能单步执行<span class="origin">Smart step into</span></div></dd>
    <dd>`Shift + F8` :<div class="desc">跳出<span class="origin">Step out</span></div></dd>
    <dd>`Alt + F9` :<div class="desc">运行到光标处<span class="origin">Run to cursor</span></div></dd>
    <dd>`Alt + F8` :<div class="desc">验证表达式<span class="origin">Evaluate expression</span></div></dd>
    <dd>`F9` :<div class="desc">重新开始<span class="origin">Resume</span></div></dd>
    <dd>`Ctrl + F8` :<div class="desc">切换断点<span class="origin">Toggle breakpoint</span></div></dd>
    <dd>`Ctrl+Shift+F8` :<div class="desc">查看断点<span class="origin">View breakpoints</span></div></dd>
</dl>


<dl class="m-keymap-list">
    <dt>Navigation</dt>
    <dd>`Ctrl + N` :<div class="desc">跳转到定义的`类`<span class="origin">Go to class</span></div></dd>
    <dd>`Ctrl + Shift + N` :<div class="desc">打开指定文件<span class="origin">Go to fie</span></div></dd>
    <dd>`Ctrl + Alt + Shift + N` :<div class="desc">通过一个字符查找函数位置<span class="origin">Go to symbol</span></div></dd>
    <dd>`Alt + Right` :<div class="desc">切换到下一个选项卡<span class="origin">Go to next editor tab</span></div></dd>
    <dd>`Alt + Left` :<div class="desc">切换到上一个选项卡<span class="origin">Go to previous editor tab</span></div></dd>
    <dd>`F12` :<div class="desc">回到之前的工具窗口<span class="origin">Go back to previous tool window</span></div></dd>
    <dd>`Esc` :<div class="desc">回到代码编辑界面<span class="origin">Go to editor (from tool window)</span></div></dd>
    <dd>`Shift + Esc` :<div class="desc">在工具栏激活的状态下隐藏工具栏<span class="origin">Hide active or last active window</span></div></dd>
    <dd>`Ctrl + G` :<div class="desc">跳转到指定行<span class="origin">Go to line</span></div></dd>
    <dd>`Ctrl + E` :<div class="desc">打开显示最近浏览过的文件的弹出框<span class="origin">Recent fies popup</span></div></dd>
    <dd>`Ctrl + Alt + Left/Right` :<div class="desc">跳转到上一个或下一个操作的位置<span class="origin">Navigate back/forward</span></div></dd>
    <dd>`Ctrl + Shift + Backspace` :<div class="desc">跳转到最后一个有操作的位置<span class="origin">Navigate to last edit location</span></div></dd>
    <dd>`Alt + F1` :<div class="desc">显示当前文件的位置(在项目中的位置, 在文件夹中的位置等等)<span class="origin">Select current fie or symbol in any view</span></div></dd>
    <dd>`Ctrl + B , Ctrl + Click` :<div class="desc">跳转到申明(函数, 类)的位置<span class="origin">Go to declaration</span></div></dd>
    <dd>`Ctrl + Alt + B` :<div class="desc">跳转到实现该(函数, 类)的位置<span class="origin">Go to implementation(s)</span></div></dd>
    <dd>`Ctrl + Shift + I` :<div class="desc">快速浏览申明的(函数, 类等等)<span class="origin">Open quick defiition lookup</span></div></dd>
    <dd>`Ctrl + Shift + B` :<div class="desc">跳转方法定义处<span class="origin">Go to type declaration</span></div></dd>
    <dd>`Ctrl + U` :<div class="desc">跳转到父类方法/超类<span class="origin">Go to super-method/super-class</span></div></dd>
    <dd>`Alt + Up/Down` :<div class="desc">去上一个或下一个方法<span class="origin">Go to previous/next method</span></div></dd>
    <dd>`Ctrl + ] / [` :<div class="desc">跳转到代码块的头部或尾部<span class="origin">Move to code block end/start</span></div></dd>
    <dd>`Ctrl + F12` :<div class="desc">显示文件结构弹框<span class="origin">File structure popup</span></div></dd>
    <dd>`Ctrl + H` :<div class="desc">类型层次结构<span class="origin">Type hierarchy</span></div></dd>
    <dd>`Ctrl + Alt + H` :<div class="desc">调用层次结构<span class="origin">Call hierarchy</span></div></dd>
    <dd>`F2 / Shift + F2` :<div class="desc">上一个或下一个被高亮显示的错误<span class="origin">Next/previous highlighted error</span></div></dd>
    <dd>`F4, Ctrl + Enter` :<div class="desc">跳转到源代码<span class="origin">Jump to source</span></div></dd>
    <dd>`Alt + Home` :<div class="desc">通过弹出的导航栏选择文件<span class="origin">Jump to navigation bar</span></div></dd>
    <dd>`F11` :<div class="desc">设置/取消标记<span class="origin">Toggle bookmark</span></div></dd>
    <dd>`Ctrl + F11` :<div class="desc">设置/取消指定类型的标记<span class="origin">Toggle bookmark with mnemonic</span></div></dd>
    <dd>`Ctrl + #[0-9]` :<div class="desc">跳转到指定类型的标记<span class="origin">Go to numbered bookmark</span></div></dd>
    <dd>`Shift + F11` :<div class="desc">显示标记<span class="origin">Show bookmarks</span></div></dd>
</dl>

<dl class="m-keymap-list">
    <dt>VCS/Local History</dt>
    <dd>`Alt + BackQuote` :<div class="desc">打开`VCS`弹框(记住这个就可以了)<span class="origin">‘VCS’ quick popup</span></div></dd>
    <dd>`Ctrl + K` :<div class="desc">提交项目<span class="origin">Commit project to VCS</span></div></dd>
    <dd>`Ctrl + T` :<div class="desc">更新项目<span class="origin">Update project from VCS</span></div></dd>
    <dd>`Alt + Shift + C` :<div class="desc">查看最新改变<span class="origin">View recent changes</span></div></dd>
</dl>


<dl class="m-keymap-list">
    <dt>Search/Replace</dt>
    <dd>`Ctrl + F` :<div class="desc">查找<span class="origin">Find</span></div></dd>
    <dd>`F3` :<div class="desc">查找下一个<span class="origin">Find next</span></div></dd>
    <dd>`Shift + F3` :<div class="desc">查找上一个<span class="origin">Find previous</span></div></dd>
    <dd>`Ctrl + R` :<div class="desc">替换<span class="origin">Replace</span></div></dd>
    <dd>`Ctrl + Shift + F` :<div class="desc">全文搜索<span class="origin">Find in path</span></div></dd>
    <dd>`Ctrl + Shift + R` :<div class="desc">全文替换<span class="origin">Replace in path</span></div></dd>
</dl>


<dl class="m-keymap-list">
    <dt>Usage Search</dt>
    <dd>`Alt + F7 / Ctrl + F7` :<div class="desc">查看被引用的(方法, 变量等)<span class="origin">Find usages / Find usages in file</span></div></dd>
    <dd>`Ctrl + Shift + F7` :<div class="desc">高亮被引用的(方法, 变量等)<span class="origin">Highlight usages in file</span></div></dd>
    <dd>`Ctrl + Alt + F7` :<div class="desc">弹框显示引用的位置<span class="origin">Show usages</span></div></dd>
</dl>


<dl class="m-keymap-list">
    <dt>Refactoring</dt>
    <dd>`F5` :<div class="desc">复制<span class="origin">Copy</span></div></dd>
    <dd>`F6` :<div class="desc">移动<span class="origin">Move</span></div></dd>
    <dd>`Alt + Delete` :<div class="desc">安全删除<span class="origin">Safe delete</span></div></dd>
    <dd>`Shift + F6` :<div class="desc">重命名<span class="origin">Rename</span></div></dd>
    <dd>`Ctrl + Alt + N` :<div class="desc">嵌入变量<span class="origin">Inline variable</span></div></dd>
    <dd>`Ctrl + Alt + M` :<div class="desc">提取方法<span class="origin">Extract method</span></div></dd>
    <dd>`Ctrl + Alt + V` :<div class="desc">引入局部变量<span class="origin">Introduce variable</span></div></dd>
    <dd>`Ctrl + Alt + C` :<div class="desc">引入常量<span class="origin">Introduce constant</span></div></dd>
    <dd>`Ctrl + Alt + P` :<div class="desc">采用参数将区域变量改成参数方式传递<span class="origin">Introduce parameter</span></div></dd>
    <dd>`Ctrl + F6` :<div class="desc">改变函数签名(变量名, 类名等等也能改变)<span class="origin">Change function signature</span></div></dd>
</dl>


<dl class="m-keymap-list">
    <dt>General</dt>
    <dd>`Ctrl + Shift + A` :<div class="desc">查找命令<span class="origin">Find action</span></div></dd>
    <dd>`Double Shift` :<div class="desc">搜索所有东西<span class="origin">Search everywhere</span></div></dd>
    <dd>`Alt + #[0-9]` :<div class="desc">打开指定工具栏<span class="origin">Open corresponding tool window</span></div></dd>
    <dd>`Ctrl + Shift + F12` :<div class="desc">编辑面板最大化<span class="origin">Toggle maximizing editor</span></div></dd>
    <dd>`Alt + Shift + F` :<div class="desc">加入收藏<span class="origin">Add to favorites</span></div></dd>
    <dd>`Alt + Shift + I` :<div class="desc">检查当前文件与当前概要文件<span class="origin">Inspect current file with current profile</span></div></dd>
    <dd>`Ctrl + BackQuote` :<div class="desc">快速转换现有组合<span class="origin">Quick switch current scheme</span></div></dd>
    <dd>`Ctrl + Alt + S` :<div class="desc">打开设置面板<span class="origin">Open settings dialog</span></div></dd>
    <dd>`Ctrl + Tab` :<div class="desc">标签和工具窗口之间切换<span class="origin">Switch between tabs and tool window</span></div></dd>
</dl>


<script type="text/javascript">
    seajs.use(["jquery"], function () {
        function initKeymapList() {
            var $list = $(".m-keymap-list");
            $list.on("mouseenter", "dd .desc", function () {
                $(this).addClass("active");
            }).on("mouseleave", "dd .desc", function () {
                $(this).removeClass("active");
            });
        }
        initKeymapList();
    });    
</script>
