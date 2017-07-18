/**
 * Created by yangjiali on 2017/7/17.
 */
let Mock  = require('mockjs');
let Random = Mock.Random;


module.exports = function() {
	var data = {
		info: [],
		type:{
			a:"a",
			b:"b"
		}
	};

	// var images = [1,2,3].map(x=>Random.image('200x100', Random.color(), Random.word(2,6)));

	for (var i = 0; i < 10; i++) {

		var content = Random.cparagraph(0,10);

		data.info.push({
			id: i,
			name: Random.cname(),
			tel: Mock.mock({
				'regexp|1': /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
			}).regexp
			// tag: Random.cword(2,6),
			// views: Random.integer(100,5000),
			// images: images.slice(0,Random.integer(1,3))
		})
	}

	return data
}