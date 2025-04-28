var isPalindrome = function(s) {
  let start = 0, end = s.length - 1;

  while (start <= end) {
      while (start <= end && !/[a-zA-Z0-9]/.test(s[start])) start++;
      while (start <= end && !/[a-zA-Z0-9]/.test(s[end])) end--;

      if (start <= end && s[start].toLowerCase() !== s[end].toLowerCase()) {
          return false;
      }

      start++;
      end--;
  }

  return true;
};