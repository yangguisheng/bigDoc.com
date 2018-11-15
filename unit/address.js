$(function(){
	mui.init();
	mui(".mui-bar-nav").on("tap","a",function(){
		history.go(-1)
	})
	//新增
	mui(".mui-bar-nav").on("tap",".add",function(){
		mui.openWindow({
		  url:'editAddress.html'
		});
	})
	//编辑
	mui("li").on("tap",".edit",function(){
		var id=$(this).parents("li").data("index");
		mui.openWindow({
		  url:'editAddress.html?id='+id
		});
	})
	//删除
	mui("li").on("tap",".del",function(){
		var id=$(this).parents("li").data("index");
		console.log(id);
		var btnArray = ['确定', '取消'];
		mui.confirm('确定要删除这个地址？', '删除提示', btnArray, function(e) {
			if (e.index == 0) {
				console.log("确定")
			} else {
				console.log("取消")
			}
		})
	})
	//选中默认地址
	mui("li").on("tap","input", function () {
		var id=$(this).parents("li").data("index");
		if(!$(this).is(":checked")) {
			if($("input:checked").length>0){
				$("input:checked").get(0).checked=false
			}
		}
	})
})	
