'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./node_modules/react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _buffer=require('buffer');var _buffer2=_interopRequireDefault(_buffer);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={Login:{displayName:'Login'}};var _node_modulesReactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/ridwan/source/GithubBrowser/GithubBrowser/Login.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _node_modulesReactTransformHmrLibIndexJs2(Component,id);};}var Login=_wrapComponent('Login')(function(_Component){_inherits(Login,_Component);











function Login(props){_classCallCheck(this,Login);var _this=_possibleConstructorReturn(this,(Login.__proto__||Object.getPrototypeOf(Login)).call(this,
props));

_this.state={
username:'',
password:'',
showProgress:false};


_this.onLoginPressed=_this.onLoginPressed.bind(_this);return _this;
}_createClass(Login,[{key:'render',value:function render()

{var _this2=this;
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



_react3.default.createElement(_reactNative.ActivityIndicator,{
animating:this.state.showProgress,
size:'large',
style:styles.loader})));



}},{key:'onLoginPressed',value:function onLoginPressed()

{var _this3=this;
console.log('Attemping to log in with username '+this.state.username+'and password '+this.state.password);
this.setState({showProgress:true});

var b=new _buffer2.default.Buffer(this.state.username+':'+this.state.password);
var encodedAuth=b.toString('base64');

fetch('https://api.github.com/user',{
headers:{
'Authorization':'Basic '+encodedAuth}}).


then(function(response){
return response.json();
}).
then(function(results){
console.log(results);
_this3.setState({showProgress:false});
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
marginTop:10}});