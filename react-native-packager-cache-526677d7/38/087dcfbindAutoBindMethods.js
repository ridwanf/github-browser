'use strict';

Object.defineProperty(exports,"__esModule",{
value:true});

exports.default=bindAutoBindMethods;












function bindAutoBindMethod(component,method){
var boundMethod=method.bind(component);

boundMethod.__reactBoundContext=component;
boundMethod.__reactBoundMethod=method;
boundMethod.__reactBoundArguments=null;

var componentName=component.constructor.displayName,
_bind=boundMethod.bind;

boundMethod.bind=function(newThis){
var args=Array.prototype.slice.call(arguments,1);
if(newThis!==component&&newThis!==null){
console.warn('bind(): React component methods may only be bound to the '+'component instance. See '+componentName);
}else if(!args.length){
console.warn('bind(): You are binding a component method to the component. '+'React does this for you automatically in a high-performance '+'way, so you can safely remove this call. See '+componentName);
return boundMethod;
}

var reboundMethod=_bind.apply(boundMethod,arguments);
reboundMethod.__reactBoundContext=component;
reboundMethod.__reactBoundMethod=method;
reboundMethod.__reactBoundArguments=args;

return reboundMethod;
};

return boundMethod;
}

function bindAutoBindMethodsFromMap(component){
for(var autoBindKey in component.__reactAutoBindMap){
if(!component.__reactAutoBindMap.hasOwnProperty(autoBindKey)){
return;
}




if(component.hasOwnProperty(autoBindKey)&&component[autoBindKey].__reactBoundContext===component){
continue;
}

var method=component.__reactAutoBindMap[autoBindKey];
component[autoBindKey]=bindAutoBindMethod(component,method);
}
}

function bindAutoBindMethods(component){
if(component.__reactAutoBindPairs){
bindAutoBindMethodsFromArray(component);
}else if(component.__reactAutoBindMap){
bindAutoBindMethodsFromMap(component);
}
}

function bindAutoBindMethodsFromArray(component){
var pairs=component.__reactAutoBindPairs;

if(!pairs){
return;
}

for(var i=0;i<pairs.length;i+=2){
var autoBindKey=pairs[i];

if(component.hasOwnProperty(autoBindKey)&&component[autoBindKey].__reactBoundContext===component){
continue;
}

var method=pairs[i+1];

component[autoBindKey]=bindAutoBindMethod(component,method);
}
}