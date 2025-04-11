function parseURL(url = "") {
  console.log(`url ${url}`);
  //   const aa = 10;
  //   return {aa};
  //   ^(\w)+: http나 https 찾는 것
  //   \/\/: // 찾는 것
  //   ([^/]+): 슬러시(/) 아닌 것 여기까지 찾아달라는 것
  //   (.*): 슬러시(/) 이후 문자 더 찾아달라는 의미
  const mm = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
  console.log(mm);
  const [, protocol, host, path] = mm;
  return { protocol, host, path };
}

const result = parseURL("http://www.namer.com/aa");
console.log(result);
