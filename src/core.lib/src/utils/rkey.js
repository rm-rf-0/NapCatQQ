const _0x2a4f1c=_0x4a9e;(function(_0x4e3e4b,_0xd41216){const _0x24d712=_0x4a9e,_0xe86dde=_0x4e3e4b();while(!![]){try{const _0x53b746=-parseInt(_0x24d712(0x18d))/0x1+parseInt(_0x24d712(0x181))/0x2+-parseInt(_0x24d712(0x182))/0x3*(-parseInt(_0x24d712(0x18b))/0x4)+-parseInt(_0x24d712(0x17e))/0x5*(-parseInt(_0x24d712(0x186))/0x6)+-parseInt(_0x24d712(0x183))/0x7+parseInt(_0x24d712(0x17a))/0x8*(parseInt(_0x24d712(0x17f))/0x9)+-parseInt(_0x24d712(0x184))/0xa;if(_0x53b746===_0xd41216)break;else _0xe86dde['push'](_0xe86dde['shift']());}catch(_0x1e13c2){_0xe86dde['push'](_0xe86dde['shift']());}}}(_0x187f,0x7ef8c));function _0x187f(){const _0x536278=['获取rkey失败','HttpGetJson','55XmZZcG','18sHZIsE','nFQbS','1515188ErwCng','9KXpusz','1560062TEVIJa','4126400qSZceh','http://napcat-sign.wumiao.wang:2082/rkey','187806MBCXWr','UrxXW','expired_time','serverUrl','GET','1029892DkvFDC','refreshRkey','1033904KHUExX','sIHFi','isExpired','1260648FlrOVJ','rkeyData'];_0x187f=function(){return _0x536278;};return _0x187f();}function _0x4a9e(_0x3b39e2,_0x2d3455){const _0x187f25=_0x187f();return _0x4a9e=function(_0x4a9e4f,_0x3331ee){_0x4a9e4f=_0x4a9e4f-0x17a;let _0x3ae00c=_0x187f25[_0x4a9e4f];return _0x3ae00c;},_0x4a9e(_0x3b39e2,_0x2d3455);}import{logError}from'@/common/utils/log';import{RequestUtil}from'@/common/utils/request';class RkeyManager{[_0x2a4f1c(0x189)]='';['rkeyData']={'group_rkey':'','private_rkey':'','expired_time':0x0};constructor(_0x5babe1){this['serverUrl']=_0x5babe1;}async['getRkey'](){const _0x13b761=_0x2a4f1c,_0x6dbe10={'nFQbS':_0x13b761(0x17c)};if(this[_0x13b761(0x18f)]())try{await this[_0x13b761(0x18c)]();}catch(_0x44e80e){logError(_0x6dbe10[_0x13b761(0x180)],_0x44e80e);}return this[_0x13b761(0x17b)];}[_0x2a4f1c(0x18f)](){const _0x4ed20b=_0x2a4f1c,_0x1c45ff={'sIHFi':function(_0xb7116b,_0x1a3600){return _0xb7116b/_0x1a3600;},'UrxXW':function(_0x591e52,_0x5d2fdc){return _0x591e52>_0x5d2fdc;}},_0x1fc41f=_0x1c45ff[_0x4ed20b(0x18e)](new Date()['getTime'](),0x3e8);return _0x1c45ff[_0x4ed20b(0x187)](_0x1fc41f,this[_0x4ed20b(0x17b)][_0x4ed20b(0x188)]);}async[_0x2a4f1c(0x18c)](){const _0x135896=_0x2a4f1c;this[_0x135896(0x17b)]=await RequestUtil[_0x135896(0x17d)](this[_0x135896(0x189)],_0x135896(0x18a));}}export const rkeyManager=new RkeyManager(_0x2a4f1c(0x185));