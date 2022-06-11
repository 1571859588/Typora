# 消息提示

## alert()

<a href="#" onclick="shw()">alert（）消息提示对话</a>

## confirm()

```js
function shw()
{
	var s=confirm("消息对话框");
	if(s)alert("正确");
	else alert("取消");
}
```



返回boolean值

## prompt(string1,string2)

```js
function shw()
{
var s=prompt("消息对话框","2adfs");
	alert(s);
}
```



返回值string

不输入的时候返回null表示什么都没有

string2为默认值

string1为提示输入语

## 打开窗口

```js
	window.open("index.html","新","width:400px,height=300px");
```



## 关闭窗口

```js
		window.close();
```

## js遍历 table标签

### 获取table对象

```js
var ObjTable=document.getElementById();
```

### 定位行元素

```js
var ObjTh=ObjTable.rows[i];//通过行序列获取行
```

```js
function delrow(that)
{
    var curRow=that.parentNode.parentNode.rowIndex;//获取当前行的序号
    var ObjTable=document.getElementById("mytable");
    if(confirm("你确定要删除该行数据吗？"))
        ObjTable.deleteRow(curRow);
    var tr=mytable.rows[rowindex];//定位行元素
}
```



### 定位单元格

```js
var Objtd=ObjTr.cells.item(r);//ObjTr为对行定位,r为第几个单元格，从0开始
```

### 对单元格编辑

```js
Obj.innerText=内容
Obj.innerHTML=内容
```

#### innerText的使用

```js
function edit(that)
{
	var mytable=document.getElementById("mytab");
	var rowindex=that.parentNode.parentNode.rowIndex;
	var tr=mytable.rows[rowindex];
	var td=tr.cells.item(2);
	td.innerText=40;
}
```

#### innerHTML的使用

```js
function edit(that)
{
	var mytable=document.getElementById("mytab");
	var rowindex=that.parentNode.parentNode.rowIndex;
	var tr=mytable.rows[rowindex];
	var td=tr.cells.item(2);
	oldid=td.innerText;
	
	var changeid="<input type='text'  value="+oldid+" id='change'/>";
	td.innerHTML=changeid;
	
	var save="<input type='button' value='保存' onclick=save(this) / >";
	var td4=tr.cells.item(3);
	td4.innerHTML=save;
}
```

 

## 对table的编辑操作

```js
ObjTd.innerHTML=新的内容
```

## 对table进行删除行操作

```js
ObjTable.deleteRow(r)//r为索引
```

```js
function delrow(that)
{
	var mytable=document.getElementById("mytab");
	var rowindex=that.parentNode.parentNode.rowIndex;//获取当前行的序号
	alert(rowindex);
	if(confirm("确定删除该行？"))
	mytable.deleteRow(rowindex);
}

```

<table id="mytab" align="center" border="1px" role="all">
			<tr>
				<th>名字</th>
				<th>性别</th>
				<th>学号</th>
				<th>操作</th>
			</tr>
			<tr>
				<td>聂云滔</td>
				<td>男</td>
				<td>20212005369</td>
				<td><input type="button" value="删除" onclick="delrow(this)"/></td>
			</tr>
		</table>

# 把表单内容追加到表格

## 创建行元素

```js
var ObjTr=document.createElement("tr");//创建行元素
```

## 创建列元素

```js
var td1=document.createElement("td");//创建列元素
```

## 添加孩子节点

```js
ObjTr.appendChild(td);//给行添加单元格
Table.appendChild(tr);//给表格添加行
```

示例

```js
var mytable=document.getElementById("mytab");
	var tr=document.createElement("tr");//创建行元素
	var td1=document.createElement("td");//创建单元格
	td1.innerText=name;
	tr.appendChild(td1);
	
	var td2=document.createElement("td");//创建单元格
	td2.innerText=sexx;
	tr.appendChild(td2);
	
	var td3=document.createElement("td");//创建单元格
	td3.innerText=id;
	tr.appendChild(td3);
	
	var td4=document.createElement("td");//创建单元格
	var sel="<input type='button' value='编辑' onclick='edit(this) '/ >";
	td4.innerHTML=sel;
	tr.appendChild(td4);
	
	mytable.appendChild(tr);
```

# 在表格里插入

![image-20220522205204185](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220522205204185.png)

## 获取一行的列个数

```js
var curRowIndex=that.parentNode.parentNode.rowIndex;
var cols=table.rows[curRowIndex].cells.length;
```

## 在当前行前后插入一行

```js
var tr=table.insertRow(curRowIndex);//当前行前插入
var tr=table.insertRow(curRowIndex+1);//当前行后插入
```

## 在插入行里插入列

```js
var tr=table.insertRow(curRowIndex);
var td=tr.insertCell(i);//将列插入到该行第i-1列的位置
```

或

```js
var td=table.rows[i].insertCell(i);//将列插入到第i-1行的第i-1列位置
```

示例

```js
function insert(that)
{
	var table=document.getElementById("mytab");
	var curRowIndex=that.parentNode.parentNode.rowIndex;
	var cols=table.rows[curRowIndex].cells.length;
	
	var sname="<input type='text' onblur='chk(this)' />";//onblurs表示当失去焦点时调用函数
	var sidStr="<input type='text' onblur='chk(this)' />";
	var sexStr="<select onclick=this.parentNode.innerHTML=this.value><option value='男'男>男</option>";//onclick这一串表示点击即确定
	sexStr+="<option value='女'>女</option></select>";
	var op="<input type='button' value='删除' onclick='delrow(this)' />";
	var tds=new Array(sname,sexStr,sidStr,op);
	var tr=table.insertRow(curRowIndex);
	for(var i=0;i<cols;i++)
	{
		var td=tr.insertCell(i);
		td.innerHTML=tds[i];
		console.log(td);
	}
	
}
function chk(that)
{
	var vv=that.value;
	if(vv=='')
	{
		that.value="";
		that.setAttribute('placeholder','请输入');//控制that即文本框的属性
		that.focus();
		return false;
	}
	else
	that.parentNode.innerHTML=vv;//that.parentNode表示单元格
}
```

# 删除列

### ondblclick双击时调用函数

<input type="button" value="aaa" ondblclick="function()"/>



### event事件

<input type="button" value="aaa" ondblclick="editTd()"/>

```js
function editTd()
{
    e=window.event;//window事件
    console.log(e);
    var objTd=e.target;//事件的目标对象
    console.log(objTd);
    var colIndex=objTd.cellIndex;//获取列序号
    console.log(colIndex);
    //删除当前列
    var objTable=document.getElementById("mytable");
    var rows=objTable.rows.length;
    for(var i=0;i<rows;i++)
       	{
            objTable.rows[i].deleteCell(colIndex);//删除该列
        }
    
    //插入一列的代码如下
    /*
    for(var i=0;i<rows;i++)
        {
            var objTd=objTable.rows[i].insertCell(colIndex);//插入列
            objTd.innerHTML="<font size=12 color=red ><b>新增列</b></font>";
        }
        */
}
```

# 通过js创建元素

```js
var mytext=document.createElement("input");
mytext.setAttribute("type","text");//设置属性
mytext.setAttribute("id","city");
document.body.appendChild(mytext);//添加子元素

```

