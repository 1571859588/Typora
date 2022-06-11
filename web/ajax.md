Ajax的定义
	内容
		异步js和xml，包括js，xhtml，css，dom，xml和xstl，xmlhttprequest；
		使用xhtml和css标准化呈现
		dom实现动态显示和交互
		xml和xstl进行数据交换和处理
		使用XMLHttpRequest对象进行异步数据读取
		使用js绑定和处理所有数据
	

	现状和问题
		传统web使用同步交互，会使网页不连贯，需要等待时间，屏幕内容为空白，用户体验不好
		当负载较小时，用户体验影响较小，但负载较大时，响应时间过长，用户体验影响较大
		
	为什么要用ajax
		与传统web不同，ajax采用异步交互 
		需要浏览器先装载ajax引擎
		ajax引擎用js编写，藏在隐藏的框架里，负责编译y用户界面与服务器之间的交互
		可以用js调用ajax引擎代替产生的http用户动作
	
	优势
		减轻服务器的负担，按需取数据，减少冗余请求
		无刷新更新页面，减少用户心理和实际等待时间
		吧服务器负担的工作转嫁到客户端，利用客户端限制的能力来处理，减轻服务器和带宽的负担，节约空间和宽带租用成本
		可以调用外部数据
		不需要下载插件和小程序
		
	劣势
		ajax并不与所有浏览器兼容
		ajax更新页面内容的时候没有刷新整个页面，无法回退页面
		对流媒体支持不太好
		
	ajax应用到的技术
		XMLHttpRequest对象
			是XMLHTTP组件的对象，ajax可以像桌面应用程序一样只同服务器进行数据层面的交换，而不需要每次都刷新界面，也不用每次将数据处理的工作都交给服务器来做
		
		Javascript
			通过js调用XMLHttpRequest对象
		
		DOM
			document等
			
		XML
			可扩展标记语言
			规范地定义结构化数据，使网上传输的数据和文档符合统一的标准
			用XML表述的数据和文档，可以很容易地让所有程序共享


ajax开发框架
	形成一个发送和接受XMLHttpRequest请求的程序框架
	实质上也遵循Request/Server模式
	异步的流程
	流程
		对象初始化	
		发送请求
		服务器接收
		服务器返回
		客户端接收
		修改客户端页面内容
		
	
	第一步	初始化对象并发出XMLHttpRequest请求
		为了让js可以向服务器发送http请求，必须先使用xmlhttprequest对象
		每个浏览器请求不一样
		需要以下面的方式写：
			var xmlhttp;
			function createXMLHttp()
			{
				//IE浏览器
				if(window.ActiveXObject)
				{
					xmlhttp=new ActiveXObject();//IE浏览器创建xmlhttprequest;
				}
				else{
					xmlhttp=new XMLHttpRequest("Microsoft.XMLHTTP");
				}
			}
	
	第二步	指定响应处理函数
		指定当服务器返回信息时客户端的处理方式
		只要将相应的处理函数名称赋值给XMLHttpRequest对象的onreadystatechange属性就可以了
		比如
		xmlhttp.onreadystatechange=callback;
		
		或者使用匿名函数来定义
		如
		xmlhttp.onreadystatechange=function(){};
		
	第三步	发出HTTP请求
		调用XMLHttpRequest对象的open和send方法
		如
		//	open里面有三个参数,分别是 方法|文件|是否为异步请求
		xmlhttp.open("GET",URL,true);
		//把请求发送出去
		xmlhttp.send();
	
		open方法，get，post或head
		第二个是url，只能是同网域的
		
	第四步	处理服务器返回的信息
		首先检查XMLHttpRequest对象的readyState值，判断请求目前的状态
		if(http_request.readyState==4){//信息已经返回，可以开始处理}
	
		服务器返回信息后，还需要判断返回的HTTP状态码，确定返回的页面没有错误
		if(http_request.status==200){//页面正常，可以开始处理信息}
		
		XMLHttpRequest对成功返回的信息有两种处理方式
		responseText:将传回的信息当字符串使用
		responseXML:将传回的信息当XML文档使用，可以用DOM处理