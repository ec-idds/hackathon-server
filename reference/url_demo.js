const url = require("url");

const myUrl = new URL("https://www.testWebsite.com/hello.html?id=100&status=active");

//Serialized url
console.log(myUrl.href);
//Alternative
console.log(myUrl.toString());

//Host (root Domain)
console.log(myUrl.host);

//Hostname (Does not include the port)
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);

//add param
console.log(myUrl.searchParams.append("abc", "123"));
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))

