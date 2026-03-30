var body = $response.body;
var obj = JSON.parse(body);

obj['data']['vipExpireTime'] = "2036-05-05 19:01:33";
obj['data']['expire'] = "2036年5月5日";
obj['data']['levelCn'] = "会员用户";
obj['data']['level'] = "3";
body = JSON.stringify(obj);

$done(body);