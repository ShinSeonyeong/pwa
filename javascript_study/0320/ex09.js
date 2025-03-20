class MyArray extends Array{
    uniq(){
        const MyArr = new Set(this);
        console.log('유니크 '+[...MyArr] );
    }
    average(){
        const result = this.reduce((a, b)=>{
            // console.log(`a ${a}`);
            // console.log(`b ${b}`);
            return a+b;
        })/this.length;
        console.log(`평균 ${result}`);
    }
}

const arr = new MyArray(10, 20, 30, 30, 40);

console.log(arr);

const uniqarr = arr.uniq(); //중복제거 함수
const avg = arr.average(); //평균값 함수

// uniq()라는 함수는 없기에 
// class에서 MyArray 생성 후 함수를 만들어주면 오류가 뜨지 않음