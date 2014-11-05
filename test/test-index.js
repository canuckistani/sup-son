var main = require("../index");

exports["test main"] = function(assert) {
  console.log(main.emoji);
  assert.pass("what the hell")
};

require("sdk/test").run(exports);
