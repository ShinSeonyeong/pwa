class AA {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        return arr.map(function (item) {
            console.log("this = ");
            console.log(this);
            return this.prefix + '-' + item;
            // console.log(this.prefix);
        }, this); // 두번째 매개변수로 this를 내보냄. 
    }
}

const me = new AA('webkit');
const arr = me.add(['transition', 'user-select']);
console.log(arr);

// 원하는 출력값 ; ['webkit-transition', 'webkit-user-select']