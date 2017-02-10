var app = {
	name      : "",
	version   : "",
	verComment: "",

	api       : {},
	page	  : {
		active   : "loginPage",
		mainPage : null,
		loginPage: null,
		commPage : null,
		contPage : null,
		minePage : null
	},
	pageData  : {
		mainPage :{
			com:{},
			con:{},
			min:{}
		},
	},

	aAuth 	  : [],
	sAuthType : "",
	isLogin	  : true,
	
	userInfo  : {
		id: "",
		name:"aaaa",
		portraitUrl: "",
		school:"aaaaaaaaaaaaaa",
		coms:[]
	},
	
	cry       : null
};

var isJson = function(obj){ 
	return (typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length);
};
var isString = function(str){
	return (typeof str=='string')&&str.constructor==String;
};

var fnRequestFromServer = function(data,fn){
	if(isJson(data)){
		data = JSON.stringify(data);
	}else if(!isString(data)){
		data = data.toString();
	}
	data = BASE64.encoder(app.userInfo.id.toString() + "@" + app.cry.encrypt(data));
	console.log(data);
	$.ajax({
		type:"post",
		url:app.api.url,
		async:false,
		beforeSend:function(){
			//“加载”样式
		},
		data:{data:data},
		success:function(msg){
			//TODO:解密数据
			msg = JSON.parse(app.cry.decrypt(msg));
			//TODO:处理数据
			fn(msg);
		},
		dataType:"jsonp",
		complete:function(){
			//停止“加载”样式
		}
	});
};
var fnLoadApi = function(){
	$.ajax({
		type:"get",
		url:'conf/server-api.json',
		async:false,
		success:function(api){
			app.api = api;
		},
		dataType:"json"
	});
};

var fnLoginPage = function(){
	$.get('template/login.template.html',{},function(data){
		app.page.loginPage = $(data);
		$('body').html(app.page.loginPage);
	});
};

var fnMainPage = function(){
	$.get('template/menu.template.html',{},function(data){
		app.page.mainPage = $(data);
		$('body').html(app.page.mainPage);
		$('body').addClass('mui-fullscreen');
	});
};

var fnLogoff = function(){
	plus.storage.removeItem("login");
};

var fnStopPropagation = function(e) {
	e.stopPropagation();
};


plusReady = function(){
	// Android处理返回键
	plus.key.addEventListener('backbutton',function(){
//		if(confirm('确认退出？')){
//			plus.runtime.quit();
//		}
	},false);
	//TODO:获取本地缓存
	/*if(plus.storage.getItem("login") == null){
		plus.oauth.getServices(function(s){
			app.aAuth = s;
		},function(e){
			alert(e);
		});
	}*/
};

$(function() {
	fnLoadApi();

	if(window.plus){
		plusReady();
	}else{
		document.addEventListener("plusready",plusReady,false);
	}

	if(!app.isLogin){
		fnLoginPage();
	}else{
		fnMainPage();
	}
});