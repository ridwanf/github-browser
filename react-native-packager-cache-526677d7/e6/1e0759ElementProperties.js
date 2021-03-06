










'use strict';var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../../../react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={ElementProperties:{displayName:'ElementProperties'}};var _reactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/ridwan/source/GithubBrowser/GithubBrowser/node_modules/react-native/Libraries/Inspector/ElementProperties.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _reactTransformHmrLibIndexJs2(Component,id);};}

var BoxInspector=require('BoxInspector');
var React=require('React');
var StyleInspector=require('StyleInspector');
var StyleSheet=require('StyleSheet');
var Text=require('Text');
var TouchableHighlight=require('TouchableHighlight');
var TouchableWithoutFeedback=require('TouchableWithoutFeedback');
var View=require('View');

var flattenStyle=require('flattenStyle');
var mapWithSeparator=require('mapWithSeparator');
var openFileInEditor=require('openFileInEditor');

var PropTypes=React.PropTypes;var ElementProperties=_wrapComponent('ElementProperties')((_temp=_class=function(_React$Component){_inherits(ElementProperties,_React$Component);function ElementProperties(){_classCallCheck(this,ElementProperties);return _possibleConstructorReturn(this,(ElementProperties.__proto__||Object.getPrototypeOf(ElementProperties)).apply(this,arguments));}_createClass(ElementProperties,[{key:'render',value:function render()
























{var _this2=this;
var style=flattenStyle(this.props.style);

var selection=this.props.selection;
var openFileButton;
var source=this.props.source;var _ref=
source||{},fileName=_ref.fileName,lineNumber=_ref.lineNumber;
if(fileName&&lineNumber){
var parts=fileName.split('/');
var fileNameShort=parts[parts.length-1];
openFileButton=
React.createElement(TouchableHighlight,{
style:styles.openButton,
onPress:openFileInEditor.bind(null,fileName,lineNumber)},
React.createElement(Text,{style:styles.openButtonTitle,numberOfLines:1},
fileNameShort,':',lineNumber));



}


return(
React.createElement(TouchableWithoutFeedback,null,
React.createElement(View,{style:styles.info},
React.createElement(View,{style:styles.breadcrumb},
mapWithSeparator(
this.props.hierarchy,
function(item,i){return(
React.createElement(TouchableHighlight,{
key:'item-'+i,
style:[styles.breadItem,i===selection&&styles.selected],

onPress:function onPress(){return _this2.props.setSelection(i);}},
React.createElement(Text,{style:styles.breadItemText},
getInstanceName(item))));},



function(i){return(
React.createElement(Text,{key:'sep-'+i,style:styles.breadSep},'\u25B8'));})),





React.createElement(View,{style:styles.row},
React.createElement(View,{style:styles.col},
React.createElement(StyleInspector,{style:style}),
openFileButton),



React.createElement(BoxInspector,{style:style,frame:this.props.frame})))));




}}]);return ElementProperties;}(React.Component),_class.propTypes={hierarchy:PropTypes.array.isRequired,style:PropTypes.oneOfType([PropTypes.object,PropTypes.array,PropTypes.number]),source:PropTypes.shape({fileName:PropTypes.string,lineNumber:PropTypes.number})},_temp));


function getInstanceName(instance){
if(instance.getName){
return instance.getName();
}
if(instance.constructor&&instance.constructor.displayName){
return instance.constructor.displayName;
}
return'Unknown';
}

var styles=StyleSheet.create({
breadSep:{
fontSize:8,
color:'white'},

breadcrumb:{
flexDirection:'row',
flexWrap:'wrap',
alignItems:'flex-start',
marginBottom:5},

selected:{
borderColor:'white',
borderRadius:5},

breadItem:{
borderWidth:1,
borderColor:'transparent',
marginHorizontal:2},

breadItemText:{
fontSize:10,
color:'white',
marginHorizontal:5},

row:{
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between'},

col:{
flex:1},

info:{
padding:10},

path:{
color:'white',
fontSize:9},

openButton:{
padding:10,
backgroundColor:'#000',
marginVertical:5,
marginRight:5,
borderRadius:2},

openButtonTitle:{
color:'white',
fontSize:8}});



module.exports=ElementProperties;