$(function(){
	mui.init()
	var gallery = mui('.mui-slider');
	gallery.slider({
		interval: 0 //自动轮播周期，若为0则不自动播放，默认为0；
	});
	mui("ul").on("tap","li",function(){
		var id=$(this).data("index");
		mui.openWindow({
			url:"detail.html?id="+id
		})
	})
})
