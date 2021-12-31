module.exports = (login, password) => {
  try {
    let str = login.replace(/\s/gim, '').toLowerCase();
    while (password.length < str.length) {
      password += password;
    }

    password = password.slice(0, str.length).toLowerCase();
    let start = 'a';
    let end = 'z';
    let result = [];
    let result3 = [];
    for (let i = 0; i < str.length; i++) {
      let l, k;
      l = password[i].charCodeAt() - start.charCodeAt();
      if (
        start.charCodeAt() - str[i].charCodeAt() > 0 ||
        start.charCodeAt() - str[i].charCodeAt() + 26 < 0
      ) {
        k = str[i].charCodeAt();
      } else if (end.charCodeAt() - str[i].charCodeAt() > l) {
        k = password[i].charCodeAt() + str[i].charCodeAt() - start.charCodeAt();
      } else {
        k =
          start.charCodeAt() +
          (password[i].charCodeAt() -
            start.charCodeAt() -
            (end.charCodeAt() - str[i].charCodeAt())) -
          1;
      }
      if (k) {
        result3.push(String.fromCodePoint(k));
      }
    }
    result3 = result3.join('');

    let res = [];
    let m = 0;
    login.split(' ').map((item) => {
      result = result3;

      res.push(result.slice(m, m + item.length).toUpperCase());
      m += item.length;
    });

    return res.join(' ');
  } catch {
    throw new Error('Incorrect arguments!');
  }
};
