var body = $response.body;
var obj = JSON.parse(body);

obj['data']['vipTime'] = "2099-06-17 18:12:32";
body = JSON.stringify(obj);
console.log(body);

$done(body);
