// 1.创建ajax对象
// 2.连接到服务器
// 3.发送请求
// 4.接受返回值
function ajax(url,fnsucess,fnfailed) {
	// body...
	if (window.XMLHttpRequest) {
					var oAjax=new XMLHttpRequest();
				} 
				else{
					var oAjax=new ActiveXObject('Microsoft.XMLHttp');

				};

				//2.连接到服务器
				//open(方法，文件名，异步传输)
				oAjax.open('GET',url,true);
				//3.发送请求
				oAjax.send();
				//4.接受返回
				oAjax.onreadystatechange=function(){
					   //oAjax.readyState 浏览器和服务器进行到哪一步了 
					   if (oAjax.readyState==4)  //读取完成
					   {
					   		if (oAjax.status==200) 
					   			{   
					   				fnsucess(oAjax.responseText)
					   			}

					   		else{
					   				if (fnfailed) 
					   				{
					   					fnfailed(oAjax.status)
					   				}				   		
					   			}
					   }
				}
			}
