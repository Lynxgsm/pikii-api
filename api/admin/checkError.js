module.exports = {
  isValid(obj) {
    const tmp = Object.keys(obj);
    return { error: obj[tmp[0]].message };
  },
};
