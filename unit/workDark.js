$(function(){
	mui.init();
	mui("ul").on("tap",".ppt",function(){
		mui.openWindow({
			url:"ppt.html"
		})
	})
})
