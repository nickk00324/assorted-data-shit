const reverse = (str) => {
  const strLst = [];
  for (let i = str.length - 1; i >= 0; i--) {
    strLst.push(str[i]);
  }
  return strLst.join("");
};

const charCount = (str = null) => {
  if (!str) return {};
  const charObj = {};
  const allowed = /[a-z0-9]/;
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (!allowed.test(char)) continue;
    if (!charObj.hasOwnProperty(char)) {
      charObj[char] = 1;
    } else {
      charObj[char] += 1;
    }
  }
  return charObj;
};

console.log(charCount("hello"));
console.log(charCount("HELL    OOOOOOOOOO"));
