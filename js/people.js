mui.init({
	swipeBack: true //启用右滑关闭功能
});
(function($, doc) {
	$.init();
	$.ready(function() {
		//普通示例
		var departPicker = new $.PopPicker();
		departPicker.setData([{
			value: 'ywj',
			text: '董事长 叶文洁'
		}, {
			value: 'aaa',
			text: '总经理 艾AA'
		}, {
			value: 'lj',
			text: '罗辑'
		}, {
			value: 'ymt',
			text: '云天明'
		}, {
			value: 'shq',
			text: '史强'
		}, {
			value: 'zhbh',
			text: '章北海'
		}, {
			value: 'zhy',
			text: '庄颜'
		}, {
			value: 'gyf',
			text: '关一帆'
		}, {
			value: 'zhz',
			text: '智子'
		}, {
			value: 'gezh',
			text: '歌者'
		}]);
		var showDepartPickerButton = doc.getElementById('showDepartPicker');
		var departResult = doc.getElementById('departResult');
		showDepartPickerButton.addEventListener('tap', function(event) {
			departPicker.show(function(items) {
				departResult.innerText = JSON.stringify(items[0]);
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
		
		//↓点击箭头改类
		mui('.people_card').on('tap', '.people_name', function(){
			//alert(this);
			//var oUse = this.getElementsByTagName('use')[0];
			//if(oUse.getAttribute('xlink:href') == "#ic_expand_more")
			//{
				var oInfo = this.parentNode.getElementsByClassName('people_info_card')[0];
				//this.parentNode.parentNode.lastChile
				if(oInfo.classList.contains('people_info_card_show'))
				{
					oInfo.classList.remove('people_info_card_show');
					this.classList.remove('people_name_show');
				}
				else
				{
					oInfo.classList.add('people_info_card_show');
					this.classList.add('people_name_show');
				}
			//}
		});
	});
})(mui, document);