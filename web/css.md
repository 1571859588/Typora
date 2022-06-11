# 样式

## 优先级

内嵌样式>内部样式>外部样式>浏览器默认

## 内嵌样式

![image-20220516220903961](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516220903961.png)

## 内部样式

![image-20220516220440708](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516220440708.png)

## 外部样式

```html
<link type="text/css" rel="stylesheet" href="css/mycss.css">
```

或者

```html
@import url(css/mycss.css)
```

### 区别

1. 引入文件

   1. link可以引入样式和其他文件
   2. 而@import只能引入css文件

2. 加载时间顺序不同

   1. link先引入后加载body的html，故样式渲染的比较好
   2. 而@import则是在加载完body之后再加载@import

3. 兼容性

   1. link大多数浏览器都能兼容
   2. 而@import要求有点高

4. 改变样式

   1. link可以通过其他方法改变样式
   2. 而@import不能改变

   



# 选择器

## 基本选择器

### 优先级

ID>类>标签>通用

### id

```html
<div id="mypp">//id要唯一
</div>
```

```css
#mypp{
    margin:0px;
    width:300px;//css最后一个属性的分号可以不写
}
```

### class

```htm
<div class="mypp">//id要唯一
</div>
```

```css
.mypp{
    margin:0px;
    width:300px;//css最后一个属性的分号可以不写
}
```

### 通用选择器

```css
*{//全局
	color:red;
}
```

### 标签选择器

```css
div{
    margin:0;
}
```

## 组合选择器

### 多元素(,)

### 后代选择器（空格）

### 子选择器（>）

直接孩子节点

###  相邻兄弟（+）

### 普通兄弟（~）

## 属性选择器

```css
input[name=username]{
    border:3px dotted red;
}
```

```html
<input name="username" type="text">
```

