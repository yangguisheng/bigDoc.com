$(function(){
	mui.init();
	//获取地址栏的参数
    function UrlSearch() {
        var name, value;
        var str = location.href; //取得整个地址栏
        var num = str.indexOf("?")
        str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]

        var arr = str.split("&"); //各个参数放到数组里
        for (var i = 0; i < arr.length; i++) {
            num = arr[i].indexOf("=");
            if (num > 0) {
                name = arr[i].substring(0, num);
                value = arr[i].substr(num + 1);
                this[name] = value;
            }
        }
    }
    var Request = new UrlSearch(); //实例化
    var stat = Request.stat*1;//订单状态
   $("nav li[data-index='"+stat+"']").addClass("active");
   info();
    function info(){
    	console.log(stat)
    }
	//查看物流
	mui(".box").on("tap",".see",function(){
		var id=$(this).parents("li").data("index");
		mui.openWindow({
		  url:'404.html'
		});
	})
	//删除订单
	mui(".box").on("tap",".del",function(){
		var id=$(this).parents("li").data("index");
		var btnArray = ['确定', '取消'];
		mui.confirm('确认要删除订单嘛？', '删除提示', btnArray, function(e) {
			if (e.index == 0) {
				console.log("确定")
			} else {
				
			}
		})
	})
	//取消订单
	mui(".box").on("tap",".cancel",function(){
		var id=$(this).parents("li").data("index");
		var btnArray = ['确定', '取消'];
		mui.confirm('确认要取消订单嘛？', '取消提示', btnArray, function(e) {
			if (e.index == 0) {
				console.log("确定")
			} else {
				
			}
		})
	})
	//提醒发货
	mui(".box").on("tap",".remind",function(){
		var id=$(this).parents("li").data("index");
	})
	//评价
	mui(".box").on("tap",".assess",function(){
		var id=$(this).parents("li").data("index");
		mui.openWindow({
		  url:'comment.html?id='+id
		});
	})
	//状态切换
	mui("nav").on("tap","li",function(){
		var index=$(this).data("index")*1;
		$("li.active").removeClass("active");
		$(this).addClass("active");
		mui.openWindow({
		  url:'orderList.html?stat='+index
		});
	})
})
