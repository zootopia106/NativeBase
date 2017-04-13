// @flow

import color from 'color';

import { Platform, Dimensions, PixelRatio } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = 'ios';


const variableTypes = {
  platform: "string",
  platformStyle: "string",

  androidRipple: "boolean",
  androidRippleColor: "color",
  androidRippleColorDark: "color",

  badgeBg: "color",
  badgeColor: "color",
  badgePadding: number,

  btnFontFamily: string,
  btnDisabledBg: "color",
  btnDisabledClr: "color",

  CheckboxRadius: number,
  CheckboxBorderWidth: number,
  CheckboxPaddingLeft: number,
  CheckboxPaddingBottom: number,
  CheckboxIconSize: number,
  CheckboxIconMarginTop: number,
  CheckboxFontSize: number,
  DefaultFontSize: number,
  checkboxBgColor: "color",
  checkboxSize: number,
  checkboxTickColor: "color",

  segmentBackgroundColor: "color",
  segmentActiveBackgroundColor: "color",
  segmentTextColor: "color",
  segmentActiveTextColor: "color",
  segmentBorderColor: "color",
  segmentBorderColorMain: "color",

  defaultTextColor: "color",
  btnPrimaryBg: "color",
  btnPrimaryColor: "color",
  btnInfoBg: "color",
  btnInfoColor: "color",
  btnSuccessBg: "color",
  btnSuccessColor: "color",
  btnDangerBg: "color",
  btnDangerColor: "color",
  btnWarningBg: "color",
  btnWarningColor: "color",
  btnTextSize: number,
  btnTextSizeLarge: number,
  btnTextSizeSmall: number,
  borderRadiusLarge: number,
  buttonPadding: number,
  iconSizeLarge: number,
  iconSizeSmall: number,

  cardDefaultBg: "color",
  cardBorderColor: "color",

  brandPrimary: "color",
  brandInfo: "color",
  brandSuccess: "color",
  brandWarning: "color",
  brandDanger: "color",
  brandSidebar: "color",

  fontFamily: "string",
  fontSizeBase: number,
  fontSizeH1: number,
  fontSizeH2: number,
  fontSizeH3: number,

  tabBarTextColor: "color",
  tabBarTextSize: number,
  activeTab: "color",
  sTabBarActiveTextColor: "color",
  tabBarActiveTextColor: "color",
  tabActiveBgColor: "color",

  tabDefaultBg: "color",
  topTabBarTextColor: "color",
  topTabBarActiveTextColor: "color",
  topTabActiveBgColor: "color",
  topTabBarBorderColor: "color",
  topTabBarActiveBorderColor: "color",

  toolbarBtnColor: "color",
  toolbarDefaultBg: "color",
  toolbarHeight: number,
  toolbarIconSize: number,
  toolbarSearchIconSize: number,
  toolbarInputColor: "color",
  searchBarHeight: number,
  toolbarInverseBg: string,
  toolbarTextColor: string,
  toolbarDefaultBorder: string,
  iosStatusbar: string,
  statusBarColor: string,

  iconFamily: "string",
  iconFontSize: number,
  iconMargin: number,
  iconHeaderSize: number,

  inputFontSize: number,
  inputBorderColor: "color",
  inputSuccessBorderColor: "color",
  inputErrorBorderColor: "color",
  inputColor: "color",
  inputColorPlaceholder: "color",
  inputGroupMarginBottom: number,
  inputHeightBase: number,
  inputPaddingLeft: number,
  inputPaddingLeftIcon: number,
  inputGroupRoundedBorderRadius: number,

  btnLineHeight: number,
  lineHeightH1: number,
  lineHeightH2: number,
  lineHeightH3: number,
  iconLineHeight: number,
  lineHeight: number,

  listBorderColor: "color",
  listDividerBg: "color",
  listItemHeight: number,
  listBtnUnderlayColor: "color",
  listItemPadding: number,
  listNoteColor: "color",
  listNoteSize: number,

  defaultProgressColor: "color",
  inverseProgressColor: "color",

  radioBtnSize: number,
  radioSelectedColorAndroid: "color",
  radioBtnLineHeight: number,
  radioColor: "color",
  radioSelectedColor: "color",

  defaultSpinnerColor: "color",
  inverseSpinnerColor: "color",

  tabBgColor: "color",
  tabFontSize: number,
  tabTextColor: "color",

  textColor: "color",
  inverseTextColor: "color",
  noteFontSize: number,

  titleFontfamily: string,
  titleFontSize: number,
  subTitleFontSize: number,
  subtitleColor: "color",
  titleFontColor: "color",

  borderRadiusBase: number,
  borderWidth: number,
  contentPadding: number,

  darkenHeader: "color",

  dropdownBg: string,
  dropdownLinkColor: string,
  inputLineHeight: number,
  jumbotronBg: string,
  jumbotronPadding: number,
  deviceWidth: number,
  deviceHeight: number,
}


export default {
  platformStyle,
  platform,
    // AndroidRipple
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',

    // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
    // New Variable
  badgePadding: (platform === 'ios') ? 3 : 0,

    // Button
  btnFontFamily: (platformStyle === 'ios') ? 'System' : 'Roboto-Regular',
  btnDisabledBg: '#b5b5b5',
  btnDisabledClr: '#f1f1f1',

    // CheckBox
  CheckboxRadius: (platformStyle === 'ios') ? 13 : 0,
  CheckboxBorderWidth: (platformStyle === 'ios') ? 1 : 2,
  CheckboxPaddingLeft: (platformStyle === 'ios') ? 4 : 2,
  CheckboxPaddingBottom: (platformStyle === 'ios') ? 0 : 5,
  CheckboxIconSize: (platformStyle === 'ios') ? 21 : 14,
  CheckboxIconMarginTop: (platformStyle === 'ios') ? undefined : 1,
  CheckboxFontSize: (platformStyle === 'ios') ? (23 / 0.9) : 18,
  DefaultFontSize: 17,
  checkboxBgColor: '#039BE5',
  checkboxSize: 20,
  checkboxTickColor: '#fff',

  // Segment
  segmentBackgroundColor: (platformStyle === 'ios') ? '#F8F8F8' : '#3F51B5',
  segmentActiveBackgroundColor: (platformStyle === 'ios') ? '#007aff' : '#fff',
  segmentTextColor: (platformStyle === 'ios') ? '#007aff' : '#fff',
  segmentActiveTextColor: (platformStyle === 'ios') ? '#fff' : '#3F51B5',
  segmentBorderColor: (platformStyle === 'ios') ? '#007aff' : '#fff',
  segmentBorderColorMain: (platformStyle === 'ios') ? '#a7a6ab' : '#3F51B5',

    // New Variable
  get defaultTextColor() {
    return this.textColor;
  },


  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return (platform === 'ios') ? this.fontSizeBase * 1.1 :
        this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },

  buttonPadding: 6,

  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },


    // Card
  cardDefaultBg: '#fff',


      // Color
  brandPrimary: (platformStyle === 'ios') ? '#007aff' : '#3F51B5',
  brandInfo: '#62B1F6',
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandSidebar: '#252932',


    // Font
  fontFamily: (platformStyle === 'ios') ? 'System' : 'Roboto-Regular',
  fontSizeBase: 15,

  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },


    // Footer
  footerHeight: 55,
  footerDefaultBg: (platformStyle === 'ios') ? '#F8F8F8' : '#4179F7',


    // FooterTab
  tabBarTextColor: (platformStyle === 'ios') ? '#6b6b6b' : '#b3c7f9',
  tabBarTextSize: (platformStyle === 'ios') ? 14 : 11,
  activeTab: (platformStyle === 'ios') ? '#007aff' : '#fff',
  sTabBarActiveTextColor: '#007aff',
  tabBarActiveTextColor: (platformStyle === 'ios') ? '#007aff' : '#fff',
  tabActiveBgColor: (platformStyle === 'ios') ? '#cde1f9' : '#3F51B5',

    // Tab
  tabDefaultBg: (platformStyle === 'ios') ? '#F8F8F8' : '#3F51B5',
  topTabBarTextColor: (platformStyle === 'ios') ? '#6b6b6b' : '#b3c7f9',
  topTabBarActiveTextColor: (platformStyle === 'ios') ? '#007aff' : '#fff',
  topTabActiveBgColor: (platformStyle === 'ios') ? '#cde1f9' : undefined,
  topTabBarBorderColor: (platformStyle === 'ios') ? '#a7a6ab' : '#fff',
  topTabBarActiveBorderColor: (platformStyle === 'ios') ? '#007aff' : '#fff',


    // Header
  toolbarBtnColor: (platformStyle === 'ios') ? '#007aff' : '#fff',
  toolbarDefaultBg: (platformStyle === 'ios') ? '#F8F8F8' : '#3F51B5',
  toolbarHeight: (platform === 'ios') ? 64 : 56,
  toolbarIconSize: (platform === 'ios') ? 20 : 22,
  toolbarSearchIconSize: (platform === 'ios') ? 20 : 23,
  toolbarInputColor: (platformStyle === 'ios') ? '#CECDD2' : '#fff',
  searchBarHeight: (platform === 'ios') ? 30 : 40,
  toolbarInverseBg: '#222',
  toolbarTextColor: (platformStyle === 'ios') ? '#000' : '#fff',
  toolbarDefaultBorder: (platformStyle === 'ios') ? '#a7a6ab' : '#3F51B5',
  iosStatusbar: (platform === 'ios') ? 'dark-content' : 'light-content',
  get statusBarColor() {
    return color(this.toolbarDefaultBg).darken(0.2).hexString();
  },


    // Icon
  iconFamily: 'Ionicons',
  iconFontSize: (platformStyle === 'ios') ? 30 : 28,
  iconMargin: 7,
  iconHeaderSize: (platformStyle === 'ios') ? 33 : 24,


    // InputGroup
  inputFontSize: 17,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',

  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return '#575757';
  },

  inputGroupMarginBottom: 10,
  inputHeightBase: 50,
  inputPaddingLeft: 5,

  get inputPaddingLeftIcon() {
    return this.inputPaddingLeft * 8;
  },


    // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  iconLineHeight: (platform === 'ios') ? 37 : 30,
  lineHeight: (platform === 'ios') ? 20 : 24,


    // List
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listItemHeight: 45,
  listBtnUnderlayColor: '#DDD',

    // Card
  cardBorderColor: '#ccc',

    // Changed Variable
  listItemPadding: (platform === 'ios') ? 10 : 12,

  listNoteColor: '#808080',
  listNoteSize: 13,


    // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',


    // Radio Button
  radioBtnSize: (platformStyle === 'ios') ? 25 : 23,
  radioSelectedColorAndroid: '#3F51B5',

    // New Variable
  radioBtnLineHeight: (platformStyle === 'ios') ? 29 : 24,

  radioColor: '#7e7e7e',

  get radioSelectedColor() {
    return color(this.radioColor).darken(0.2).hexString();
  },


    // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',


    // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,
  tabTextColor: '#222222',


    // Text
  textColor: '#000',
  inverseTextColor: '#fff',
  noteFontSize: 14,


    // Title
  titleFontfamily: (platformStyle === 'ios') ? 'System' : 'Roboto-Regular',
  titleFontSize: (platform === 'ios') ? 17 : 19,
  subTitleFontSize: (platform === 'ios') ? 12 : 14,
  subtitleColor: (platform === 'ios') ? '#8e8e93' : '#FFF',

    // New Variable
  titleFontColor: (platformStyle === 'ios') ? '#000' : '#FFF',


    // Other
  borderRadiusBase: (platform === 'ios') ? 5 : 2,
  borderWidth: (platform === 'web') ? 1 : (1/PixelRatio.getPixelSizeForLayoutSize(1)),
  contentPadding: 10,

  get darkenHeader() {
    return color(this.tabBgColor).darken(0.03).hexString();
  },

  dropdownBg: '#000',
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  jumbotronBg: '#C9C9CE',
  jumbotronPadding: 30,
  deviceWidth,
  deviceHeight,

    // New Variable
  inputGroupRoundedBorderRadius: 30,
};
