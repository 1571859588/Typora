# 文本属性

```css
.myletter{
    text-index:10px;//首行缩进
    text-align:right;//向右对齐
    vertical-align:bottom;//垂直向下对齐
    letter-spacing:5px;//字符的间距
   	text-decoration:none;//删除超链接的下划线
    
}
```

<p style="letter-spacing:10px">elsjfasldja上的覅f</p>

## text-indent

首段缩进

## text-align

## vertical-align

一般用在单元格里

## word-spacing 

单词，词间距

<p style="word-spacing:10px">i am word</p>

<p style="word-spacing:40px">i am word</p>

## letter-spacing

字符间距

## text-decoration

可以通过这个属性删除超链接的下划线

# 字体属性

## color

文字颜色

## font-size

文字大小

## font-family

字体

<p style="font-family:"宋体"">楷体</p>

## font-weight

字体粗细

<p style="font-weight:bold ">楷体</p>

## line-height

行高

<p style="line-height:10px ">楷体<br/>adsfas</p>

# 背景属性

## background-color

背景颜色

<div style="width:50px;height:50px;background-color:green;border 3px solid blue;" >撒旦发射点</div>

## background-image

background-image:url(路径)

## background-repeat

### background-repeat:no-repeat

不重复（不平铺）

### background-repeat:repeat-x

在水平方向平铺

### background-repeat:repeat-y

在垂直方向平铺

## background-position

### background-position:center;

水平垂直方向居中

### background-position:bottom;

### background-position:top;

## background-size:100%

让背景占满整个背景大小

## background-attachment

### background-attachment:fixed

固定背景

### scroll

背景滚动

# 表格属性

## border

<div style="border:2px dotted blue;width:50px">是是  是</div>

与table里的border不同

## vertical-align(td)

<table style="border:2px dotted green;"><tr> <td>我</td><td>我</td> </tr></table>

## border-collapse

## text-align

## padding

## border-spacing

边框距离

## caption-side

表格标题位置

<table> <caption style="caption-side:bottom">表格标题 <tr> <td>单元格</td> </tr> </caption> </table>

# 列表属性

## list-style-type

列表方式

### list-style-type:none;

无序列表的圆圈啥的都能去掉

## list-style-image

list-style-image:url(路径)

列表背景图

## list-style-position

与标记的对齐方式

默认是外部outside

### list-style-position:inside

与标记内部对齐



# 分类属性

## curson

## display

### display:none

### display:block

### display:inline

## visibility

## position

## float

## clear

