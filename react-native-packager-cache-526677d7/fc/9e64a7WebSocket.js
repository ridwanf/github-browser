










'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var NativeEventEmitter=require('NativeEventEmitter');
var Platform=require('Platform');
var RCTWebSocketModule=require('NativeModules').WebSocketModule;
var WebSocketEvent=require('WebSocketEvent');

var EventTarget=require('event-target-shim');
var base64=require('base64-js');















var CONNECTING=0;
var OPEN=1;
var CLOSING=2;
var CLOSED=3;

var CLOSE_NORMAL=1000;

var WEBSOCKET_EVENTS=[
'close',
'error',
'message',
'open'];


var nextWebSocketId=0;var







WebSocket=function(_EventTarget){_inherits(WebSocket,_EventTarget);


























function WebSocket(url,protocols,options){_classCallCheck(this,WebSocket);var _this=_possibleConstructorReturn(this,(WebSocket.__proto__||Object.getPrototypeOf(WebSocket)).call(this));_this.CONNECTING=CONNECTING;_this.OPEN=OPEN;_this.CLOSING=CLOSING;_this.CLOSED=CLOSED;_this.readyState=CONNECTING;

if(typeof protocols==='string'){
protocols=[protocols];
}

if(!Array.isArray(protocols)){
protocols=null;
}

_this._eventEmitter=new NativeEventEmitter(RCTWebSocketModule);
_this._socketId=nextWebSocketId++;
RCTWebSocketModule.connect(url,protocols,options,_this._socketId);
_this._registerEvents();return _this;
}_createClass(WebSocket,[{key:'close',value:function close(

code,reason){
if(this.readyState===this.CLOSING||
this.readyState===this.CLOSED){
return;
}

this.readyState=this.CLOSING;
this._close(code,reason);
}},{key:'send',value:function send(

data){
if(this.readyState===this.CONNECTING){
throw new Error('INVALID_STATE_ERR');
}

if(typeof data==='string'){
RCTWebSocketModule.send(data,this._socketId);
return;
}


if(ArrayBuffer.isView(data)){

data=data.buffer;
}
if(data instanceof ArrayBuffer){
data=base64.fromByteArray(new Uint8Array(data));
RCTWebSocketModule.sendBinary(data,this._socketId);
return;
}

throw new Error('Unsupported data type');
}},{key:'ping',value:function ping()

{
if(this.readyState===this.CONNECTING){
throw new Error('INVALID_STATE_ERR');
}

RCTWebSocketModule.ping(this._socketId);
}},{key:'_close',value:function _close(

code,reason){
if(Platform.OS==='android'){

var statusCode=typeof code==='number'?code:CLOSE_NORMAL;
var closeReason=typeof reason==='string'?reason:'';
RCTWebSocketModule.close(statusCode,closeReason,this._socketId);
}else{
RCTWebSocketModule.close(this._socketId);
}
}},{key:'_unregisterEvents',value:function _unregisterEvents()

{
this._subscriptions.forEach(function(e){return e.remove();});
this._subscriptions=[];
}},{key:'_registerEvents',value:function _registerEvents()

{var _this2=this;
this._subscriptions=[
this._eventEmitter.addListener('websocketMessage',function(ev){
if(ev.id!==_this2._socketId){
return;
}
_this2.dispatchEvent(new WebSocketEvent('message',{
data:ev.type==='binary'?base64.toByteArray(ev.data).buffer:ev.data}));

}),
this._eventEmitter.addListener('websocketOpen',function(ev){
if(ev.id!==_this2._socketId){
return;
}
_this2.readyState=_this2.OPEN;
_this2.dispatchEvent(new WebSocketEvent('open'));
}),
this._eventEmitter.addListener('websocketClosed',function(ev){
if(ev.id!==_this2._socketId){
return;
}
_this2.readyState=_this2.CLOSED;
_this2.dispatchEvent(new WebSocketEvent('close',{
code:ev.code,
reason:ev.reason}));

_this2._unregisterEvents();
_this2.close();
}),
this._eventEmitter.addListener('websocketFailed',function(ev){
if(ev.id!==_this2._socketId){
return;
}
_this2.readyState=_this2.CLOSED;
_this2.dispatchEvent(new WebSocketEvent('error',{
message:ev.message}));

_this2.dispatchEvent(new WebSocketEvent('close',{
message:ev.message}));

_this2._unregisterEvents();
_this2.close();
})];

}}]);return WebSocket;}(EventTarget.apply(undefined,WEBSOCKET_EVENTS));WebSocket.CONNECTING=CONNECTING;WebSocket.OPEN=OPEN;WebSocket.CLOSING=CLOSING;WebSocket.CLOSED=CLOSED;


module.exports=WebSocket;