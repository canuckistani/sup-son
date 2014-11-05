let { data } = require('sdk/self');
let fs = require('sdk/io/fs');
let { Hotkey } = require("sdk/hotkeys");

const emoji = JSON.parse(data.load('emoji.json'));

let panel = require("sdk/panel").Panel({
  width: 300,
  height: 120,
  contentURL: data.url('emoji-list.html'),
  contentScriptFile: data.url('emoji.js'),
  contentScriptOptions: emoji
});

let showHotKey = Hotkey({
  combo: "accel-shift-s",
  onPress: function() {
    panel.show();
  }
});

panel.on('show', () => {
  panel.port.emit('show');
});

panel.port.on('log', (msg) => { console.log(msg); });

module.exports = {
  emoji: emoji
};


/**
[{"emoji": "¯\_(ツ)_/¯", "name": "shrug"},
{"emoji": "¯\(º_o)/¯", "name": "dunno"},

*/