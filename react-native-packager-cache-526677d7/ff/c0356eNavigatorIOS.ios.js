










'use strict';var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../../../../react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _components={NavigatorTransitionerIOS:{displayName:'NavigatorTransitionerIOS'},_component:{}};var _reactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/ridwan/source/GithubBrowser/GithubBrowser/node_modules/react-native/Libraries/Components/Navigation/NavigatorIOS.ios.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _reactTransformHmrLibIndexJs2(Component,id);};}

var EventEmitter=require('EventEmitter');
var Image=require('Image');
var NavigationContext=require('NavigationContext');
var RCTNavigatorManager=require('NativeModules').NavigatorManager;
var React=require('React');
var ReactNative=require('ReactNative');
var StaticContainer=require('StaticContainer.react');
var StyleSheet=require('StyleSheet');
var View=require('View');

var invariant=require('fbjs/lib/invariant');
var logError=require('logError');
var requireNativeComponent=require('requireNativeComponent');

var keyMirror=require('fbjs/lib/keyMirror');

var TRANSITIONER_REF='transitionerRef';

var PropTypes=React.PropTypes;

var __uid=0;
function getuid(){
return __uid++;
}var NavigatorTransitionerIOS=_wrapComponent('NavigatorTransitionerIOS')(function(_React$Component){_inherits(NavigatorTransitionerIOS,_React$Component);function NavigatorTransitionerIOS(){var _ref;var _temp,_this,_ret;_classCallCheck(this,NavigatorTransitionerIOS);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=NavigatorTransitionerIOS.__proto__||Object.getPrototypeOf(NavigatorTransitionerIOS)).call.apply(_ref,[this].concat(args))),_this),_this.


requestSchedulingNavigation=function(cb){
RCTNavigatorManager.requestSchedulingJavaScriptNavigation(
ReactNative.findNodeHandle(_this),
logError,
cb);

},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(NavigatorTransitionerIOS,[{key:'render',value:function render()

{
return(
React.createElement(RCTNavigator,this.props));

}}]);return NavigatorTransitionerIOS;}(React.Component));


var SystemIconLabels={
done:true,
cancel:true,
edit:true,
save:true,
add:true,
compose:true,
reply:true,
action:true,
organize:true,
bookmarks:true,
search:true,
refresh:true,
stop:true,
camera:true,
trash:true,
play:true,
pause:true,
rewind:true,
'fast-forward':true,
undo:true,
redo:true,
'page-curl':true};

var SystemIcons=keyMirror(SystemIconLabels);



































































































































































































































var NavigatorIOS=_wrapComponent('_component')(React.createClass({displayName:'NavigatorIOS',

propTypes:{






initialRoute:PropTypes.shape({



component:PropTypes.func.isRequired,





title:PropTypes.string.isRequired,




titleImage:Image.propTypes.source,






passProps:PropTypes.object,






backButtonIcon:Image.propTypes.source,






backButtonTitle:PropTypes.string,





leftButtonIcon:Image.propTypes.source,




leftButtonTitle:PropTypes.string,









leftButtonSystemIcon:PropTypes.oneOf(Object.keys(SystemIcons)),





onLeftButtonPress:PropTypes.func,





rightButtonIcon:Image.propTypes.source,




rightButtonTitle:PropTypes.string,






rightButtonSystemIcon:PropTypes.oneOf(Object.keys(SystemIcons)),





onRightButtonPress:PropTypes.func,




wrapperStyle:View.propTypes.style,




navigationBarHidden:PropTypes.bool,





shadowHidden:PropTypes.bool,




tintColor:PropTypes.string,




barTintColor:PropTypes.string,




titleTextColor:PropTypes.string,





translucent:PropTypes.bool}).

isRequired,





navigationBarHidden:PropTypes.bool,





shadowHidden:PropTypes.bool,





itemWrapperStyle:View.propTypes.style,




tintColor:PropTypes.string,




barTintColor:PropTypes.string,




titleTextColor:PropTypes.string,





translucent:PropTypes.bool,












interactivePopGestureEnabled:PropTypes.bool},



navigator:undefined,
navigationContext:new NavigationContext(),

componentWillMount:function componentWillMount(){


this.navigator={
push:this.push,
pop:this.pop,
popN:this.popN,
replace:this.replace,
replaceAtIndex:this.replaceAtIndex,
replacePrevious:this.replacePrevious,
replacePreviousAndPop:this.replacePreviousAndPop,
resetTo:this.resetTo,
popToRoute:this.popToRoute,
popToTop:this.popToTop,
navigationContext:this.navigationContext};

this._emitWillFocus(this.state.routeStack[this.state.observedTopOfStack]);
},

componentDidMount:function componentDidMount(){
this._emitDidFocus(this.state.routeStack[this.state.observedTopOfStack]);
},

componentWillUnmount:function componentWillUnmount(){
this.navigationContext.dispose();
this.navigationContext=new NavigationContext();
},

getDefaultProps:function getDefaultProps(){
return{
translucent:true};

},

getInitialState:function getInitialState(){
return{
idStack:[getuid()],
routeStack:[this.props.initialRoute],

requestedTopOfStack:0,






observedTopOfStack:0,
progress:1,
fromIndex:0,
toIndex:0,


makingNavigatorRequest:false,



updatingAllIndicesAtOrBeyond:0};

},

_toFocusOnNavigationComplete:undefined,

_handleFocusRequest:function _handleFocusRequest(item){
if(this.state.makingNavigatorRequest){
this._toFocusOnNavigationComplete=item;
}else{
this._getFocusEmitter().emit('focus',item);
}
},

_focusEmitter:undefined,

_getFocusEmitter:function _getFocusEmitter(){

var focusEmitter=this._focusEmitter;
if(!focusEmitter){
focusEmitter=new EventEmitter();
this._focusEmitter=focusEmitter;
}
return focusEmitter;
},

getChildContext:function getChildContext()


{
return{
onFocusRequested:this._handleFocusRequest,
focusEmitter:this._getFocusEmitter()};

},

childContextTypes:{
onFocusRequested:React.PropTypes.func,
focusEmitter:React.PropTypes.instanceOf(EventEmitter)},


_tryLockNavigator:function _tryLockNavigator(cb){
this.refs[TRANSITIONER_REF].requestSchedulingNavigation(
function(acquiredLock){return acquiredLock&&cb();});

},

_handleNavigatorStackChanged:function _handleNavigatorStackChanged(e){
var newObservedTopOfStack=e.nativeEvent.stackLength-1;
this._emitDidFocus(this.state.routeStack[newObservedTopOfStack]);

invariant(
newObservedTopOfStack<=this.state.requestedTopOfStack,
'No navigator item should be pushed without JS knowing about it %s %s',newObservedTopOfStack,this.state.requestedTopOfStack);

var wasWaitingForConfirmation=
this.state.requestedTopOfStack!==this.state.observedTopOfStack;
if(wasWaitingForConfirmation){
invariant(
newObservedTopOfStack===this.state.requestedTopOfStack,
'If waiting for observedTopOfStack to reach requestedTopOfStack, '+
'the only valid observedTopOfStack should be requestedTopOfStack.');

}









var nextState={
observedTopOfStack:newObservedTopOfStack,
makingNavigatorRequest:false,
updatingAllIndicesAtOrBeyond:null,
progress:1,
toIndex:newObservedTopOfStack,
fromIndex:newObservedTopOfStack};

this.setState(nextState,this._eliminateUnneededChildren);
},

_eliminateUnneededChildren:function _eliminateUnneededChildren(){



var updatingAllIndicesAtOrBeyond=
this.state.routeStack.length>this.state.observedTopOfStack+1?
this.state.observedTopOfStack+1:
null;
this.setState({
idStack:this.state.idStack.slice(0,this.state.observedTopOfStack+1),
routeStack:this.state.routeStack.slice(0,this.state.observedTopOfStack+1),

requestedTopOfStack:this.state.observedTopOfStack,
makingNavigatorRequest:true,
updatingAllIndicesAtOrBeyond:updatingAllIndicesAtOrBeyond});

},

_emitDidFocus:function _emitDidFocus(route){
this.navigationContext.emit('didfocus',{route:route});
},

_emitWillFocus:function _emitWillFocus(route){
this.navigationContext.emit('willfocus',{route:route});
},





push:function push(route){var _this2=this;
invariant(!!route,'Must supply route to push');

if(this.state.requestedTopOfStack===this.state.observedTopOfStack){
this._tryLockNavigator(function(){
_this2._emitWillFocus(route);

var nextStack=_this2.state.routeStack.concat([route]);
var nextIDStack=_this2.state.idStack.concat([getuid()]);
_this2.setState({


idStack:nextIDStack,
routeStack:nextStack,
requestedTopOfStack:nextStack.length-1,
makingNavigatorRequest:true,
updatingAllIndicesAtOrBeyond:nextStack.length-1});

});
}
},





popN:function popN(n){var _this3=this;
if(n===0){
return;
}

if(this.state.requestedTopOfStack===this.state.observedTopOfStack){
if(this.state.requestedTopOfStack>0){
this._tryLockNavigator(function(){
var newRequestedTopOfStack=_this3.state.requestedTopOfStack-n;
invariant(newRequestedTopOfStack>=0,'Cannot pop below 0');
_this3._emitWillFocus(_this3.state.routeStack[newRequestedTopOfStack]);
_this3.setState({
requestedTopOfStack:newRequestedTopOfStack,
makingNavigatorRequest:true,
updatingAllIndicesAtOrBeyond:_this3.state.requestedTopOfStack-n});

});
}
}
},




pop:function pop(){
this.popN(1);
},








replaceAtIndex:function replaceAtIndex(route,index){
invariant(!!route,'Must supply route to replace');
if(index<0){
index+=this.state.routeStack.length;
}

if(this.state.routeStack.length<=index){
return;
}



var nextIDStack=this.state.idStack.slice();
var nextRouteStack=this.state.routeStack.slice();
nextIDStack[index]=getuid();
nextRouteStack[index]=route;

this.setState({
idStack:nextIDStack,
routeStack:nextRouteStack,
makingNavigatorRequest:false,
updatingAllIndicesAtOrBeyond:index});


this._emitWillFocus(route);
this._emitDidFocus(route);
},






replace:function replace(route){
this.replaceAtIndex(route,-1);
},





replacePrevious:function replacePrevious(route){
this.replaceAtIndex(route,-2);
},




popToTop:function popToTop(){
this.popToRoute(this.state.routeStack[0]);
},





popToRoute:function popToRoute(route){
var indexOfRoute=this.state.routeStack.indexOf(route);
invariant(
indexOfRoute!==-1,
'Calling pop to route for a route that doesn\'t exist!');

var numToPop=this.state.routeStack.length-indexOfRoute-1;
this.popN(numToPop);
},





replacePreviousAndPop:function replacePreviousAndPop(route){var _this4=this;

if(this.state.requestedTopOfStack!==this.state.observedTopOfStack){
return;
}
if(this.state.routeStack.length<2){
return;
}
this._tryLockNavigator(function(){
_this4.replacePrevious(route);
_this4.setState({
requestedTopOfStack:_this4.state.requestedTopOfStack-1,
makingNavigatorRequest:true});

});
},





resetTo:function resetTo(route){
invariant(!!route,'Must supply route to push');

if(this.state.requestedTopOfStack!==this.state.observedTopOfStack){
return;
}
this.replaceAtIndex(route,0);
this.popToRoute(route);
},

_handleNavigationComplete:function _handleNavigationComplete(e){

e.stopPropagation();

if(this._toFocusOnNavigationComplete){
this._getFocusEmitter().emit('focus',this._toFocusOnNavigationComplete);
this._toFocusOnNavigationComplete=null;
}
this._handleNavigatorStackChanged(e);
},

_routeToStackItem:function _routeToStackItem(routeArg,i){var
component=routeArg.component,wrapperStyle=routeArg.wrapperStyle,passProps=routeArg.passProps,route=_objectWithoutProperties(routeArg,['component','wrapperStyle','passProps']);var _props=
this.props,itemWrapperStyle=_props.itemWrapperStyle,props=_objectWithoutProperties(_props,['itemWrapperStyle']);
var shouldUpdateChild=
this.state.updatingAllIndicesAtOrBeyond!=null&&
this.state.updatingAllIndicesAtOrBeyond>=i;
var Component=component;
return(
React.createElement(StaticContainer,{key:'nav'+i,shouldUpdate:shouldUpdateChild},
React.createElement(RCTNavigatorItem,_extends({},
props,
route,{
style:[
styles.stackItem,
itemWrapperStyle,
wrapperStyle]}),

React.createElement(Component,_extends({
navigator:this.navigator,
route:route},
passProps)))));




},

_renderNavigationStackItems:function _renderNavigationStackItems(){
var shouldRecurseToNavigator=
this.state.makingNavigatorRequest||
this.state.updatingAllIndicesAtOrBeyond!==null;


var items=shouldRecurseToNavigator?
this.state.routeStack.map(this._routeToStackItem):null;
return(
React.createElement(StaticContainer,{shouldUpdate:shouldRecurseToNavigator},
React.createElement(NavigatorTransitionerIOS,{
ref:TRANSITIONER_REF,
style:styles.transitioner,
vertical:this.props.vertical,
requestedTopOfStack:this.state.requestedTopOfStack,
onNavigationComplete:this._handleNavigationComplete,
interactivePopGestureEnabled:this.props.interactivePopGestureEnabled},
items)));



},

render:function render(){
return(
React.createElement(View,{style:this.props.style},
this._renderNavigationStackItems()));


}}));


var styles=StyleSheet.create({
stackItem:{
backgroundColor:'white',
overflow:'hidden',
position:'absolute',
top:0,
left:0,
right:0,
bottom:0},

transitioner:{
flex:1}});



var RCTNavigator=requireNativeComponent('RCTNavigator');
var RCTNavigatorItem=requireNativeComponent('RCTNavItem');

module.exports=NavigatorIOS;