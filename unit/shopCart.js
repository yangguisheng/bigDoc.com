$(function() {
	mui.init();
	//删除
	mui("li").on("tap", ".del", function() {
		var btnArray = ["确定", "取消"];
		var id = $(this).parents("li").data("index")
		mui.confirm("确定删除嘛?", "删除提示", btnArray, function(e) {
			if(e.index == 0) {
				$(this).parents("li").remove()
			} else {

			}
		})
	})
	//加减
	mui("li").on("tap", ".add", function() {
		var id = $(this).parents("li").data("index");
		var num = $(this).parents("li").find(".count").attr("data-count") * 1;
		num++;
		if(num > 1) {
			$(this).parents("li").find(".minus").removeClass("disable")
		}
		$(this).parents("li").find(".count").attr("data-count", num).html(num)
		sumPrice()
	})
	mui("li").on("tap", ".minus", function() {
		if(!$(this).hasClass("disable")) {
			var num = $(this).parents("li").find(".count").attr("data-count");
			num--;
			if(num > 0) {
				$(this).parents("li").find(".count").attr("data-count", num).html(num);
			} else {
				$(this).addClass("disable")
			}
			sumPrice()
		}
	})
	//全选
	$("footer input").click(function() {
		if($(this).is(":checked")) {
			checkAll()
			sumPrice();
		} else {
			uncheckAll()
			$(".sumPrice .price").html(0)
		}
	});
	$("li input").click(function() {
		var len = $("li").length;
		var count = 0;
		$("li input").each(function() {
			if($(this).is(":checked")) {
				count++
			}
		});
		var code_Value = document.getElementById("all");
		if(count == len) {
			code_Value.checked = true;
		} else {
			code_Value.checked = false;
		}
		sumPrice();
	})
	//底部价格变化
	function sumPrice() {
		var sum = 0;
		$("li input").each(function() {
			if($(this).is(":checked")) {
				sum += $(this).parents("li").find(".price").data("price") * ($(this).parents("li").find(".count").attr("data-count")) * 1
			}
		})
		$("#price").html(sum + ".00")
	}
	mui("footer").on("tap", ".btn", function() {
		var bool = false;
		var arrId = [];
		$("li input").each(function() {
			if($(this).is(":checked")) {
				bool = true;
				arrId.push($(this).parents("li").data("index"))
			}
		})
		if(bool) {
			mui.openWindow({
				url: 'pro_info.html'
			});
		} else {
			mui.toast("请选择要结算的商品")
		}
	})
	//全选
	function checkAll() {
		var code_Values = document.getElementsByTagName("input");
		for(i = 0; i < code_Values.length; i++) {
			if(code_Values[i].type == "checkbox") {
				code_Values[i].checked = true;
			}
		}
	}
	//反选
	function uncheckAll() {
		var code_Values = document.getElementsByTagName("input");
		for(i = 0; i < code_Values.length; i++) {
			if(code_Values[i].type == "checkbox") {
				code_Values[i].checked = false;
			}
		}
	}
})