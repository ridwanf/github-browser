










'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var DialogManagerAndroid=require('NativeModules').DialogManagerAndroid;
var Permissions=require('NativeModules').PermissionsAndroid;var
















































PermissionsAndroid=function(){



function PermissionsAndroid(){_classCallCheck(this,PermissionsAndroid);



this.PERMISSIONS={
READ_CALENDAR:'android.permission.READ_CALENDAR',
WRITE_CALENDAR:'android.permission.WRITE_CALENDAR',
CAMERA:'android.permission.CAMERA',
READ_CONTACTS:'android.permission.READ_CONTACTS',
WRITE_CONTACTS:'android.permission.WRITE_CONTACTS',
GET_ACCOUNTS:'android.permission.GET_ACCOUNTS',
ACCESS_FINE_LOCATION:'android.permission.ACCESS_FINE_LOCATION',
ACCESS_COARSE_LOCATION:'android.permission.ACCESS_COARSE_LOCATION',
RECORD_AUDIO:'android.permission.RECORD_AUDIO',
READ_PHONE_STATE:'android.permission.READ_PHONE_STATE',
CALL_PHONE:'android.permission.CALL_PHONE',
READ_CALL_LOG:'android.permission.READ_CALL_LOG',
WRITE_CALL_LOG:'android.permission.WRITE_CALL_LOG',
ADD_VOICEMAIL:'com.android.voicemail.permission.ADD_VOICEMAIL',
USE_SIP:'android.permission.USE_SIP',
PROCESS_OUTGOING_CALLS:'android.permission.PROCESS_OUTGOING_CALLS',
BODY_SENSORS:'android.permission.BODY_SENSORS',
SEND_SMS:'android.permission.SEND_SMS',
RECEIVE_SMS:'android.permission.RECEIVE_SMS',
READ_SMS:'android.permission.READ_SMS',
RECEIVE_WAP_PUSH:'android.permission.RECEIVE_WAP_PUSH',
RECEIVE_MMS:'android.permission.RECEIVE_MMS',
READ_EXTERNAL_STORAGE:'android.permission.READ_EXTERNAL_STORAGE',
WRITE_EXTERNAL_STORAGE:'android.permission.WRITE_EXTERNAL_STORAGE'};


this.RESULTS={
GRANTED:'granted',
DENIED:'denied',
NEVER_ASK_AGAIN:'never_ask_again'};

}_createClass(PermissionsAndroid,[{key:'checkPermission',value:function checkPermission(









permission){
console.warn('"PermissionsAndroid.checkPermission" is deprecated. Use "PermissionsAndroid.check" instead');
return Permissions.checkPermission(permission);
}},{key:'check',value:function check(





permission){
return Permissions.checkPermission(permission);
}},{key:'requestPermission',value:function requestPermission(















permission,rationale){var response;return regeneratorRuntime.async(function requestPermission$(_context){while(1){switch(_context.prev=_context.next){case 0:
console.warn('"PermissionsAndroid.requestPermission" is deprecated. Use "PermissionsAndroid.request" instead');_context.next=3;return regeneratorRuntime.awrap(
this.request(permission,rationale));case 3:response=_context.sent;return _context.abrupt('return',
response===this.RESULTS.GRANTED);case 5:case'end':return _context.stop();}}},null,this);}},{key:'request',value:function request(












permission,rationale){var shouldShowRationale;return regeneratorRuntime.async(function request$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!
rationale){_context2.next=6;break;}_context2.next=3;return regeneratorRuntime.awrap(
Permissions.shouldShowRequestPermissionRationale(permission));case 3:shouldShowRationale=_context2.sent;if(!

shouldShowRationale){_context2.next=6;break;}return _context2.abrupt('return',
new Promise(function(resolve,reject){
DialogManagerAndroid.showAlert(
rationale,
function(){return reject(new Error('Error showing rationale'));},
function(){return resolve(Permissions.requestPermission(permission));});

}));case 6:return _context2.abrupt('return',


Permissions.requestPermission(permission));case 7:case'end':return _context2.stop();}}},null,this);}},{key:'requestMultiple',value:function requestMultiple(







permissions){
return Permissions.requestMultiplePermissions(permissions);
}}]);return PermissionsAndroid;}();


PermissionsAndroid=new PermissionsAndroid();

module.exports=PermissionsAndroid;