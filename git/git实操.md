# 命令行方式

## 创建本地Git仓库

```
git init
```

## 提交修改到本地Git仓库

### 创建文件

```
vim readme.txt
或者
touch a.txt	
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

#### 克隆远程库已经建好的分支到本地并创建此分支

已经创建好远程库的分支之后需要git pull之后下面才生效

```
git checkout -b feature origin/develop
在本地创建feature分支，该分支来自远程库origin的develop分支
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

### 冲突

```
git switch dev 切换到dev分支


向helloworld.md里写入内容"this is dev"
echo "this is dev">>helloworld.md
git add -A 
git commit -m "冲突" 

git switch master
echo "this is master">>helloworld.md
git add -A 
git commit -m "master上冲突" 

合并
git merge dev
```

![image-20220422152338139](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422152338139.png)

这样就冲突了

#### 为什么会冲突

可以通过以下命令查看哪个文件冲突了

```
git status 
```

![image-20220422152626789](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422152626789.png)

其实就是因为dev和master分支的helloworld.txt的不同内容占用同一行，导致无法自动合并，需要人工合并

#### 解决冲突

通过以下方式查看文件哪里冲突了

```
vim helloworld.txt
```

![image-20220422152809378](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422152809378.png)

![image-20220422152824198](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422152824198.png)

手动修改完之后，

依次输入Esc ：wq

保存并退出

```
接着：
git add helloworld.txt
git commit -m "冲突已解决"
```

### 删除分支

#### 删除本地分支

```
git branch -d feature
删除feature分支
```



#### 删除远程库的分支

```
git push origin -d feature
删除远程库origin的feature分支
```

## 拉取远程库的最新修改

```
git pull
```



# 图形界面方式

## 创建本地Git仓库

![image-20220422154334417](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422154334417.png)

![image-20220422154431456](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422154431456.png)

## 提交修改到本地Git仓库

![image-20220422154540893](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422154540893.png)

![image-20220422154702356](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422154702356.png)

## 查看记录

![image-20220422154804427](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422154804427.png)

## 创建分支

![image-20220422154921387](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422154921387.png)![image-20220422154927588](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422154927588.png)

![image-20220422155043502](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422155043502.png)

## 合并分支

### 切换分支

![image-20220422155250134](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422155250134.png)

![image-20220422155258448](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422155258448.png)

### 合并

![image-20220422155426856](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422155426856.png)

![image-20220422155440342](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422155440342.png)

## 解决冲突

步骤同命令行一致

### 合并的时候

冲突了

![image-20220422155802845](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422155802845.png)

点击Resolve

![image-20220422155831984](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422155831984.png)

OK

![image-20220422155841964](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422155841964.png)

### 解决冲突

![image-20220422155956775](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422155956775.png)

![image-20220422160028572](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220422160028572.png)

解决冲突之后还需要提交一下

# 华为云codehub使用教程

## 合并请求

将远程库的分支合并到某分支上

![image-20220424201801485](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220424201801485.png)![image-20220424201814493](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220424201814493.png)

## 标签

![image-20220424201840021](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220424201840021.png)

标签没啥用，就是用于标记一下你觉得比较重要的
