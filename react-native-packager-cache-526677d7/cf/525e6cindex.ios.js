Object.defineProperty(exports,"__esModule",{value:true});var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./node_modules/react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();






var _reactNative=require('react-native');





var _Login=require('./Login');var _Login2=_interopRequireDefault(_Login);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={GithubBrowser:{displayName:'GithubBrowser'}};var _node_modulesReactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/ridwan/source/GithubBrowser/GithubBrowser/index.ios.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _node_modulesReactTransformHmrLibIndexJs2(Component,id);};}var GithubBrowser=_wrapComponent('GithubBrowser')(function(_Component){_inherits(GithubBrowser,_Component);function GithubBrowser(){_classCallCheck(this,GithubBrowser);return _possibleConstructorReturn(this,(GithubBrowser.__proto__||Object.getPrototypeOf(GithubBrowser)).apply(this,arguments));}_createClass(GithubBrowser,[{key:'render',value:function render()


{
var message='hello there 2';
return(
_react3.default.createElement(_Login2.default,null));

}}]);return GithubBrowser;}(_react2.Component));exports.default=GithubBrowser;



_reactNative.AppRegistry.registerComponent('GithubBrowser',function(){return GithubBrowser;});