	$(document).ready(function(){
		  $('.flexslider').flexslider({
		  	'slideshowSpeed':3000,//修改时间
		    directionNav: true,
		    pauseOnAction: false
		  });
		});  
		function showTab(tabid){
			var father = document.getElementById("container");
			var tab=document.getElementById('tab');
			var tabs = father.children;
			var tabi=tab.children;
			for(var i = 0; i < tabs.length; i++){
				if(tabs[i ].getAttribute("id") == tabid){
					tabs[i ].style.zIndex = "1";
					tabi[i].style.background='#000';
					tabi[i].style.color='white';
				}else{
					tabs[i ].style.zIndex = "0";
					tabi[i].style.background='#d8d8d8';
					tabi[i].style.color='#000';
					
				}
			}
			
		}
		
	function fun(){
			var content1=document.getElementById('content1');
			var arr=[
			'<img src="images/8.gif"/><a href="#">甲骨文和谷歌java版权纠纷将在4月裁决甲骨文和谷歌java版权纠纷将在4月裁决</a><span>2012-03-15</span>',
			'<img src="images/8.gif"/><a href="#">甲骨文和谷歌java版权纠纷将在4月裁决甲骨文和谷歌java版权纠纷将在4月裁决</a><span>2012-03-15</span>',
			'<img src="images/8.gif"/><a href="#">甲骨文和谷歌java版权纠纷将在4月裁决甲骨文和谷歌java版权纠纷将在4月裁决</a><span>2012-03-15</span>',
			'<img src="images/8.gif"/><a href="#">甲骨文和谷歌java版权纠纷将在4月裁决</a><span>2012-03-15</span>',
			'<img src="images/8.gif"/><a href="#">甲骨文和谷歌java版权纠纷将在4月裁决</a><span>2012-03-15</span>',
			'<img src="images/8.gif"/><a href="#">甲骨文和谷歌java版权纠纷将在4月裁决</a><span>2012-03-15</span>',
			'<img src="images/8.gif"/><a href="#">甲骨文和谷歌java版权纠纷将在4月裁决</a><span>2012-03-15</span>'
			];
			var ul=document.createElement('ul');
			for( var i=0;i<arr.length;i++){
				var li=document.createElement('li');
				li.innerHTML=arr[i];
				content1.appendChild(ul).appendChild(li);
			}
		}
		fun();
		//课程体系
		var arr = ['开发语言系列',
			'数据开发与管理系列',
			'Redhat',
			'Cisco',
			'Citrix',
			'ITIL',
			'VMware',
			'CIW',
			'CompTIA',
			'Siemens/SAP',
			'IT Management'
		];
		var ul = document.querySelector('.course_ul');
		for(var i = 0; i < arr.length; i++) {
			var li = document.createElement("li");
			li.innerHTML = '<a href="#">'+arr[i]+'</a><img src="images/8.gif"/>';

			ul.append(li);
		}
		
//热门课程
	var arr1 = [
				{
					"img1":"8.gif",
					"title":"在4月裁决在4月裁决"
				},
				{
					"img1":"8.gif",
					"title":"在4月裁决在4月裁决"
				},
				{
					"img1":"8.gif",
					"title":"在4月裁决在4月裁决"
				},
				{
					"img1":"8.gif",
					"title":"在4月裁决在4月裁决"
				},
				{
					"img1":"8.gif",
					"title":"在4月裁决在"
				},
				{
					"img1":"8.gif",
					"title":"在4月裁决在"
				},
				{
					"img1":"8.gif",
					"title":"在4月裁决在4月裁决"
				}
		];
		var ul1 = document.querySelector('.hot_ul');
		for(var i = 0; i < arr1.length; i++) {
			var li = document.createElement("li");
			li.innerHTML = '<img src="images/'+arr1[i].img1+'"/><a href="#">'+arr1[i].title+'</a>';
			ul1.append(li);
		}
		
		//技术讲堂
		var arr2 = [
				{
					"title":"甲骨文和谷歌java版权纠纷将在4月裁决",
					"time":"2012-03-15"
				},
				{
					"title":"甲骨文和谷歌java版权纠纷将在4月裁决",
					"time":"2012-03-15"
				},
				{
					"title":"甲骨文和谷歌java版权纠纷将在4月裁决",
					"time":"2012-03-15"
				},
				{
					"title":"甲骨文和谷歌java版权纠纷将在4月裁决",
					"time":"2012-03-15"
				},
				{
					"title":"甲骨文和谷歌java版权纠纷将在4月裁决",
					"time":"2012-03-15"
				}
		];
		var ul2 = document.querySelector('.technology_ul');
		for(var i = 0; i < arr2.length; i++) {
			var li = document.createElement("li");
			li.innerHTML = '<img src="images/8.gif"/><a href="#">'+arr2[i].title+'</a><span>'+arr2[i].time+'</span>';

			ul2.append(li);
		}
		//热门讲师
		var arr3 = [
			{
				"img":"laoshi3.gif",
				"name":"陈楠",
				"content":"甲骨文和谷歌java版权纠纷将在4月裁决"
			},
			{
				"img":"laoshi2.jpg",
				"name":"陈楠",
				"content":"甲骨文和谷歌java版权纠纷将在4月裁决"
			},
			{
				"img":"laoshi1.jpg",
				"name":"陈楠",
				"content":"甲骨文和谷歌java版权纠纷将在4月裁决"
			}
		];
		var ul3 = document.querySelector('.hot_teacher');
		for(var i = 0; i < arr2.length; i++) {
			var div = document.createElement("div");
			div.innerHTML = '<img src="images/'+arr3[i].img+'"/><a href="#">'+arr3[i].title+'</a><span>'+arr3[i].time+'</span>';
				div.innerHTML ='<div class="hot_teacher_bom"><div class="hot_teacher_img"><img src="images/'+arr3[i].img+'" alt="" /></div><div class="intro"><h4>'+arr3[i].name+'</h4><p>'+arr3[i].content+'</p></div></div>'
			ul3.append(div);
		}
