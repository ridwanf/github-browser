'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _buffer=require('buffer');var _buffer2=babelHelpers.interopRequireDefault(_buffer);
var _AuthService=require('./AuthService');var _AuthService2=babelHelpers.interopRequireDefault(_AuthService);
var _reactNative=require('react-native');var










Login=function(_Component){babelHelpers.inherits(Login,_Component);
function Login(props){babelHelpers.classCallCheck(this,Login);var _this=babelHelpers.possibleConstructorReturn(this,(Login.__proto__||Object.getPrototypeOf(Login)).call(this,
props));

_this.state={
username:'',
password:'',
showProgress:false,
success:false,
badCredentials:false,
unknownError:false};


_this.onLoginPressed=_this.onLoginPressed.bind(_this);return _this;
}babelHelpers.createClass(Login,[{key:'render',value:function render()

{var _this2=this;
var errorCtrl=_react2.default.createElement(_reactNative.View,null);

if(!this.state.success&&this.state.badCredentials){
errorCtrl=_react2.default.createElement(_reactNative.Text,{style:styles.error},'That username and password combination did not work');


}
if(!this.state.success&&this.state.unknownError){
errorCtrl=_react2.default.createElement(_reactNative.Text,{style:styles.error},'We experienced an unpexpected issue');


}
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Image,{style:styles.logo,source:require('./images/Octocat.png')}),
_react2.default.createElement(_reactNative.Text,{style:styles.heading},'Github Browser'),


_react2.default.createElement(_reactNative.TextInput,{style:styles.input,
onChangeText:function onChangeText(text){return _this2.setState({username:text});},
placeholder:'Github Username'}),
_react2.default.createElement(_reactNative.TextInput,{style:styles.input,
onChangeText:function onChangeText(text){return _this2.setState({password:text});},
placeholder:'Github Password',secureTextEntry:true}),
_react2.default.createElement(_reactNative.TouchableHighlight,{
onPress:this.onLoginPressed,
style:styles.button},
_react2.default.createElement(_reactNative.Text,{style:styles.buttonText},'Login')),




errorCtrl,

_react2.default.createElement(_reactNative.ActivityIndicator,{
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
_this3.setState(babelHelpers.extends({
showProgress:false,
success:results.success,
badCredentials:results.badCredentials,
unknownError:results.unknownError}));

if(results.success&&_this3.props.onLogin){
_this3.props.onLogin();
}
});
}}]);return Login;}(_react.Component);


Login.propTypes={
onLogin:_react2.default.PropTypes.func};exports.default=


Login;

var styles=_reactNative.StyleSheet.create({
container:{
backgroundColor:'#F5FCFF',
paddingTop:40,
padding:10,
alignItems:'center',
flex:1},

logo:{
width:66,
height:55},

heading:{
fontSize:30,
margin:10,
marginBottom:20},

loginInput:{
height:50,
marginTop:10,
padding:4,
fontSize:18,
borderWidth:1,
borderColor:'#48BBEC',
borderRadius:0,
color:'#48BBEC'},

button:{
height:50,
backgroundColor:'#48BBEC',
borderColor:'#48BBEC',
alignSelf:'stretch',
marginTop:10,
justifyContent:'center',
alignItems:'center',
borderRadius:5},

buttonText:{
color:'#fff',
fontSize:24},

loader:{
marginTop:20},

error:{
color:'red',
paddingTop:10}});