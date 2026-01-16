var body = $response.body;
var obj = JSON.parse(body);

// add subscriptionInfo
obj.subscriptionInfo = {
  tier: "premium",
  status: "active",
  state: "canceled",
  platform: "google",
  expiresAt: 1831602415000,
  isSubscription: true,
  isTrial: false
};

// add subscription
obj.subscription = "premium";

body = JSON.stringify(obj);
console.log(body);
$done(body);