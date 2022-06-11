# 表单提交数据

```html
<form name="myfrm" method="get" action="getfrmValue.html" ></form>
```

## 表单元素（input这些）必须用name，跳转的时候url地址才会有显示



## 可以用button代替submit

```html
<a href=# onclick=setUrl()>URL参数</a>
```





示例

### 自定义button提交

<form id="myfrm">
			<input type="radio" name="sex" value="男" />男
			<input type="radio" name="sex" value="女" />女
			<input type="button" onclick="mysubmit()" />
		</form>

```js
function mysubmit(){
	var frm=document.getElementById("myfrm");
	console.log(frm);
	frm.method="get";
	frm.action="getFrmValue.html";
	frm.submit();//提交
}
```

### URL提交

<form id="myfrm">
			<input type="radio" name="sex" value="男" />男
			<input type="radio" name="sex" value="女" />女
			<input type="button" onclick="mysubmit()" value="提交" />
			<a type="button" href="#" onclick="sendValue()">URL提交</a>
		</form>

```js
function sendValue()
{
	window.location.href="http://127.0.0.1:8848/URL%E5%92%8C%E8%A1%A8%E5%8D%95/getFrmValue.html?";
}
```

# 接受表单数据

## 获取url地址

## window.location.href

```js
var href=window.location.href;
alert(href);
```

### 获取主机名

```js
		var hostname=window.location.hostname;
		alert(hostname);
```

### 获取端口号

```js
var port=window.location.port;
alert(port);
```

##  从问号 (?) 开始的 URL（查询部分）

window.location.search

```js
var fraame=window.location.search;
console.log(fraame);
```



### 对表单元素的中文进行解码

decodeURIComponent()

```js
var fraame=window.location.href;
			fraame=decodeURIComponent(fraame);
			alert(fraame);
```

