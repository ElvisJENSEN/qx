function sig_f(flag, timestamp_arg, expire_timestamp_arg) {
    // Convert timestamps to Date objects (UTC)
    const timestamp = new Date(timestamp_arg * 1000);
    const expire_timestamp = new Date(expire_timestamp_arg * 1000);

    // Extract UTC components
    const timestamp_mod_10 = timestamp_arg % 10;
    const timestamp_mod_100 = timestamp_arg % 100;
    const timestamp_mon = timestamp.getUTCMonth();
    const timestamp_year = timestamp.getUTCFullYear();
    const timestamp_mday = timestamp.getUTCDate();

    const expire_mon = expire_timestamp.getUTCMonth();
    const expire_year = expire_timestamp.getUTCFullYear();
    const expire_mday = expire_timestamp.getUTCDate();

    // Perform the calculation
    const part1 = (timestamp_mod_10 + 2) * flag;
    const part2 = timestamp_mod_100 +
                  (timestamp_mod_100 * timestamp_mon) +
                  ((timestamp_mod_100 + timestamp_mod_100 * timestamp_mon) * expire_mon) +
                  ((expire_year) * (timestamp_year)) +
                  (timestamp_mday * flag * expire_mday);

    const result = part1 * part2;

    // Convert to 32-bit unsigned integer
    console.log("result:",result);
    return result >>> 0;
}
var body = $response.body;
var obj = JSON.parse(body);
if ("version" in obj) {
  obj['version'] = "premium";
}

let timestamp = obj['timestamp'];
let expire_timestamp = 1908495984;
let sig = sig_f(2,timestamp,expire_timestamp);
obj['expire_timestamp'] = expire_timestamp;
obj['sig'] = sig
body = JSON.stringify(obj);
console.log(body);

$done(body);
