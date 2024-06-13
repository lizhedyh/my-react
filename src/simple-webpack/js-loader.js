module.exports = function (source) {
  console.log(source);
  return `module.exports=${JSON.stringify(source)}`;
};
