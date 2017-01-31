var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _buffer=require('buffer');var _buffer2=_interopRequireDefault(_buffer);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var authKey='auth';var

AuthService=function(){function AuthService(){_classCallCheck(this,AuthService);}_createClass(AuthService,[{key:'login',value:function login(
creds,cb){
var b=new _buffer2.default.Buffer(creds.username+':'+creds.password);
var encodedAuth=b.toString('base64');

fetch('https://api.github.com/user',{
headers:{
'Authorization':'Basic '+encodedAuth}}).


then(function(response){
if(response.status>=200&&response.status<300){
return response;
}

throw{
badCredentials:response.status==401,
unknownError:response.status!=401};

}).
then(function(response){
return response.json();
}).
then(function(results){
_reactNative.AsyncStorage.multiSet([
['auth',encodedAuth],
['user',JSON.stringify(results)]],
function(err){
if(err){
throw err;
}
return cb({success:true});

});
}).
catch(function(err){
return cb(err);
});
}}]);return AuthService;}();


module.exports=new AuthService();