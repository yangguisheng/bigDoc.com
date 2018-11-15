mui("nav").on("tap", "a", function() {
	var href = $(this).prop("href");
	mui.openWindow({
		url: href
	});
	return false;
})