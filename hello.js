var hello = function(name){
  console.log('Hello, ' + name);
};

var sayHello = function(n, name) {
  for (var i = 0; i < n; i++){
    hello(name + '!!!');
  }
};

var makeHello = function(name) {
  return function(n){
    for (var i = 1; i < n; i++){
      hello(name + '!!!');
    }
  };
};