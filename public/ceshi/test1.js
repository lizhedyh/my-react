/* eslint-disable no-unused-vars */
// 不要使用逻辑运算符代替控制流程

// ------------------------------正例
const isRunning = true;

function run() {
}
if (!isRunning) {
  run();
}

// 正例
const isPlaying = true;

function play() {
}
if (!isPlaying && play()) {
  alert(1);
}

// 正例
const node = {
  id: {
    name: 'ee',
  },
};
const className = node.id && node.id.name;

// ----------------------------反例
const isDancing = true;

function dance() {
}
!isDancing && dance();



// 反例
const isSwimming = true;

function swim() {
}
function result() {
  return (!isSwimming && swim());
}
result();

// 反例
let x;

false || (x = 1);

alert(x);




