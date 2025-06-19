var body = $response.body;
var obj = JSON.parse(body);

obj['datas']['userFlippedVipFlag'] = 1;
body = JSON.stringify(obj);
console.log(body);

$done(body);