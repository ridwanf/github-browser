










'use strict';var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../../../../react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp2;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={TabBarItemIOS:{displayName:'TabBarItemIOS'}};var _reactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/ridwan/source/GithubBrowser/GithubBrowser/node_modules/react-native/Libraries/Components/TabBarIOS/TabBarItemIOS.ios.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _reactTransformHmrLibIndexJs2(Component,id);};}

var Image=require('Image');
var React=require('React');
var StaticContainer=require('StaticContainer.react');
var StyleSheet=require('StyleSheet');
var View=require('View');
var ColorPropType=require('ColorPropType');

var requireNativeComponent=require('requireNativeComponent');var TabBarItemIOS=_wrapComponent('TabBarItemIOS')((_temp2=_class=function(_React$Component){_inherits(TabBarItemIOS,_React$Component);function TabBarItemIOS(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TabBarItemIOS);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TabBarItemIOS.__proto__||Object.getPrototypeOf(TabBarItemIOS)).call.apply(_ref,[this].concat(args))),_this),_this.





































































state={
hasBeenSelected:false},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TabBarItemIOS,[{key:'componentWillMount',value:function componentWillMount()


{
if(this.props.selected){
this.setState({hasBeenSelected:true});
}
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
if(this.state.hasBeenSelected||nextProps.selected){
this.setState({hasBeenSelected:true});
}
}},{key:'render',value:function render()

{var _props=
this.props,style=_props.style,children=_props.children,props=_objectWithoutProperties(_props,['style','children']);



if(this.state.hasBeenSelected){
var tabContents=
React.createElement(StaticContainer,{shouldUpdate:this.props.selected},
children);

}else{
var tabContents=React.createElement(View,null);
}

return(
React.createElement(RCTTabBarItem,_extends({},
props,{
style:[styles.tab,style]}),
tabContents));


}}]);return TabBarItemIOS;}(React.Component),_class.propTypes=_extends({},View.propTypes,{badge:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number]),badgeColor:ColorPropType,systemIcon:React.PropTypes.oneOf(['bookmarks','contacts','downloads','favorites','featured','history','more','most-recent','most-viewed','recents','search','top-rated']),icon:Image.propTypes.source,selectedIcon:Image.propTypes.source,onPress:React.PropTypes.func,renderAsOriginal:React.PropTypes.bool,selected:React.PropTypes.bool,style:View.propTypes.style,title:React.PropTypes.string}),_temp2));


var styles=StyleSheet.create({
tab:{
position:'absolute',
top:0,
right:0,
bottom:0,
left:0}});



var RCTTabBarItem=requireNativeComponent('RCTTabBarItem',TabBarItemIOS);

module.exports=TabBarItemIOS;