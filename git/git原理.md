# 版本控制介绍

<img src="C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421150402243.png" alt="image-20220421150402243" />

![image-20220421150837516](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421150837516.png)

分支=>文件的副本

## 分类

![image-20220421150956313](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421150956313.png)

### 本地版本系统：

根据更新差异计算出各版本的文件内容，但不能进行多人协作

### 集中式版本控制：

可以多人协作，管理员可以了解每个人的信息

如果服务器损坏或网速低，就会影响工作

在离线无法工作（无法和服务器交互，回退或更新版本）

### 分布式版本控制系统：

![image-20220421151506974](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421151506974.png)

可以离线工作（离线和本地版本库交互，待有网络时再进行更新）

![image-20220421151710829](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421151710829.png)

![image-20220421152053381](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421152053381.png)

# Git介绍

![image-20220421163105975](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421163105975.png)

![image-20220421163116612](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421163116612.png)

## HTTPS/SSH

两种与远程仓库交互的协议

## Git基本概念

![image-20220421163533597](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421163533597.png)



### ![image-20220421163706691](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421163706691.png)	获取：fetch

只到git仓库（版本库）里。

### 本地仓库=git仓库=版本库

### 克隆clone

从远程仓库拉取信息到工作区并且初始化一个与远程仓库信息一致的版本库

### 拉取pull

从远程仓库拉取信息到工作区并且复制信息到版本库（但是不会新建一个版本库，这一点是**拉取**与**克隆**的区别）

## 工作区、暂存区、Git仓库

## ![image-20220421164446795](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421164446795.png)	远程仓库

![image-20220421170309696](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421170309696.png)

## 分支

### 创建与切换分支

![image-20220421171417417](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421171417417.png)

![image-20220421170918721](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421170918721.png)

创建的分支与远分支是一样的信息，不进行物理拷贝意思是他们共用同一份信息，内存是同样的

![image-20220421171442745](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421171442745.png)

### 分支合并

![image-20220421171529181](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421171529181.png)

需要在非被合并的分支的分支上进行合并

### 删除分支

![image-20220421171642451](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421171642451.png)

# Git基本操作

## Git工具介绍

![image-20220421171741685](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421171741685.png)

## 克隆（clone）

### 命令行方式

![image-20220421171925746](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421171925746.png)

### TortoiseGit(图形化方式)

![image-20220421172247997](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421172247997.png)

## 拉取（pull）

### 命令行方式

![image-20220421172343358](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421172343358.png)

### TortoiseGit(图形化方式)

![image-20220421172558800](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421172558800.png)

## 推送

### 命令行方式

![image-20220421221600338](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421221600338.png)

### TortoiseGit(图形化方式)

![image-20220421221849395](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421221849395.png)

## 合并

### 命令行方式

![image-20220421222259417](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421222259417.png)

### TortoiseGit(图形化方式)

![image-20220421222808277](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421222808277.png)

![image-20220421222823740](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421222823740.png)

# 基于华为云的代码托管实践

## 华为云的代码托管

![image-20220421222959388](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421222959388.png)

## 编码步骤

![image-20220421223237902](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421223237902.png)

## 本地PC：生成SSH密钥

![image-20220421223442045](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421223442045.png)

## 华为云：创建项目

![image-20220421223558420](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421223558420.png)

## 华为云：添加SSH公钥

![image-20220421223656454](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421223656454.png)

## 华为云：设置HTTPS密码（SSH和HTTPS任选其一）

![image-20220421223722936](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421223722936.png)

## 华为云：创建代码仓

![image-20220421223825981](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421223825981.png)

## 本地PC：克隆代码到本地

![image-20220421223923648](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421223923648.png)

## 华为云：云端管理代码

![image-20220421223953665](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220421223953665.png)