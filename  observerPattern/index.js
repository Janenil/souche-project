// 观察者类
function Pubsub() {
  this.handles = {};
}

Pubsub.prototype = {
  on: function(type, handle){
    if(!this.handles[type]) {
      this.handles[type] = [];
    }
    this.handles[type].push(handle);
  },
  emit: function() {
    var type = Array.prototype.shift.call(arguments);
    if (!this.handles[type]) {
      return false;
    }
    this.handles[type].forEach((item, index) => {
      var handle = item;
      handle.apply(this, arguments);
    })
  },
  off: function(type, handle) {
    handles = this.handles[type];
    if(handles) {
      if(!handle) {
        handles.length = 0;
      } else {
        handles.forEach((item, index) => {
          var _handle = item;
          if (_handle == handle) {
            handles.splice(index,1);
          }
        })
      }
    }
  }
}

var item = new Pubsub();
var item1 = new Pubsub();
var _data = function () {
  console.log('data is change');
}
item.on('aaa', _data)
item1.on('data', _data)

item.emit('aaa')


