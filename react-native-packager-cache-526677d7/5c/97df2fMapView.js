










'use strict';var _react2=require('react');var _react3=_interopRequireDefault(_react2);var _index=require('./../../../../react-transform-hmr/lib/index.js');var _index2=_interopRequireDefault(_index);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _components={_component:{}};var _reactTransformHmrLibIndexJs2=(0,_index2.default)({filename:'/Users/ridwan/source/GithubBrowser/GithubBrowser/node_modules/react-native/Libraries/Components/MapView/MapView.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _reactTransformHmrLibIndexJs2(Component,id);};}

var ColorPropType=require('ColorPropType');
var EdgeInsetsPropType=require('EdgeInsetsPropType');
var Image=require('Image');
var NativeMethodsMixin=require('NativeMethodsMixin');
var React=require('React');
var StyleSheet=require('StyleSheet');
var View=require('View');

var deprecatedPropType=require('deprecatedPropType');
var processColor=require('processColor');
var resolveAssetSource=require('resolveAssetSource');
var requireNativeComponent=require('requireNativeComponent');




























































var MapView=_wrapComponent('_component')(React.createClass({displayName:'MapView',

componentWillMount:function componentWillMount(){
console.warn(
'MapView is now deprecated and will be removed from React Native in version 0.42. '+
'Please use the react-native-maps module which is more feature complete '+
'and works on Android too: https://github.com/airbnb/react-native-maps\n'+
'It is actively maintained and used extensively.\n\n'+
'Once MapView is removed from React Native in v0.42, we will release the '+
'code as deprecated-react-native-ios-mapview. You will be able to '+
'continue using that and migrate to react-native-maps your own pace later.\n\n'+
'For more info, check out https://github.com/facebook/react-native/pull/10500');

},

mixins:[NativeMethodsMixin],

propTypes:_extends({},
View.propTypes,{



style:View.propTypes.style,








showsUserLocation:React.PropTypes.bool,






followUserLocation:React.PropTypes.bool,





showsPointsOfInterest:React.PropTypes.bool,





showsCompass:React.PropTypes.bool,






showsAnnotationCallouts:React.PropTypes.bool,





zoomEnabled:React.PropTypes.bool,










rotateEnabled:React.PropTypes.bool,










pitchEnabled:React.PropTypes.bool,





scrollEnabled:React.PropTypes.bool,








mapType:React.PropTypes.oneOf([
'standard',
'satellite',
'hybrid']),








region:React.PropTypes.shape({



latitude:React.PropTypes.number.isRequired,
longitude:React.PropTypes.number.isRequired,





latitudeDelta:React.PropTypes.number,
longitudeDelta:React.PropTypes.number}),





annotations:React.PropTypes.arrayOf(React.PropTypes.shape({



latitude:React.PropTypes.number.isRequired,
longitude:React.PropTypes.number.isRequired,




animateDrop:React.PropTypes.bool,




draggable:React.PropTypes.bool,




onDragStateChange:React.PropTypes.func,





onFocus:React.PropTypes.func,





onBlur:React.PropTypes.func,




title:React.PropTypes.string,
subtitle:React.PropTypes.string,




leftCalloutView:React.PropTypes.element,
rightCalloutView:React.PropTypes.element,
detailCalloutView:React.PropTypes.element,










tintColor:ColorPropType,




image:Image.propTypes.source,




view:React.PropTypes.element,




id:React.PropTypes.string,




hasLeftCallout:deprecatedPropType(
React.PropTypes.bool,
'Use `leftCalloutView` instead.'),

hasRightCallout:deprecatedPropType(
React.PropTypes.bool,
'Use `rightCalloutView` instead.'),

onLeftCalloutPress:deprecatedPropType(
React.PropTypes.func,
'Use `leftCalloutView` instead.'),

onRightCalloutPress:deprecatedPropType(
React.PropTypes.func,
'Use `rightCalloutView` instead.')})),






overlays:React.PropTypes.arrayOf(React.PropTypes.shape({



coordinates:React.PropTypes.arrayOf(React.PropTypes.shape({
latitude:React.PropTypes.number.isRequired,
longitude:React.PropTypes.number.isRequired})),





lineWidth:React.PropTypes.number,
strokeColor:ColorPropType,
fillColor:ColorPropType,




id:React.PropTypes.string})),





maxDelta:React.PropTypes.number,




minDelta:React.PropTypes.number,




legalLabelInsets:EdgeInsetsPropType,




onRegionChange:React.PropTypes.func,




onRegionChangeComplete:React.PropTypes.func,




onAnnotationPress:React.PropTypes.func,




active:React.PropTypes.bool}),


statics:{







PinColors:{
RED:'#ff3b30',
GREEN:'#4cd964',
PURPLE:'#c969e0'}},



render:function render(){var _this=this;
var children=[],_props=this.props,annotations=_props.annotations,overlays=_props.overlays,followUserLocation=_props.followUserLocation;
annotations=annotations&&annotations.map(function(annotation){var

id=






annotation.id,image=annotation.image,tintColor=annotation.tintColor,view=annotation.view,leftCalloutView=annotation.leftCalloutView,rightCalloutView=annotation.rightCalloutView,detailCalloutView=annotation.detailCalloutView;

if(!view&&image&&tintColor){
view=React.createElement(Image,{
style:{
tintColor:processColor(tintColor)},

source:image});

image=undefined;
}
if(view){
if(image){
console.warn('`image` and `view` both set on annotation. Image will be ignored.');
}
var viewIndex=children.length;
children.push(React.cloneElement(view,{

style:[styles.annotationView,view.props.style||{}]}));

}
if(leftCalloutView){
var leftCalloutViewIndex=children.length;
children.push(React.cloneElement(leftCalloutView,{
style:[styles.calloutView,leftCalloutView.props.style||{}]}));

}
if(rightCalloutView){
var rightCalloutViewIndex=children.length;
children.push(React.cloneElement(rightCalloutView,{
style:[styles.calloutView,rightCalloutView.props.style||{}]}));

}
if(detailCalloutView){
var detailCalloutViewIndex=children.length;
children.push(React.cloneElement(detailCalloutView,{
style:[styles.calloutView,detailCalloutView.props.style||{}]}));

}

var result=_extends({},
annotation,{
tintColor:tintColor&&processColor(tintColor),
image:image,
viewIndex:viewIndex,
leftCalloutViewIndex:leftCalloutViewIndex,
rightCalloutViewIndex:rightCalloutViewIndex,
detailCalloutViewIndex:detailCalloutViewIndex,
view:undefined,
leftCalloutView:undefined,
rightCalloutView:undefined,
detailCalloutView:undefined});

result.id=id||encodeURIComponent(JSON.stringify(result));
result.image=image&&resolveAssetSource(image);
return result;
});
overlays=overlays&&overlays.map(function(overlay){var
id=overlay.id,fillColor=overlay.fillColor,strokeColor=overlay.strokeColor;
var result=_extends({},
overlay,{
strokeColor:strokeColor&&processColor(strokeColor),
fillColor:fillColor&&processColor(fillColor)});

result.id=id||encodeURIComponent(JSON.stringify(result));
return result;
});

var findByAnnotationId=function findByAnnotationId(annotationId){
if(!annotations){
return null;
}
for(var i=0,l=annotations.length;i<l;i++){
if(annotations[i].id===annotationId){
return annotations[i];
}
}
return null;
};


var onPress=void 0,onAnnotationDragStateChange=void 0,onAnnotationFocus=void 0,onAnnotationBlur=void 0;
if(annotations){
onPress=function onPress(event){
if(event.nativeEvent.action==='annotation-click'){

_this.props.onAnnotationPress&&
_this.props.onAnnotationPress(event.nativeEvent.annotation);
}else if(event.nativeEvent.action==='callout-click'){
var annotation=findByAnnotationId(event.nativeEvent.annotationId);
if(annotation){

if(event.nativeEvent.side==='left'&&annotation.onLeftCalloutPress){
annotation.onLeftCalloutPress(event.nativeEvent);
}else if(event.nativeEvent.side==='right'&&annotation.onRightCalloutPress){
annotation.onRightCalloutPress(event.nativeEvent);
}
}
}
};
onAnnotationDragStateChange=function onAnnotationDragStateChange(event){
var annotation=findByAnnotationId(event.nativeEvent.annotationId);
if(annotation){

annotation.onDragStateChange&&
annotation.onDragStateChange(event.nativeEvent);
}
};
onAnnotationFocus=function onAnnotationFocus(event){
var annotation=findByAnnotationId(event.nativeEvent.annotationId);
if(annotation&&annotation.onFocus){
annotation.onFocus(event.nativeEvent);
}
};
onAnnotationBlur=function onAnnotationBlur(event){
var annotation=findByAnnotationId(event.nativeEvent.annotationId);
if(annotation&&annotation.onBlur){
annotation.onBlur(event.nativeEvent);
}
};
}


if(this.props.onRegionChange||this.props.onRegionChangeComplete){
var onChange=function onChange(event){
if(event.nativeEvent.continuous){
_this.props.onRegionChange&&
_this.props.onRegionChange(event.nativeEvent.region);
}else{
_this.props.onRegionChangeComplete&&
_this.props.onRegionChangeComplete(event.nativeEvent.region);
}
};
}


if(followUserLocation===undefined){
followUserLocation=this.props.showUserLocation;
}

return(
React.createElement(RCTMap,_extends({},
this.props,{
annotations:annotations,
children:children,
followUserLocation:followUserLocation,
overlays:overlays,
onPress:onPress,
onChange:onChange,
onAnnotationDragStateChange:onAnnotationDragStateChange,
onAnnotationFocus:onAnnotationFocus,
onAnnotationBlur:onAnnotationBlur})));


}}));


var styles=StyleSheet.create({
annotationView:{
position:'absolute',
backgroundColor:'transparent'},

calloutView:{
position:'absolute',
backgroundColor:'white'}});



var RCTMap=requireNativeComponent('RCTMap',MapView,{
nativeOnly:{
onAnnotationDragStateChange:true,
onAnnotationFocus:true,
onAnnotationBlur:true,
onChange:true,
onPress:true}});



module.exports=MapView;