Object.defineProperty(exports,"__esModule",{value:true});





var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');





var _Login=require('./Login');var _Login2=babelHelpers.interopRequireDefault(_Login);var

GithubBrowser=function(_Component){babelHelpers.inherits(GithubBrowser,_Component);function GithubBrowser(){babelHelpers.classCallCheck(this,GithubBrowser);return babelHelpers.possibleConstructorReturn(this,(GithubBrowser.__proto__||Object.getPrototypeOf(GithubBrowser)).apply(this,arguments));}babelHelpers.createClass(GithubBrowser,[{key:'render',value:function render()
{
var message='hello there 2';
return(
_react2.default.createElement(_Login2.default,null));

}}]);return GithubBrowser;}(_react.Component);exports.default=GithubBrowser;



_reactNative.AppRegistry.registerComponent('GithubBrowser',function(){return GithubBrowser;});