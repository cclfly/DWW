mui.init({
	swipeBack: true //�����һ��رչ���
});
(function($, doc) {
	$.init();
	$.ready(function() {
		//��ͨʾ��
		var departPicker = new $.PopPicker();
		departPicker.setData([{
			value: 'ywj',
			text: '���³� Ҷ�Ľ�'
		}, {
			value: 'aaa',
			text: '�ܾ��� ��AA'
		}, {
			value: 'lj',
			text: '�޼�'
		}, {
			value: 'ymt',
			text: '������'
		}, {
			value: 'shq',
			text: 'ʷǿ'
		}, {
			value: 'zhbh',
			text: '�±���'
		}, {
			value: 'zhy',
			text: 'ׯ��'
		}, {
			value: 'gyf',
			text: '��һ��'
		}, {
			value: 'zhz',
			text: '����'
		}, {
			value: 'gezh',
			text: '����'
		}]);
		var showDepartPickerButton = doc.getElementById('showDepartPicker');
		var departResult = doc.getElementById('departResult');
		showDepartPickerButton.addEventListener('tap', function(event) {
			departPicker.show(function(items) {
				departResult.innerText = JSON.stringify(items[0]);
				//���� false ������ֹѡ���Ĺر�
				//return false;
			});
		}, false);
		
		
		//
		mui('.people_name').on('tap', '.people_motion_icon', function(){
			//alert(this);
			var oUse = this.getElementsByTagName('use')[0];
			if(oUse.getAttribute('xlink:href') == "#ic_expand_more")
			{
				if(this.classList.contains('people_info_card_show'))
				{
					this.classList.remove('people_info_card_show');
					this.parentNode.classList.remove('people_name_show');
				}
				else
				{
					this.classList.add('people_info_card_show');
					this.parentNode.classList.add('people_name_show');
				}
			}
		});
		/*var aMoreIcon = document.getElementsByClassName('people_motion_icon');
		for(var i in aMoreIcon)
		{
			aMoreIcon[i].onclick = function(){
				var oUse = this.getElementsByTagName('use')[0];
				if(oUse.getAttribute('xlink:href') == "#ic_expand_more")
				{
					if(this.classList.contains('people_info_card_show'))
					{
						this.classList.remove('people_info_card_show');
						this.parentNode.classList.remove('people_name_show');
					}
					else
					{
						this.classList.add('people_info_card_show');
						this.parentNode.classList.add('people_name_show');
					}
				}
				//alert(this);
			};
		}*/
	});
})(mui, document);