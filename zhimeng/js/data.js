//热门课程
$.get('data/hot_top.json', function(data) {
				console.log(data);
	$(data).each(function(i, dom) {
		var li = '<li>\
								<img src="images/' + dom.img1 + '"/>\
								<a href="#">' + dom.title + '</a>\
							</li>';
		$('.hot_top ul').append(li);
	})
}, 'json');
//热门新闻
$.get('data/new.json', function(data) {
	//			console.log(data);
	$(data).each(function(i, dom) {
		var li = '<li>\
								<img src="images/8.gif"/>\
								<a href="#">' + dom.title + '</a>\
							</li>';
		$('.hot_top1 ul').append(li);
	})
}, 'json');
//相关文章
$.get('data/article_b.json', function(data) {
	//			console.log(data);
	$(data).each(function(i, dom) {
		var li = '<li>\
								<img src="images/8.gif"/>\
								<a href="#">' + dom.title + '</a>\
							</li>';
		$('.article_b ul').append(li);
	})
}, 'json');
//热门讲师
$.get('data/hot_teacher.json', function(data) {
	//console.log(data)
	$(data).each(function(i, dom) {
		var div = '<div class="hot_teacher_bom">\
							<div class="hot_teacher_img">\
							<img src="images/' + dom.img + '" alt="" />\
						</div>\
						<div class="intro">\
							<h4>' + dom.name + '</h4>\
							<p>' + dom.content + '</p>\
						</div>\
						</div>';
		$('.show').append(div);
	})
}, 'json');