class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    // prototype 메서드
    sayHi() {
        console.log(`this.title: ${this.title} this.content: ${this.content}`);
    }

    // 정적 메서드
    static doA() {
        console.log(`this.title: ${this.title} this.content: ${this.content}`);
    }
}

const post = new Post("post", "This is a post content");
console.log(post);

post.sayHi();
Post.doA();