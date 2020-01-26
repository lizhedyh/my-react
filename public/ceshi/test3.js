/* eslint-disable no-redeclare */

/* eslint-disable no-unused-vars */

// -----------------------正例

function person(name, hobby = {}) {
}

// 有多个默认参数，都放在后面
function person(name, hobby = {}, age = 18) {
}

// -----------------------反例

//  函数声明的方式定义函数
function person(hobby = {}, name) {
}

// 函数表达式创建函数
let work = function(opts = {}, name) {
};

// 箭头函数
let play = (opts = {}, name) => { };

// 默认参数放在中间
function person(name, hobby = {}, age) {
}





