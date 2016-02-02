…or create a new repository on the command line


echo "# html5" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/huitianji/html5.git
git push -u origin master



git remote add origin https://github.com/huitianji/html5.git
git push -u origin master



.gitignore

输入 touch .gitignore 在文件夹就生成了一个“.gitignore”文件。


$ cat .gitignore
*.[oa]
*~


# 此为注释 – 将被 Git 忽略
*.a       # 忽略所有 .a 结尾的文件
!lib.a    # 但 lib.a 除外
/TODO     # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
build/    # 忽略 build/ 目录下的所有文件
doc/*.txt # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt



指定过滤某种类型的文件：
*.zip
*.rar
*.via
*.tmp
*.err



4.2 b保守模式负责设置哪些文件不被过滤，也就是哪些文件要被跟踪。
跟踪某个文件夹

!/plutommi/mmi

跟踪某类文件

!*.c

!*.h

##资料##
http://createjs.com/