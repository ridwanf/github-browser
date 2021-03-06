










'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var Platform=require('Platform');var _require=



require('NativeModules'),ActionSheetManager=_require.ActionSheetManager,ShareModule=_require.ShareModule;
var invariant=require('fbjs/lib/invariant');
var processColor=require('processColor');var




Share=function(){function Share(){_classCallCheck(this,Share);}_createClass(Share,null,[{key:'share',value:function share(

































content){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
invariant(
typeof content==='object'&&content!==null,
'Content to share must be a valid object');

invariant(
typeof content.url==='string'||typeof content.message==='string',
'At least one of URL and message is required');

invariant(
typeof options==='object'&&options!==null,
'Options must be a valid object');


if(Platform.OS==='android'){
invariant(
!content.title||typeof content.title==='string',
'Invalid title: title should be a string.');

return ShareModule.share(content,options.dialogTitle);
}else if(Platform.OS==='ios'){
return new Promise(function(resolve,reject){
ActionSheetManager.showShareActionSheetWithOptions(_extends({},
content,options,{tintColor:processColor(options.tintColor)}),
function(error){return reject(error);},
function(success,activityType){
if(success){
resolve({
'action':'sharedAction',
'activityType':activityType});

}else{
resolve({
'action':'dismissedAction'});

}
});

});
}else{
return Promise.reject(new Error('Unsupported platform'));
}
}},{key:'sharedAction',get:function get()




{return'sharedAction';}},{key:'dismissedAction',get:function get()





{return'dismissedAction';}}]);return Share;}();



module.exports=Share;