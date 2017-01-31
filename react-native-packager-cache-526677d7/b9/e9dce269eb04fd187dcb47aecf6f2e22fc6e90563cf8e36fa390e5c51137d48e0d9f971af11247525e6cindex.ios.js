Object.defineProperty(exports,"__esModule",{value:true});var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./node_modules/react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();






var _reactNative=require('react-native');






var _Login=require('./Login');var _Login2=_interopRequireDefault(_Login);
var _AuthService=require('./AuthService');var _AuthService2=_interopRequireDefault(_AuthService);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={GithubBrowser:{displayName:'GithubBrowser'}};var _node_modulesReactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/ridwan/source/GithubBrowser/GithubBrowser/index.ios.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _node_modulesReactTransformHmrLibIndexJs2(Component,id);};}var GithubBrowser=_wrapComponent('GithubBrowser')(function(_Component){_inherits(GithubBrowser,_Component);


function GithubBrowser(props){_classCallCheck(this,GithubBrowser);var _this=_possibleConstructorReturn(this,(GithubBrowser.__proto__||Object.getPrototypeOf(GithubBrowser)).call(this,
props));

_this.state={
isLoggedIn:false,
checkingAuth:true};

_this.onLogin=_this.onLogin.bind(_this);return _this;
}_createClass(GithubBrowser,[{key:'componentDidMount',value:function componentDidMount()

{var _this2=this;
_AuthService2.default.getAuthInfo(function(err,authInfo){
_this2.setState({
checkingAuth:false,
isLoggedIn:authInfo!=null});

});
}},{key:'onLogin',value:function onLogin()
{
this.setState({isLoggedIn:true});
}},{key:'render',value:function render()
{
if(this.state.checkingAuth){
return(
_react3.default.createElement(_reactNative.View,{style:styles.container},
_react3.default.createElement(_reactNative.ActivityIndicator,{
animating:true,
size:'large',
style:styles.loader})));



}
if(this.state.isLoggedIn){
return(
_react3.default.createElement(_reactNative.View,{style:styles.container},
_react3.default.createElement(_reactNative.Text,{style:styles.welcome},'Logged In')));




}else{
return(
_react3.default.createElement(_Login2.default,{onLogin:this.onLogin}));

}

}}]);return GithubBrowser;}(_react2.Component));exports.default=GithubBrowser;


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#F5FCFF'},

welcome:{
fontSize:20,
textAlign:'center',
margin:10},

instructions:{
textAlign:'center',
color:'#333333',
marginBottom:5}});



_reactNative.AppRegistry.registerComponent('GithubBrowser',function(){return GithubBrowser;});