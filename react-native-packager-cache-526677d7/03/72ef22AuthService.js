var _buffer=require('buffer');var _buffer2=babelHelpers.interopRequireDefault(_buffer);
var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=babelHelpers.interopRequireDefault(_lodash);

var authKey='auth';
var userKey='user';var

AuthService=function(){function AuthService(){babelHelpers.classCallCheck(this,AuthService);}babelHelpers.createClass(AuthService,[{key:'getAuthInfo',value:function getAuthInfo(
cb){
_reactNative.AsyncStorage.multiGet([authKey,userKey],function(err,val){
if(err){
return cb(err);
}

if(!val){
return cb();
}

var zippedObj=_lodash2.default.zipObject(val);

if(!zippedObj[authKey]){
return cb();
}

var authInfo={
header:{
Authorization:'Basic'+zippedObj[authKey]},

user:JSON.parse(zippedObj[userKey])};

return cb(null,authInfo);
});
}},{key:'login',value:function login(
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
[authKey,encodedAuth],
[userKey,JSON.stringify(results)]],
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