'use strict';const a6_0xcb62dd=a6_0x3d04;(function(_0x41314a,_0x2f9502){const _0x5190b3=a6_0x3d04,_0x38e20d=_0x41314a();while(!![]){try{const _0x307332=parseInt(_0x5190b3(0x157))/0x1*(parseInt(_0x5190b3(0x159))/0x2)+parseInt(_0x5190b3(0x15b))/0x3*(-parseInt(_0x5190b3(0x14a))/0x4)+parseInt(_0x5190b3(0x152))/0x5+parseInt(_0x5190b3(0x154))/0x6*(parseInt(_0x5190b3(0x14e))/0x7)+-parseInt(_0x5190b3(0x150))/0x8+-parseInt(_0x5190b3(0x162))/0x9+-parseInt(_0x5190b3(0x149))/0xa*(-parseInt(_0x5190b3(0x14b))/0xb);if(_0x307332===_0x2f9502)break;else _0x38e20d['push'](_0x38e20d['shift']());}catch(_0x269757){_0x38e20d['push'](_0x38e20d['shift']());}}}(a6_0x29d7,0xafc02));function a6_0x3d04(_0x1eaaf1,_0x30d333){const _0x29d7f2=a6_0x29d7();return a6_0x3d04=function(_0x3d04cb,_0x2169d7){_0x3d04cb=_0x3d04cb-0x146;let _0x3e5369=_0x29d7f2[_0x3d04cb];return _0x3e5369;},a6_0x3d04(_0x1eaaf1,_0x30d333);}var __importDefault=this&&this[a6_0xcb62dd(0x15a)]||function(_0x21530b){const _0x4ca37e=a6_0xcb62dd;return _0x21530b&&_0x21530b[_0x4ca37e(0x155)]?_0x21530b:{'default':_0x21530b};};Object[a6_0xcb62dd(0x153)](exports,'__esModule',{'value':!![]});const AesHelper_1=__importDefault(require(a6_0xcb62dd(0x15e))),HmacHelper_1=__importDefault(require('./HmacHelper')),InvalidTokenSignatureError_1=__importDefault(require(a6_0xcb62dd(0x161)));class Wrapper{static[a6_0xcb62dd(0x163)](_0x22336a){const _0x572a8e=a6_0xcb62dd,_0x5b8870=AesHelper_1[_0x572a8e(0x156)][_0x572a8e(0x151)](Buffer[_0x572a8e(0x15f)](JSON[_0x572a8e(0x160)](_0x22336a)))[_0x572a8e(0x14d)](_0x572a8e(0x14c)),_0x5c84c3=HmacHelper_1['default']['caculateHmacSignature'](Buffer[_0x572a8e(0x15f)](String(process['env'][_0x572a8e(0x15d)])+'.'+_0x5b8870))[_0x572a8e(0x14d)](_0x572a8e(0x14c));return{'clientId':String(process['env'][_0x572a8e(0x15d)]),'params':_0x5b8870,'signature':_0x5c84c3};}static[a6_0xcb62dd(0x148)](_0x2a7e70){const _0xa1ceac=a6_0xcb62dd,_0x5d8bd7=Buffer[_0xa1ceac(0x15f)](_0x2a7e70[_0xa1ceac(0x146)],_0xa1ceac(0x14c)),_0x258fd2=Buffer[_0xa1ceac(0x15f)](_0x2a7e70['signature'],'base64'),_0x1ef1a3=HmacHelper_1[_0xa1ceac(0x156)][_0xa1ceac(0x14f)](_0x5d8bd7);if(_0x258fd2[_0xa1ceac(0x147)](_0x1ef1a3)){const _0x26e119=JSON[_0xa1ceac(0x158)](AesHelper_1[_0xa1ceac(0x156)][_0xa1ceac(0x15c)](_0x5d8bd7)[_0xa1ceac(0x14d)]());return _0x26e119;}throw new InvalidTokenSignatureError_1[(_0xa1ceac(0x156))]('Signatures\x20not\x20match');}}exports[a6_0xcb62dd(0x156)]=Wrapper;function a6_0x29d7(){const _0x5671ef=['11QwzogI','base64','toString','7TYEWFZ','caculateHmacSignature','1290600ZmaupF','encrypt','23870CTWGKf','defineProperty','6421704ynDbBS','__esModule','default','1HIBqaW','parse','1220018opwXrh','__importDefault','45390jIjaeN','decrypt','CAMDIGIKEY_CLIENT_ID','./AesHelper','from','stringify','../error/InvalidTokenSignatureError','3952053FPZwrP','wrapRequest','data','equals','unwrapResponse','8910390MSFzAS','332Lmquug'];a6_0x29d7=function(){return _0x5671ef;};return a6_0x29d7();}