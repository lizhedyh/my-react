// 枚举
enum Color { Red, Green }
let r1: Color = Color.Red;
let r2: number = Color.Red;
let r3: string = Color[1]; // 从枚举值也可以反向映射到枚举名

console.log('r1', r1); // r1 0
console.log('r2', r2); // r2 0
console.log('r3', r3); // r3 Green


// Any
let notSure: any = 4;
notSure = 'maybe';
notSure.ifItExisted();

let notSure2: number = 5;
notSure2 = 'maybe';
notSure2.ifItExisted();

let notSure3: Object = 4; // Object类型可以赋任意值，但不能调用任意方法
notSure3 = 'maybe';
notSure2.ifItExisted();

// 类型断言
let someValue: Object = 'haha';
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

// var
function count() {
  for (var i = 0;i < 10; i++) {
    (function(i) {
      setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
  }
}
count();


