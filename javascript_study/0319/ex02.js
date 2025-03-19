class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    // prototype 메서드
    sayHi() {
        x = 10;
    }

    // 정적 메서드
    static doA() {
    }
}

new Post.sayHi();

const post = new Post("post", "This is a post content");
console.log(post);

// 많이 사용하는 문법
const post1 = {
    title: "post1",
    content: "This is a post content1",

    sayHi() { // 메모리 낭비 유발
    }
}
console.log(post1);