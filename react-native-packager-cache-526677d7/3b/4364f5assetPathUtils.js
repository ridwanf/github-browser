







'use strict';

function getAndroidAssetSuffix(scale){
switch(scale){
case 0.75:return'ldpi';
case 1:return'mdpi';
case 1.5:return'hdpi';
case 2:return'xhdpi';
case 3:return'xxhdpi';
case 4:return'xxxhdpi';}

}

function getAndroidDrawableFolderName(asset,scale){
var suffix=getAndroidAssetSuffix(scale);
if(!suffix){
throw new Error(
'Don\'t know which android drawable suffix to use for asset: '+
JSON.stringify(asset));

}
var androidFolder='drawable-'+suffix;
return androidFolder;
}

function getAndroidResourceIdentifier(asset){
var folderPath=getBasePath(asset);
return(folderPath+'/'+asset.name).
toLowerCase().
replace(/\//g,'_').
replace(/([^a-z0-9_])/g,'').
replace(/^assets_/,'');
}

function getBasePath(asset){
var basePath=asset.httpServerLocation;
if(basePath[0]==='/'){
basePath=basePath.substr(1);
}
return basePath;
}

module.exports={
getAndroidAssetSuffix:getAndroidAssetSuffix,
getAndroidDrawableFolderName:getAndroidDrawableFolderName,
getAndroidResourceIdentifier:getAndroidResourceIdentifier,
getBasePath:getBasePath};