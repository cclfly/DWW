$(function() {
	//获取数据
	var datajson = {
		name: 'cclfly',
		icon: 'image/jdzs_icon.png',
		school: '四川警察学院',
		selected: 0,
		//ismanager: false,
		ismanager: true,

		community: [{
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: true,
			index:0
		},{
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: false,
			index:1
		},{
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: false,
			index:2
		},{
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: false,
			index:3
		},{
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: false,
			index:04
		},{
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: false,
			index:05
		},{
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: false,
			index:06
		},{
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: false,
			index:07
		},{
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: false,
			index:08
		},{
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: false,
			index:09
		} ]
	};
	//获取模板
	var tmplMenu = null;
	var tmplMenuBody = null;
	$.ajax({
		url:"template/menubody.template.html",
		async:false,
		success:function(data){tmplMenuBody=data;}
	});
	$.ajax({
		url:"template/menu.template.html",
		async:false,
		success:function(data){tmplMenu=data;}
	});
	//渲染模板
	Mustache.parse(tmplMenuBody);
	var rMenuBody = Mustache.render(tmplMenuBody, datajson);
	datajson.menuBody = rMenuBody;
	var rMenu = Mustache.render(tmplMenu, datajson);
	$('body').html(rMenu);
	
//事件处理
	//菜单上下滑动
	$('.menu-list-top').on('dragstart',function(){
		var buf = 0;
		var fnDrag = function(e){
			$(this).scrollTop($(this).scrollTop()+(buf-e.detail.deltaY));
			buf = e.detail.deltaY;
		};
		this.addEventListener('drag',fnDrag);
		$(this).one('dragend',function(){
			this.removeEventListener('drag',fnDrag);
		});
	});
	//菜单“社团”点击
	$('.menu-choose-community').on('tap','.menu-list',function(){
		if($(this).attr('index')==datajson.selected)
		{
			return false;
		}
		datajson.community[datajson.selected].slct = false;
		$($(this).parent().children('.menu-list')[datajson.selected]).removeClass('menu-choosed');
		datajson.selected = this.getAttribute('index');
		$($(this).parent().children('.menu-list')[datajson.selected]).addClass('menu-choosed');
		datajson.community[datajson.selected].slct = true;
	});
});