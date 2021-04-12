/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  letterDic = {
    a: 0,
    b: 1,
    c: 0,
    d: 1,
    e: 0,
    f: 1,
    g: 0,
    h: 1,
  };

  const type = letterDic[coordinates[0]];
  const value = coordinates[1] * 1 + type;
  return value % 2 == 0 ? true : false;
};
