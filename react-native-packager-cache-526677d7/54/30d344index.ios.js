Object.defineProperty(exports,"__esModule",{value:true});





var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');






var _Login=require('./Login');var _Login2=babelHelpers.interopRequireDefault(_Login);
var _AuthService=require('./AuthService');var _AuthService2=babelHelpers.interopRequireDefault(_AuthService);var

GithubBrowser=function(_Component){babelHelpers.inherits(GithubBrowser,_Component);
function GithubBrowser(props){babelHelpers.classCallCheck(this,GithubBrowser);var _this=babelHelpers.possibleConstructorReturn(this,(GithubBrowser.__proto__||Object.getPrototypeOf(GithubBrowser)).call(this,
props));

_this.state={
isLoggedIn:false,
checkingAuth:true};

_this.onLogin=_this.onLogin.bind(_this);return _this;
}babelHelpers.createClass(GithubBrowser,[{key:'componentDidMount',value:function componentDidMount()

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
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.ActivityIndicator,{
animating:true,
size:'large',
style:styles.loader})));



}
if(this.state.isLoggedIn){
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Text,{style:styles.welcome},'Logged In')));




}else{
return(
_react2.default.createElement(_Login2.default,{onLogin:this.onLogin}));

}

}}]);return GithubBrowser;}(_react.Component);exports.default=GithubBrowser;


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