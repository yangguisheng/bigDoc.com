$(function(){
	mui.init()
	//地址管理
	mui("body").on("tap",".address",function(){
		mui.openWindow({
		  url:'address.html'
		});
	})
	//付款
	mui("footer").on("tap",".btn",function(){
		mui.toast("微信付款")
	})
	//数量加减
	mui(".num").on("tap",".minus",function(){
		if($(this).hasClass("disable")){
			mui.toast("该数量不能再减了哟")
		}else{
			var num=$(this).next(".count").data("count");
			$(this).next(".count").data("count",--num).html(num);
			if(num==1){
				$(this).addClass("disable")
			}
			sumPrice();
		}
	})
	mui(".num").on("tap",".add",function(){
		var num=$(this).prev(".count").data("count");
		$(this).prev(".count").data("count",++num).html(num);
		$(this).prev().prev(".minus").removeClass("disable")
		sumPrice();
	})
	//底部总价的变化
	function sumPrice(){
		var sum=$(".count").data("count")*($(".count").data("price"));
		$(".sumPrice").html(sum.toFixed(2));
	}
})
