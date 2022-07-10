//git 最常用的代码版本管理工具
/*
git clone 将git仓库克隆至本地
git branch 查看分支
git status 查看状态
git diff 查看修改内容
git add . 把当前⽬录及其⼦⽬录下所有变更都加⼊到暂存区
git commit -m "xxx" 创建正式的 commit，也就是把当前的数据提交上去
git remote 用于在远程仓库的操作
git push （remote名称 分⽀名） 把本地分⽀ push 到远端
 */

//多人开发模拟
/*
1.小明 创建个人分支并切换到该分支 git checkout -b feature-login
2.小明在该分支上 git add. git commit -m "xxx"
3.切换回master分支
4.小红 创建个人分支并切换到该分支 git checkout -b feature-register
5.小红在该分支上 git add. git commit -m "yyy"
6.此时小红没有feature-login，小明没有feature-register
7.小红开发完了 推送到远端仓库 git push origin feature-register
8.小明开发完了 推送到远端仓库 git push origin feature-login
9.负责人 切换回master分支 git fetch 拉取远端分支
10.负责人 将小红，小明的分支合并到主分支 git merge feature-login git merge feature-register
11.merge时，不同分支代码可能会有冲突，需要解决
12.负责人 将合并后的分支提交到远端 git push origin master
13.小王由于疏忽，直接在master上修改了代码
14.git stash 暂存当前修改
15.此时再切换到自己的分支
16.git stash 释放之前暂存的修改
 */


/*
网页加载过程

dns解析：域名 —》 IP地址
浏览器根据IP地址向服务器发起HTTP请求
服务器处理请求，并返回给浏览器
 */

/*
网页渲染过程

根据HTML代码生成DOM TREE
根据css代码生成cssOM
DOM TREE cssOM 整合生成Render Tree
根据Render Tree渲染页面
遇到<script>则暂停渲染，执行完js代码后，继续加载
直至把Render Tree渲染完成
 */

/*
window.onload 页面全部资源加载完，包括图片等
DOMContentLoaded DOM渲染完即可执行
 */

/*
性能优化原则
1.多使用内存，缓存
2.减少CPU计算量，减少网络加载
 */

/*
加载更快
1.减少资源体积，压缩代码（webpack）
2.减少访问次数，合并代码（webpack），缓存，ssr服务端渲染
 */

/*
渲染更快
1.css放在head中，js放在body最下面
2.懒加载
3.对dom查询进行缓存
4.频繁dom操作，合并一起插入
5.节流，防抖
 */
