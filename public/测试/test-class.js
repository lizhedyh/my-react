/* eslint-disable no-unused-vars */
// [强制] 首字母大写, 驼峰命名
// 驼峰命名可以通过开启camelcase规则来配置，所以本规则只检查类名是否以大写字母开头
// ---------------------正例
class Animal {
  constructor(species) {
    this.species = species;
  }
}

// ---------------------反例
class Person {
  constructor(hobbies) {
    this.hobbies = hobbies;
  }
}

class _dsfd {
  constructor(species) {
    this.species = species;
  }
}

class c {
  constructor(species) {
    this.species = species;
  }
}
