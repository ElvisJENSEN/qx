var body = $response.body;
var obj = JSON.parse(body);

obj['data']['vipExpireTime'] = "2036-05-05 19:01:33";
obj['data']['expire'] = "2036年5月5日";
body = JSON.stringify(obj);

$done(body);