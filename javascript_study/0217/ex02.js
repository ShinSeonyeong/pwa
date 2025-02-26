const setting = {
    theme: null,
    language: 'ko',
    person:{
        name: '홍길동'
    }
//     a:{
//         b:'bb'
//     }
}

console.log(Boolean(null));

const b = setting.a?.b ?? 'a가 없습니다.';
console.log(b);

const userTheme = setting.theme || 'light';
console.log(userTheme);

const userLanguage = setting?.language;
console.log(userLanguage);

const userName = setting.person.name;
console.log(userName);