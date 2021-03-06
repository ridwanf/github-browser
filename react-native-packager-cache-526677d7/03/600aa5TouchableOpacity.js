










'use strict';var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../../../../react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _components={_component:{}};var _reactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/ridwan/source/GithubBrowser/GithubBrowser/node_modules/react-native/Libraries/Components/Touchable/TouchableOpacity.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _reactTransformHmrLibIndexJs2(Component,id);};}



var Animated=require('Animated');
var NativeMethodsMixin=require('NativeMethodsMixin');
var React=require('React');
var TimerMixin=require('react-timer-mixin');
var Touchable=require('Touchable');
var TouchableWithoutFeedback=require('TouchableWithoutFeedback');

var ensurePositiveDelayProps=require('ensurePositiveDelayProps');
var flattenStyle=require('flattenStyle');



var PRESS_RETENTION_OFFSET={top:20,left:20,right:20,bottom:30};






















var TouchableOpacity=_wrapComponent('_component')(React.createClass({displayName:'TouchableOpacity',
mixins:[TimerMixin,Touchable.Mixin,NativeMethodsMixin],

propTypes:_extends({},
TouchableWithoutFeedback.propTypes,{




activeOpacity:React.PropTypes.number}),


getDefaultProps:function getDefaultProps(){
return{
activeOpacity:0.2};

},

getInitialState:function getInitialState(){
return _extends({},
this.touchableGetInitialState(),{
anim:new Animated.Value(1)});

},

componentDidMount:function componentDidMount(){
ensurePositiveDelayProps(this.props);
},

componentWillReceiveProps:function componentWillReceiveProps(nextProps){
ensurePositiveDelayProps(nextProps);
},




setOpacityTo:function setOpacityTo(value){var duration=arguments.length>1&&arguments[1]!==undefined?arguments[1]:150;
Animated.timing(
this.state.anim,
{toValue:value,duration:duration,useNativeDriver:true}).
start();
},





touchableHandleActivePressIn:function touchableHandleActivePressIn(e){
this.clearTimeout(this._hideTimeout);
this._hideTimeout=null;
if(e.dispatchConfig.registrationName==='onResponderGrant'){
this._opacityActive(0);
}else{
this._opacityActive(150);
}
this.props.onPressIn&&this.props.onPressIn(e);
},

touchableHandleActivePressOut:function touchableHandleActivePressOut(e){
if(!this._hideTimeout){
this._opacityInactive();
}
this.props.onPressOut&&this.props.onPressOut(e);
},

touchableHandlePress:function touchableHandlePress(e){
this.clearTimeout(this._hideTimeout);
this._opacityActive(150);
this._hideTimeout=this.setTimeout(
this._opacityInactive,
this.props.delayPressOut||100);

this.props.onPress&&this.props.onPress(e);
},

touchableHandleLongPress:function touchableHandleLongPress(e){
this.props.onLongPress&&this.props.onLongPress(e);
},

touchableGetPressRectOffset:function touchableGetPressRectOffset(){
return this.props.pressRetentionOffset||PRESS_RETENTION_OFFSET;
},

touchableGetHitSlop:function touchableGetHitSlop(){
return this.props.hitSlop;
},

touchableGetHighlightDelayMS:function touchableGetHighlightDelayMS(){
return this.props.delayPressIn||0;
},

touchableGetLongPressDelayMS:function touchableGetLongPressDelayMS(){
return this.props.delayLongPress===0?0:
this.props.delayLongPress||500;
},

touchableGetPressOutDelayMS:function touchableGetPressOutDelayMS(){
return this.props.delayPressOut;
},

_opacityActive:function _opacityActive(duration){
this.setOpacityTo(this.props.activeOpacity,duration);
},

_opacityInactive:function _opacityInactive(){
this.clearTimeout(this._hideTimeout);
this._hideTimeout=null;
var childStyle=flattenStyle(this.props.style)||{};
this.setOpacityTo(
childStyle.opacity===undefined?1:childStyle.opacity,
150);

},

render:function render(){
return(
React.createElement(Animated.View,{
accessible:this.props.accessible!==false,
accessibilityLabel:this.props.accessibilityLabel,
accessibilityComponentType:this.props.accessibilityComponentType,
accessibilityTraits:this.props.accessibilityTraits,
style:[this.props.style,{opacity:this.state.anim}],
testID:this.props.testID,
onLayout:this.props.onLayout,
hitSlop:this.props.hitSlop,
onStartShouldSetResponder:this.touchableHandleStartShouldSetResponder,
onResponderTerminationRequest:this.touchableHandleResponderTerminationRequest,
onResponderGrant:this.touchableHandleResponderGrant,
onResponderMove:this.touchableHandleResponderMove,
onResponderRelease:this.touchableHandleResponderRelease,
onResponderTerminate:this.touchableHandleResponderTerminate},
this.props.children,
Touchable.renderDebugView({color:'cyan',hitSlop:this.props.hitSlop})));


}}));


module.exports=TouchableOpacity;