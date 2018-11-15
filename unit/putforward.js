$(function(){
	
	mui.init();
	mui(".middle").on("tap"," .all",function(){
  	
  		var num=$(".top .num").html().trim()*1;
  		document.getElementById("money").value=num
	})
	mui(".mui-content").on("tap"," .btn",function(){
  	
  		var sum=$(".top .num").html().trim()*1;
  		var num=document.getElementById("money").value;
  		if(num){
  			if(num>sum){
	  			mui.toast('余额不足，请重新输入');
	  			document.getElementById("money").value="";
	  			$(".middle .number").focus()
	  		}else{
	  			mui.ajax('http://server-name/login.php',{
					data:{
						username:'username',
						password:'password'
					},
					dataType:'json',//服务器返回json格式数据
					type:'post',//HTTP请求类型
					timeout:10000,//超时时间设置为10秒；
					headers:{'Content-Type':'application/json'},	              
					success:function(data){
						//服务器返回响应，根据响应结果，分析是否登录成功；
						console.log(data)
					},
					error:function(xhr,type,errorThrown){
						//异常处理；
						console.log(type);
					}
				});
	  		}
  		}else{
  			mui.toast('请输入提现金额');
  			$(".middle .number").focus()
  		}
  		
	})
})
