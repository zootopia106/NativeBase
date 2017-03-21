Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);



var _Button=require('./Button');var _Button2=_interopRequireDefault(_Button);





























var _platform=require('./../variables/platform');var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var theme={
variables:variables,























'NativeBase.Button':_extends({},
(0,_Button2.default)(variables))};



























































































































































































var cssifyTheme=function cssifyTheme(grandparent,parent,parentKey){
_lodash2.default.forEach(parent,function(style,styleName){


if(styleName.indexOf('.')===0&&parentKey&&parentKey.indexOf('.')===0){
if(grandparent){
if(!grandparent[styleName]){
grandparent[styleName]={};
}else{
grandparent[styleName][parentKey]=style;
}
}
}
if(style&&typeof style==='object'){
cssifyTheme(parent,style,styleName);
}
});
};

cssifyTheme(null,theme,null);

return theme;
};
//# sourceMappingURL=index.js.map