const CryptoJS = require("crypto-js");

const stripAuthorizationHeader = (headers) => {
    // the "authorization" header comming from the oauth handshake is a Bearer Token. we dont need that bit....
    return headers.authorization.substring(headers.authorization.indexOf('http'));
}

const getUserHash = (headers) => {
    const deviceApiBaseAddress = stripAuthorizationHeader(headers);
    return CryptoJS.MD5(deviceApiBaseAddress).toString();
}
exports.stripAuthorizationHeader = stripAuthorizationHeader;
exports.getUserHash = getUserHash;