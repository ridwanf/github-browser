'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./node_modules/react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _Feed=require('./Feed');var _Feed2=_interopRequireDefault(_Feed);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={AppContainer:{displayName:'AppContainer'}};var _node_modulesReactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/ridwan/source/GithubBrowser/GithubBrowser/AppContainer.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _node_modulesReactTransformHmrLibIndexJs2(Component,id);};}var AppContainer=_wrapComponent('AppContainer')(function(_Component){_inherits(AppContainer,_Component);







function AppContainer(props){_classCallCheck(this,AppContainer);var _this=_possibleConstructorReturn(this,(AppContainer.__proto__||Object.getPrototypeOf(AppContainer)).call(this,
props));

_this.state={
selectedTab:'feed'};return _this;

}_createClass(AppContainer,[{key:'render',value:function render()

{var _this2=this;
return(
_react3.default.createElement(_reactNative.TabBarIOS,{styles:styles.container},
_react3.default.createElement(_reactNative.TabBarIOS.Item,{
title:'Feed',
selected:this.state.selectedTab=='feed',
icon:require('./images/inbox.png'),
onPress:function onPress(){return _this2.setState({selectedTab:'feed'});}},

_react3.default.createElement(_Feed2.default,null)),

_react3.default.createElement(_reactNative.TabBarIOS.Item,{
title:'Search',
selected:this.state.selectedTab=='search',
icon:require('./images/search.png'),
onPress:function onPress(){return _this2.setState({selectedTab:'search'});}},

_react3.default.createElement(_Feed2.default,null))));



}}]);return AppContainer;}(_react2.Component));exports.default=AppContainer;



var styles=_reactNative.StyleSheet.create({
container:{
backgroundColor:'#F5FCFF',
paddingTop:40,
padding:10,
alignItems:'center',
flex:1},

welcome:{
fontSize:20,
margin:20,
textAlign:'center'}});