const printMessage = require('print-message');
const fs = require('fs-extra');

fs.copySync(__dirname + '/Fonts', __dirname + '/dist/Fonts');
fs.copySync(__dirname + '/src/Fonts.css', __dirname + '/dist/src/Fonts.css');

printMessage([
  'NativeBase 2.0 has been succesfully installed!',
  'Run `node node_modules/native-base/ejectTheme.js` to copy over theme config and variables.',
  'Head over to the docs for detailed information on how to make changes to the theme.',
], {
  color: 'yellow',
  borderColor: 'green',
});
