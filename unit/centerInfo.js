$(function(){
	mui.init();
	mui("body").on("tap",".btn",function(){
		var uName=$("#userName").val().trim();
		var phone=$("#phone").val().trim();
		var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
        if(uName){
        	if(phone&&reg.test(phone)){
        		console.log("发送请求")
        	}else{
        		mui.toast("请输入正确的手机号");
        		$("#phone").val("");
        		$("#phone").focus();
        	}
        }else{
        	mui.toast("请输入收件人姓名");
        	$("#userName").focus();
        }
	})
})
