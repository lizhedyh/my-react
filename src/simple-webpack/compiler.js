module.exports = class Complier{
  constructor(options) {
    const {entry, output} = options;

    this.entry = entry;
    this.output = output;
    console.log(options);
  }
}