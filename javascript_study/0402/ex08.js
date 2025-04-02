const str = "abcde#123/qwer";
console.log(str.replace(/[^A-Za-z0-9]/g, ''));
console.log(str.replace(/[^A-Za-z0-9]/, ''));