/* eslint-disable no-unused-vars */
// 使用extends继承

// -----------------------------正例
class Queue {
}
class PeekableQueue extends Queue {
}

// -----------------------------反例
// 通过原型链继承
function Animal() {
}
function Dog() {
}
Dog.prototype = new Animal();

// 使用util.inherits继承
// const inherits = require('inherits');

// function Queue1() {
// }
// function PeekableQueue1() {
// }
// inherits(PeekableQueue1, Queue1);
function inherits() {
}
inherits();

// 借用构造函数继承
function SuperType() {
}
function SubType() {
  SuperType.call(this);
}

// 借用构造函数继承
function SuperType2() {
}
function SubType2() {
  SuperType2.apply(this);
}
