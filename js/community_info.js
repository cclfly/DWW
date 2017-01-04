mui.init({
	swipeBack: true //启用右滑关闭功能
});
(function($, doc) {
	$.init();
	$.ready(function() {
		//普通示例
		var linkPicker = new $.PopPicker();
		linkPicker.setData([{
			value: 'qq',
			text: 'QQ群'
		}, {
			value: 'weibo',
			text: '新浪微博'
		}, {
			value: 'wechat',
			text: '微信'
		}, {
			value: 'qzone',
			text: 'QQ空间'
		}, {
			value: 'website',
			text: '网站'
		}, {
			value: 'blog',
			text: '博客'
		}, {
			value: 'radio',
			text: '电台'
		}]);
		var showLinkPickerButton = doc.getElementById('showLinkPicker');
		var linkResult = doc.getElementById('showLinkPicker');
		showLinkPickerButton.addEventListener('tap', function(event) {
			linkPicker.show(function(items) {
				linkResult.innerText = JSON.stringify(items[0]);
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
	});
})(mui, document);