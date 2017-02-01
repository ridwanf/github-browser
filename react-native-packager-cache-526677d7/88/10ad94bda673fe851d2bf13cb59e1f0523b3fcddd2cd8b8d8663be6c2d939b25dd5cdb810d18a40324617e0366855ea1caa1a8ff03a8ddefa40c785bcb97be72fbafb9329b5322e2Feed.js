'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./node_modules/react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={Feed:{displayName:'Feed'}};var _node_modulesReactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/ridwan/source/GithubBrowser/GithubBrowser/Feed.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _node_modulesReactTransformHmrLibIndexJs2(Component,id);};}var Feed=_wrapComponent('Feed')(function(_Component){_inherits(Feed,_Component);







function Feed(props){_classCallCheck(this,Feed);var _this=_possibleConstructorReturn(this,(Feed.__proto__||Object.getPrototypeOf(Feed)).call(this,
props));

var ds=new _reactNative.ListView.DataSource({
rowHasChanged:function rowHasChanged(r1,r2){return r1!=r2;}});


_this.state={
dataSource:ds.cloneWithRows(['A','B','C'])};return _this;


}_createClass(Feed,[{key:'renderRow',value:function renderRow(

rowData){
return(
_react3.default.createElement(_reactNative.Text,{style:{
color:'#333',
backgroundColor:'#fff',
alignSelf:'center'}},

rowData));


}},{key:'render',value:function render()

{
return(
_react3.default.createElement(_reactNative.View,{style:{
flex:1,
justifyContent:'flex-start'}},

_react3.default.createElement(_reactNative.ListView,{dataSource:this.state.dataSource,
renderRow:this.renderRow.bind(this)})));


}}]);return Feed;}(_react2.Component));exports.default=Feed;