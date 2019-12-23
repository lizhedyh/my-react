// 使用extends继承
// 正例
class Queue {
}
class PeekableQueue extends Queue {
}

// 反例
function Animal() {
}
function Dog() {
}
Dog.prototype = new Animal(); // 通过原型链继承

// 反例
const inherits = require('inherits'); // 使用util.inherits继承

function Queue1() {
}
function PeekableQueue1() {
}
inherits(PeekableQueue1, Queue1);

// 反例
function SuperType() {
}
function SubType() {
  SuperType.call(this); // 借用构造函数继承
}

// 反例
function SuperType2() {
}
function SubType2() {
  SuperType2.apply(this); // 借用构造函数继承
}