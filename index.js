const { data } = require('sdk/self');
const fs = require('sdk/io/fs');
const { Hotkey } = require("sdk/hotkeys");
const clipboard = require("sdk/clipboard");
const emoji = {sup: "¯\\_(ツ)_/¯"};
const notifications = require("sdk/notifications");

// first run prefs
const prefs = require("sdk/simple-prefs").prefs;

let showHotKey = Hotkey({
  combo: "accel-shift-s",
  onPress: function() {
    console.log('ran hotkey');
    // panel.show();
    clipboard.set(emoji.sup);

    notifications.notify({
      title: "Shrug-tastic!!",
      text: emoji.sup + " is ready to deploy!",
      onClick: function (data) {
        console.log(data);
        // console.log(this.data) would produce the same result.
      }
    });
  }
});

module.exports = {
  emoji: emoji
};

// first run experience

if (!prefs.hasBeenRun) {

  // prefs.hasBeenRun = true;
  console.log('firstrun hasn\'t been run');

}
