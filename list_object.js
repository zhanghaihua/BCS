var BCS = require('./bcs.js').BCS;
var fs = require('fs');

/*
var hostname = 'bcs-sandbox.baidu.com';
var ak = "EygRcI86pmJksQP9"; // 用户名
var sk = "kgS7LjDm9h0lVLpKs7m25igsHO9WNy8tH4"; // 密码
*/

var hostname = 'bcs.duapp.com';
var ak = 'yWS3boASGSBCgMwxGkF1ldNR';
var sk = '4F1ww2vXOt1AC8OrRs35vuyTv88AgKZU';


var options = {
    'host': hostname,
    'ak': ak,
    'sk': sk
}

var client = new BCS(options);


client.list_object('lighttest', {'callback' : function(err, res){
	if (err) {
		console.log(res);
	} else {
		console.log( res ? "Object exist!" : "Object may not exist!");
	}
}
});
