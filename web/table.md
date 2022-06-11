# 表格基本结构

table

- caption 表格标题
- tr 行
- th 单元格标题
- td 单元格内容

![image-20220516143455704](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516143455704.png)

![image-20220516143443435](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516143443435.png)

# 表格基本属性

## align(水平方向)/valign（垂直方向）

![image-20220516143555524](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516143555524.png)

![image-20220516143544991](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516143544991.png)

## 背景background或背景颜色bgcolor

![image-20220516143652990](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516143652990.png)

![image-20220516143704644](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516143704644.png)

## border边框

![image-20220516143735078](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516143735078.png)

![image-20220516143821367](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516143821367.png)

## width/height

![image-20220516143759148](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516143759148.png)

![image-20220516143828232](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516143828232.png)

## cellpadding

控制单元格内容与单元格边框的距离（上下左右）

![image-20220516143926557](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516143926557.png)

![image-20220516143942978](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516143942978.png)

## cellspacing单元格与单元格之间的距离

![image-20220516144324659](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516144324659.png)

![image-20220516144238782](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516144238782.png)

## rules

![image-20220516144423128](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516144423128.png)

![image-20220516144430745](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516144430745.png)



## 改为单实线

![image-20220522151420809](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220522151420809.png)

```css
table{
			border-collapse: collapse;//把双线改为单线	
		}
```

```html
<table id="mytab" align="center" border="1px" role="all" >
			<tr>
				<th>名字</th>
				<th>性别</th>
				<th>学号</th>
			</tr>
			<tr>
				<td>聂云滔</td>
				<td>男</td>
				<td>20212005369</td>
			</tr>
		</table>
```





# 单元格标签

## rowspan

![image-20220516141639675](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516141639675.png)

![image-20220516141807972](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516141807972.png)

![image-20220516141709250](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516141709250.png)

## 对齐方式align/valign

默认是水平左对齐left

![image-20220516142106888](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516142106888.png)

![image-20220516141900367](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516141900367.png)

# 表格行分组

table可由以下4个组成

- caption 标题
- thead 头部
- tbody 内容
- tfoot 底部

![image-20220516142807580](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516142807580.png)

![image-20220516142822067](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516142822067.png)

![image-20220516142824237](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516142824237.png)

![image-20220516142842849](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220516142842849.png)	

# 表格列分组

table:colgroup

