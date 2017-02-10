/**
 * create by 2017-01-15 pm 16:14
 * @author clevercloud@qq.com
 * 简单加解密
 * 其中使用hexinglun@gmail.com的base64.js
 */

function Crypt(key){
	this.key = BASE64.encoder(key?key:"");
}

Crypt.prototype = {
	constructor: Crypt,
	/**
	 * 秘钥
	 * @var {String}
	 */
	key : "",
	/**
	 * 加密
	 * @param  {String} pData 明文
	 * @return {String} 密文
	 */
	encrypt: function(pData){
		var data = Crypt.stringToBinaryArray(BASE64.encoder(pData));
		var key  = Crypt.stringToBinaryArray(this.key);
		for(var i=0,dLen=data.length,kLen=key.length;i<dLen;i++){
			data[i] += key[i%kLen];
		}
		return BASE64.encoder(Crypt.binaryArrayToString(data));
	},
	/**
	 * 解密
	 * @param  {String} cData 密文
	 * @return {String} 明文
	 */
	decrypt: function(cData){
		var data = BASE64.decoder(cData);
		var key  = Crypt.stringToBinaryArray(this.key);
		for(var i=0,dLen=data.length,kLen=key.length;i<data.length;i++){
			data[i] -= key[i%kLen];
		}
		return Crypt.binaryArrayToString(BASE64.decoder(Crypt.binaryArrayToString(data)));
	}
};

/**
 * 字符串转二进制数组
 * @param  {String} str
 * @return {Array}
 */
Crypt.stringToBinaryArray = function(str){
	return Array.prototype.map.call(str,function(c){return c.charCodeAt(0);});
};
/**
 * 二进制数组转字符串
 * @param  {Array}  arr
 * @return {String}
 */
Crypt.binaryArrayToString = function(arr) {
	return String.fromCharCode.apply(null, arr);
};
