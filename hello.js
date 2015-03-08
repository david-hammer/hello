var hello = require('./subroutine')

var makeHello = function(name) {
  return function(n){
    for (var i = 0; i < n; i++){
      hello(name + '!!!');
    }
  };
};

makeHello('world')(3);