# 

# 命令行方式

## 创建本地Git仓库

```
git init
```

## 提交修改到本地Git仓库

### 创建文件

```
vim readme.txt
```

![image-20220422095911305](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422095911305.png)

然后输入i

表示insert

![image-20220422095842463](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422095842463.png)

输入完内容之后，按Esc退出

输入wq表示保存并退出

![image-20220422100019166](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422100019166.png)

### 查看Git仓库状态

```
git status
```

Untracked files 表示还没有被Git跟踪的文件

Changes to be commited 表示暂存区还未提交到版本库的文件

### 添加到暂存区

添加某文件

```
git add <file> 
```

或添加所有文件

```
git add -A
```

### 提交到版本库

```
git commit -m "提交说明"
```

## 查看历史提交记录

### 查看所有文件的历史记录

```
git log
```

### 查看某一个文件的历史记录

```
git log <file>
```

### 一行显示（简略记录）

```
git log --pretty=oneline
```

## 分支

### 创建分支

```
git branch <newbranchname>
例如
git branch dev
```

### 切换分支

```
git switch <branchname>
例如
git switch dev
其中dev需要是已经创建了的
```

### 合并分支

```
git merge <branchname>
例如上面已经创建好的dev分支里有了新的修改之后，合并到master分支上
git switch master
git merge dev
```

### 查看文件夹内容

```
ll
```

### 解决冲突

```
git switch dev 切换到dev分支


向helloworld.md里写入内容"this is dev"
echo "this is dev">>helloworld.md
git add -A
git commit -m "冲突"
```

