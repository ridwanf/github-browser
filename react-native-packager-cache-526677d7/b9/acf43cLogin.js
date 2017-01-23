'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _buffer=require('buffer');var _buffer2=babelHelpers.interopRequireDefault(_buffer);
var _reactNative=require('react-native');var










Login=function(_Component){babelHelpers.inherits(Login,_Component);
function Login(props){babelHelpers.classCallCheck(this,Login);var _this=babelHelpers.possibleConstructorReturn(this,(Login.__proto__||Object.getPrototypeOf(Login)).call(this,
props));

_this.state={
username:'',
password:'',
showProgress:false};


_this.onLoginPressed=_this.onLoginPressed.bind(_this);return _this;
}babelHelpers.createClass(Login,[{key:'render',value:function render()

{var _this2=this;
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
_react2.default.createElement(_reactNative.Text,{style:styles.buttonText},'Login'))));





}},{key:'onLoginPressed',value:function onLoginPressed()

{
console.log('Attemping to log in with username '+this.state.username+'and password '+this.state.password);
this.setState({showProgress:true});

var b=new _buffer2.default.Buffer('hello');
console.log(b.toString('base64'));









}}]);return Login;}(_react.Component);exports.default=Login;


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