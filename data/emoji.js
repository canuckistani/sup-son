console.log('in content script');

var filled = false;

self.port.on('show', () => {
  // console.log(self.options);
  if (!filled) {
    self.port.emit('log', "filling")
    let list = '';
    console.log(self.options);
    for (i in self.options) {
      let item = self.options[i];
      console.log(item);
      list += "<li>" + item.name + " => " + item.emoji + "</li>\n";
    }
    document.querySelector('#emoji-list').innerHTML = list;
    filled = true;
  }
});
