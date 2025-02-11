var removeStars = function (s) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      arr.splice(arr.length - 1, 1);
    } else {
      arr.push(s[i]);
    }
  }

  return arr.join('');
};
