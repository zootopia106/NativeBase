Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _platform=require('./../variables/platform');var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var platformStyle=variables.platformStyle;
var platform=variables.platform;

var badgeTheme={
'.primary':{
backgroundColor:variables.btnPrimaryBg},

'.warning':{
backgroundColor:variables.btnWarningBg},

'.info':{
backgroundColor:variables.btnInfoBg},

'.success':{
backgroundColor:variables.btnSuccessBg},

'.danger':{
backgroundColor:variables.btnDangerBg},

'NativeBase.Text':{
color:variables.badgeColor,
fontSize:variables.fontSizeBase,
lineHeight:platform==='web'?28:variables.lineHeight-1,
textAlign:'center',
paddingHorizontal:3},

'NativeBase.Icon':{
color:variables.badgeColor,
fontSize:variables.fontSizeBase+4,
lineHeight:platform==='web'?28:variables.lineHeight-1,
paddingHorizontal:0},

backgroundColor:variables.badgeBg,
padding:variables.badgePadding,
paddingHorizontal:6,
alignSelf:'flex-start',
borderRadius:13.5,
height:27};

return badgeTheme;
};
//# sourceMappingURL=Badge.js.map