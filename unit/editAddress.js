mui.init()
//城市选择
$("#city-picker").cityPicker({
    toolbarTemplate: '<header class="bar bar-nav">\
    <button class="button button-link pull-right close-picker">确定</button>\
    <h1 class="title">选择收货地址</h1>\
    </header>',
    onClose:function(v){
    	$("#city-picker").val(v.displayValue[0]||"")
    	$("#city-picker1").val(v.displayValue[1]||"")
    	$("#city-picker2").val(v.displayValue[2]||"")
    }
});
$("#city-picker1").cityPicker({
    toolbarTemplate: '<header class="bar bar-nav">\
    <button class="button button-link pull-right close-picker">确定</button>\
    <h1 class="title">选择收货地址</h1>\
    </header>',
    onClose:function(v){
    	$("#city-picker").val(v.displayValue[0]||"")
    	$("#city-picker1").val(v.displayValue[1]||"")
    	$("#city-picker2").val(v.displayValue[2]||"")
    }
});
$("#city-picker2").cityPicker({
    toolbarTemplate: '<header class="bar bar-nav">\
    <button class="button button-link pull-right close-picker">确定</button>\
    <h1 class="title">选择收货地址</h1>\
    </header>',
    onClose:function(v){
    	$("#city-picker").val(v.displayValue[0]||"")
    	$("#city-picker1").val(v.displayValue[1]||"")
    	$("#city-picker2").val(v.displayValue[2]||"")
    }
});
$("body").on("tap",".btn",function(){
	var province=$("#city-picker").val();
	var city=$("#city-picker1").val();
	var area=$("#city-picker2").val();
	if(province&&city){
		var infoAdd=$(".textarea").val();
		if(infoAdd){
			var userName=$(".userName").val().trim();
			var phone=$(".phone").val().trim();
			var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
	        if(userName){
	        	if(phone&&reg.test(phone)){
	        		console.log("发送请求")
	        	}else{
	        		mui.toast("请输入正确的手机号");
	        		$(".phone").val("");
	        		$(".phone").focus();
	        	}
	        }else{
	        	mui.toast("请输入收件人姓名");
	        	$(".userName").focus();
	        }
		}else{
			mui.toast("请填写详细地址");
			$(".textarea").focus()
		}
	}else{
		mui.toast("请选择地址");
	}
})
