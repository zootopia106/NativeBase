Object.defineProperty(exports,"__esModule",{value:true});exports.Button=undefined;var _templateObject=_taggedTemplateLiteral(["\n  backgroundColor: ",";\n  paddingVertical: 8;\n  paddingHorizontal: 15;\n  borderRadius: 6;\n  borderColor: ",";\n  borderWidth: ",";\n  height: 45;\n  flexDirection: row;\n  alignItems: center;\n  justifyContent: space-between;\n"],["\n  backgroundColor: ",";\n  paddingVertical: 8;\n  paddingHorizontal: 15;\n  borderRadius: 6;\n  borderColor: ",";\n  borderWidth: ",";\n  height: 45;\n  flexDirection: row;\n  alignItems: center;\n  justifyContent: space-between;\n"]);var _react=require("react");var _react2=_interopRequireDefault(_react);
var _native=require("styled-components/native");var _native2=_interopRequireDefault(_native);
var _Text=require("./Text");var _Text2=_interopRequireDefault(_Text);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var StyledButton=_native2.default.TouchableOpacity.attrs({
backgroundColor:function backgroundColor(props){return props.header||props.bordered?'transparent':props.danger?'red':props.success?"green":"blue";},
borderWidth:function borderWidth(props){return props.bordered?1:0;},
borderColor:function borderColor(props){return props.danger?'red':props.success?"green":"blue";}})(_templateObject,

function(props){return props.backgroundColor;},



function(props){return props.borderColor;},
function(props){return props.borderWidth;});exports.







Button=StyledButton;
//# sourceMappingURL=Button.js.map