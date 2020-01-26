/* eslint-disable no-undef */
// 如果控制语句(if, while etc.)达到行最大长度，每组判定可以单独放一行,逻辑运算符放在新行的开头,判断语句结束的括号")"和BlockStatement开始的大括号"{"放在新一行的开头

// ---------------------------------正例

// 较长的控制语句被拆分成多个，且符合拆分规范
if (
  (foo === 123 || bar === 'abc')
  && doesItLookGoodWhenItBecomesThatLong()
  && isThisReallyHappening()
) {
  thing1();
}

// 控制语句未超过最大长度
if (foo === 123 && bar === 'abc') {
  thing1();
}

// --------------------------------反例

// if控制语句超过行最大长度
if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
  thing1();
}

// 逻辑运算符没有放在新行的开头
if (
  foo === 123 &&
  bar === 'abc'
) {
  thing1();
}

// 括号的结束和大括号的开始没有放在新行
if (
  foo === 123
  && bar === 'abc'
) {
  thing1();
}

// 逻辑运算符没有放在新行的开头，括号的结束和大括号的开始没有放在新行
if (
  foo === 123 &&
  bar === 'abc') {
  thing1();
}

// while控制语句超过行最大长度
while ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
  thing1();
}

// do-while控制语句超过行最大长度
do {
  thing1();
} while ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening());
