// 创建Animal类
class Animal {
  species: any;
  constructor(species) { // 构造函数没了，变成了constructor构造方法
    this.species = species; // species是实例对象animal1自身的属性（因为定义在this变量上）
  }
}

// 实例化Animal类
new Animal('dog');
