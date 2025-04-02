const str = `Is this all ok is?
Is this all ok is?
Is this all ok is?`;

const re = /is/igm;
console.log(re.test(str));
console.log(re.exec(str));
console.log(str.match(re));

const aa = "a1b2c3d4e5";
console.log(aa.split(/\d/));