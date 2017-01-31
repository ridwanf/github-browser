'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./node_modules/react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _buffer=require('buffer');var _buffer2=_interopRequireDefault(_buffer);
var _AuthService=require('./AuthService');var _AuthService2=_interopRequireDefault(_AuthService);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={Login:{displayName:'Login'}};var _node_modulesReactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/ridwan/source/GithubBrowser/GithubBrowser/Login.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _node_modulesReactTransformHmrLibIndexJs2(Component,id);};}var Login=_wrapComponent('Login')(function(_Component){_inherits(Login,_Component);











function Login(props){_classCallCheck(this,Login);var _this=_possibleConstructorReturn(this,(Login.__proto__||Object.getPrototypeOf(Login)).call(this,
props));

_this.state={
username:'',
password:'',
showProgress:false,
success:false,
badCredentials:false,
unknownError:false};


_this.onLoginPressed=_this.onLoginPressed.bind(_this);return _this;
}_createClass(Login,[{key:'render',value:function render()

{var _this2=this;
var errorCtrl=_react3.default.createElement(_reactNative.View,null);

if(!this.state.success&&this.state.badCredentials){
errorCtrl=_react3.default.createElement(_reactNative.Text,{style:styles.error},'That username and password combination did not work');


}
if(!this.state.success&&this.state.unknownError){
errorCtrl=_react3.default.createElement(_reactNative.Text,{style:styles.error},'We experienced an unpexpected issue');


}
return(
_react3.default.createElement(_reactNative.View,{style:styles.container},
_react3.default.createElement(_reactNative.Image,{style:styles.logo,source:require('./images/Octocat.png')}),
_react3.default.createElement(_reactNative.Text,{style:styles.heading},'Github Browser'),


_react3.default.createElement(_reactNative.TextInput,{style:styles.input,
onChangeText:function onChangeText(text){return _this2.setState({username:text});},
placeholder:'Github Username'}),
_react3.default.createElement(_reactNative.TextInput,{style:styles.input,
onChangeText:function onChangeText(text){return _this2.setState({password:text});},
placeholder:'Github Password',secureTextEntry:true}),
_react3.default.createElement(_reactNative.TouchableHighlight,{
onPress:this.onLoginPressed,
style:styles.button},
_react3.default.createElement(_reactNative.Text,{style:styles.buttonText},'Login')),




errorCtrl,

_react3.default.createElement(_reactNative.ActivityIndicator,{
animating:this.state.showProgress,
size:'large',
style:styles.loader})));



}},{key:'onLoginPressed',value:function onLoginPressed()

{var _this3=this;
console.log('Attemping to log in with username '+this.state.username+' and password '+this.state.password);
this.setState({showProgress:true});

_AuthService2.default.login({
username:this.state.username,
password:this.state.password},
function(results){
_this3.setState(_extends({
showProgress:false,
success:results.success,
badCredentials:results.badCredentials,
unknownError:results.unknownError}));

if(results.success&&_this3.props.onLogin){
_this3.props.onLogin();
}
});
}}]);return Login;}(_react2.Component));exports.default=Login;


var styles=_reactNative.StyleSheet.create({
container:{
backgroundColor:'#F5FCFF',
flex:1,
paddingTop:40,
alignItems:'center',
padding:10},

logo:{
width:66,
height:55},

heading:{
fontSize:30,
marginTop:10},

input:{
height:50,
marginTop:10,
padding:4,
fontSize:18,
borderWidth:1,
borderColor:'#48bbec'},

button:{
height:50,
backgroundColor:'#48bbec',
alignSelf:'stretch',
marginTop:10,
justifyContent:'center'},

buttonText:{
fontSize:22,
color:'#FFF',
alignSelf:'center'},

loader:{
marginTop:10},

error:{
color:'red',
paddingTop:10}});