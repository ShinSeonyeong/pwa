const url = "https://www.thecodebuzz.com/api/v1/posts/?s=hello&sort=asc&order=desc"

const newUrl = new URL(url);
console.log(newUrl);

const searchParams = new URLSearchParams(newUrl.search);
console.log(searchParams);

console.log(searchParams.get("s"));
