const { data } = require('sdk/self');
const fs = require('sdk/io/fs');
const { Hotkey } = require("sdk/hotkeys");
const clipboard = require("sdk/clipboard");
const notifications = require("sdk/notifications");

// data
const emoji = {
  shrug: "¯\\_(ツ)_/¯",
  flip: "(╯°□°）╯︵ ┻━┻"
};

// first run prefs
// const prefs = require("sdk/simple-prefs").prefs;

let shrugHotKey = Hotkey({
  combo: "accel-shift-s",
  onPress: function() {
    clipboard.set(emoji.shrug);
    notifications.notify({
      title: "Shrug-tastic!!",
      text: emoji.shrug + " is ready to deploy!"
    });
  }
});

let flipHotKey = Hotkey({
  combo: "alt-shift-g",
  onPress: function() {
    clipboard.set(emoji.flip);
    notifications.notify({
      title: "Shrug-tastic!!",
      text: emoji.flip + " is ready to deploy!"
    });
  }
});

module.exports = {
  emoji: emoji
};

// first run experience

// if (!prefs.hasBeenRun) {
//   // prefs.hasBeenRun = true;
//   console.log('firstrun hasn\'t been run');
// }
