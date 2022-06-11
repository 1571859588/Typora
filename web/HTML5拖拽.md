# 通过onmousedown和onmousemove实现拖动

```js
window.onload=function()//该行代码表示在页面加载的时候调用该函数
{
	var objDiv=document.createElement("div");//
	objDiv.style.width="100px";//用style设置样式属性
	objDiv.style.height="100px";
	objDiv.style.border="1px solid blue";
	objDiv.style.backgroundColor="#ff0000";
	objDiv.style.position="absolute";//因为要拖动，所以要改为绝对位置
	document.body.appendChild(objDiv);
	// alert("sdffs");
	objDiv.onmousedown=function(e)//e是window事件，onmousedown包括鼠标左中右键
	{
		// alert(e.type);
		document.onmousemove=function(e)
		{
			console.log(e.clientX);//获取鼠标的x轴坐标
			console.log(e.clientY);//获取鼠标的y轴坐标
			objDiv.style.left=e.clientX+"px";//left表示div的左边界
			objDiv.style.top=e.clientY+"px";//top表示div的上边界
		}
		if(e.button==2)//表示按下右键,1表示中键,0表示左键
		{
			// alert("按下了右键");
			document.oncontextmenu=function(e)
			{
				e.preventDefault();//阻止打开菜单,组织oncontextmenu的执行
			}
			document.onmousemove=function(e)
			{
				e.preventDefault();//停止移动，阻止onmousemove的执行
			}
		}
	}
	
}
```



## e.clientX  x坐标

## e.clientY  y坐标

## e.button=0|1|2分别表示鼠标左中右三键

## document.oncontextmenu右击鼠标时触发并打开上下文菜单

## e.preventDefault()取消事件的默认动作

# HTML5拖拽实现对单个对象进行拖放

```js
window.onload=function()
{
	var objDiv1=document.createElement("div");//创建一个div元素
	objDiv1.style.width="200px";
	objDiv1.style.height="250px";
	objDiv1.style.border="1px solid red";
	objDiv1.style.margin="0 auto";
	document.body.appendChild(objDiv1);
	
	var objDiv2=document.createElement("div");//创建一个div元素
	objDiv2.style.width="200px";
	objDiv2.style.height="250px";
	objDiv2.style.border="1px solid blue";
	objDiv2.style.margin="0 auto";
	
	objDiv2.style.marginTop="5px";
	document.body.appendChild(objDiv2);
	
	var myimg=document.createElement("img");
	myimg.src="img/10.jpg";
	myimg.draggable=true;//使该对象可以拖拽
	objDiv2.appendChild(myimg);

	//被拖拽的对象相关的事件
	myimg.ondragstart=function(e)//开始拖拽
	{
		console.log(e.type);//事件类型为	dragstart
	}
	myimg.ondrag=function(e)
	{
		console.log(e.type);
		console.log("拖动过程中");
	}
	myimg.ondragend=function(e)
	{
		console.log(e.type);
		console.log("拖动结束");
	}

	//以下四个为承载区事件，承载区为1
	objDiv1.ondragenter=function(e)//进入投放区的时候
	{
		console.log(e.type);
		console.log("进入投放区");
		e.preventDefault();
	}
	objDiv1.ondragover=function(e)
	{
		e.preventDefault();
		console.log("移动");
	}
	objDiv1.ondragleave=function(e)
	{
		e.preventDefault();
		console.log("离开投放区");
	}
	objDiv1.ondrop=function(e)
	{
		console.log(e.type);
		console.log("投放的时候");
		objDiv1.appendChild(myimg);
	}	
	
	objDiv2.ondragenter=function(e)//进入投放区的时候
	{
		console.log(e.type);
		console.log("进入投放区");
		e.preventDefault();
	}
	objDiv2.ondragover=function(e)
	{
		e.preventDefault();
		console.log("移动");
	}
	objDiv2.ondragleave=function(e)
	{
		e.preventDefault();
		console.log("离开投放区");
	}
	objDiv2.ondrop=function(e)
	{
		console.log(e.type);
		console.log("投放的时候");
		objDiv2.appendChild(myimg);
	}	
}
```



## 被拖拽对象设置draggable=true|fasle|auto表示可以拖动|不可以拖动|浏览器自己判断

## 被拖拽对象的事件：

### dragstart:当元素**拖拽开始**触发

### ondrag:在元素**拖拽过程中**触发

### dragend:在元素**拖拽结束**时触发

## 承载区事件：

### dragenter:当拖拽对象**进入投放区**时触发（必须要的）

### dragover:拖拽对象**在投放区内移动**时触发（必须要的）

### dragleave:拖拽对象**没有投放在投放区**时触发

### drop:拖拽对象**投放在投放区**时触发（必须要的）

> tip：dragenter,dragover可能会受到默认事件的影响，所以我们在这两个事件当中使用e.preventDefault()来阻止事件默认事件。

# HTML5实现对多个对象的拖拽

## 法一：

```htm
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
		<style>
			*{
				margin: 0px;
				padding: 0px;
				
			}
			#first{
				width: 400px;
				height: 220px;
				margin: 0 auto;
				border: 1px solid red;
			}
			#second{
				width: 400px;
				height: 220px;
				margin: 0 auto;
				margin-top: 5px;
				border: 1px solid blue;
			}
		</style>
		<script>
			var objImg;
			function startDrag(that)
			{
				objImg=that;
			}
			function enter()
			{
				e=window.event;//通过window对象获取e 
				e.preventDefault();
			}
			function getObj(that)
			{
				// that.appendChild(objImg);//拖拽
				//复制
				var cloneObj=objImg.cloneNode();
				that.appendChild(cloneObj);
			}
		</script>
	</head>
	<body>
		<div id="first" ondragenter="enter()" ondragover="enter()" ondrop="getObj(this)">
			<img src="img/11.JPG" draggable="true" ondragstart="startDrag(this)"/>
			<img src="img/12.JPG" draggable="true" ondragstart="startDrag(this)"/>
			<img src="img/4.JPG" draggable="true" ondragstart="startDrag(this)"/>
		</div>
		<div id="second" ondragenter="enter()" ondragover="enter()" ondrop="getObj(this)"></div>
	</body>
</html>

```

## 法二：通过代码方式编写

