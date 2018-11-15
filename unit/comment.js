
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
    var id = Request.id*1;//订单状态
    //星星
    mui(".order-list-Below").on("tap","li",function(){
    	var num = $(this).index()+1;
        var len = $(this).index();
        var thats = $(this).parent(".order-list-Below ul").find("li");
        if($(thats).eq(len).attr("class")=="on"){
            if($(thats).eq(num).attr("class")=="on"){
                $(thats).removeClass("on");
                for (var i=0 ; i<num; i++) {
                    $(thats).eq(i).addClass("on");
                }
            }else{
                $(thats).removeClass("on");
                for (var k=0 ; k<len; k++) {
                    $(thats).eq(k).addClass("on");
                }
            }
        }else{
            $(thats).removeClass("on");
            for (var j=0 ; j<num; j++) {
                $(thats).eq(j).addClass("on");
            }
        }
    })
     /*字数限制*/
    $(".sui-textarea").on("input propertychange", function() {
    
        var $this = $(this),
            _val = $this.val(),
            count = "";
        if (_val.length > 20) {
            $this.val(_val.substring(0, 200));
        }
        count = $this.val().length;
        $(".num>span").text(count);
   })
})
    