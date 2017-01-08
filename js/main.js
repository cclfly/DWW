$(function() {
	//加载页面
	$.ajax({
		type: "get",
		url: "svg/svg-sprite.html",
		async: false,
		success: function(data) {
			new Vue({
				el: "#svg",
				data: {
					svg: data
				}
			});
		}
	});
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
			index: 0
		}, {
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: false,
			index: 1
		}, {
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: false,
			index: 2
		}, {
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: false,
			index: 3
		}, {
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: false,
			index: 04
		}, {
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: false,
			index: 05
		}, {
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: false,
			index: 06
		}, {
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: false,
			index: 07
		}, {
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: false,
			index: 08
		}, {
			name: '金盾之声',
			icon: 'image/jdzs_icon.png',
			post: '0',
			slct: false,
			index: 09
		}]
	};
	var viewjson = {
		activePage:'comm',
		comm: {
			comPeopleNum:5,
			comImage: 'image/jdzs.png'
		}
	};
//获取模板
	//菜单
	$.ajax({
		url: "template/menu.template.html",
		async: false,
		success: function(data) {
			$("body").append(data);
		}
	});
	//社团
	$.ajax({
		url:"template/community.template.html",
		async:false,
		success:function(data){
			new Vue({
				el:"#commPage",
				template:data,
				data:viewjson
			});
		}
	});
	//通讯录
	$.ajax({
		url:"template/contacts.template.html",
		async:false,
		success:function(data){
			new Vue({
				el:"#contPage",
				template:data,
				data:viewjson
			});
		}
	});
	//个人
	$.ajax({
		url:"template/mine.template.html",
		async:false,
		success:function(data){
			new Vue({
				el:"#minePage",
				template:data,
				data:viewjson
			});
		}
	});
//渲染模板
	var tmplMenu = new Vue({
		el: "#offCanvasSide", //"#offCanvasSide",
		data: datajson
	});
	
//事件处理
	//导航
	$('.mui-tab-item').on('tap',function(){
		viewjson.activePage = $(this).attr('href');
	});
	//主页面上下滑动
	mui('.mui-scroll-wrapper').scroll();
	//菜单上下滑动
	$('.menu-list-top')[0].addEventListener('dragstart', function(e) {
		var bufY = 0 - e.detail.deltaY;
		var bufX = 0 - e.detail.deltaX;
		var fnStopPropagation = function(e) {
			e.stopPropagation();
		}
		if(Math.abs(bufY) < Math.abs(bufX)) {
			return;
		}
		$('aside')[0].addEventListener('drag', fnStopPropagation);
		var fnDrag = function(e) {
			var sub = bufY - e.detail.deltaY;
			if(sub != 0) {
				$(this).scrollTop($(this).scrollTop() + (sub));
				bufY = e.detail.deltaY;
			}
		};
		this.addEventListener('drag', fnDrag);
		$(this).one('dragend', function() {
			this.removeEventListener('drag', fnDrag);
			//$('aside')[0].addEventListener('drag',function(e){});
			$('aside')[0].removeEventListener('drag', fnStopPropagation);
		});
	});
	//菜单“社团”点击
	$('.menu-choose-community').on('tap', '.menu-list', function() {
		if($(this).attr('index') == datajson.selected) {
			return false;
		}
		datajson.community[datajson.selected].slct = false;
		$($(this).parent().children('.menu-list')[datajson.selected]).removeClass('menu-choosed');
		datajson.selected = this.getAttribute('index');
		$($(this).parent().children('.menu-list')[datajson.selected]).addClass('menu-choosed');
		datajson.community[datajson.selected].slct = true;
	});
	
	//通讯录点击展开关闭
	mui('.contacts-info').on('tap', '.contacts-name', function() {
		var oInfo = this.parentNode.getElementsByClassName('contacts-detail')[0];
		if(oInfo.classList.contains('contacts-detail-hidden')) {
			oInfo.classList.remove('contacts-detail-hidden');
			this.classList.remove('contacts-name-show');
		} else {
			oInfo.classList.add('contacts-detail-hidden');
			this.classList.add('contacts-name-show');
		}
	});
});