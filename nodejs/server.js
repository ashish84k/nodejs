// const Hello = require('./Hello');
// const FileReaderLineByLine = require('./FileReaderLineByLine');
// const path = require('path');

// Hello();
// process.exit()

// FileReaderLineByLine('./Hello.js');


// console.log(path.basename('./ashish/amit'));  //ye hame last ka / ke bad ka name nikal ke de raha hai 

// console.log(path.delimiter); // ye plateform ke hisab se delimiter deta window ke liye ; linux ke liye :

// console.log(path.dirname('./ashish/amit/rohan.js')); // ye hame batata hai ki fie kis directory me exist karati hai uska path return karata hai ab exit kare ya na par ye path return karega file ke pahele ka 

// console.log(path.extname('./amit/rohan.js'));//ye file ke exention ko return karata hai jaise isme .js hai to .js return karega 

// let obj = {
//   base: 'amit',      // pura file name (priority sabse upar)
//   dir: 'akit',       // directory path
//   ext: '.js',        // extension (ignored agar base diya hai)
//   name: 'rohit',     // file name without extension (ignored agar base diya hai)
//   root: 'home'       // root (ignored agar dir diya hai)
// }


// console.log(path.format(obj));


// console.log(path.isAbsolute('/home/user/server.js'));//absolute path  true
// console.log(path.isAbsolute('./server.js'));// relative path false


// console.log(path.join('./amit','./rohan','./ankit.js'));// ye path ko join karata hai 


// console.log(path.normalize('../hello/ashish.js')); ye path ko normalize karata hai matlab ye unnecessary .., . aur slashes (/, \\) ko clean kar deta hai

// const parsed = path.parse('./Home/ashish/amit/rohan/ankit.js');
// console.log(parsed , path.format(parsed));   //path string ko object me tod deta hai  same format() ke form me jo format() object accept karata hai o sari properties hoti hai 

// console.log(path.relative('./amit/rohan' , 'ashish.js')); // ye hamase path aur file name leta hai aur file ka relative path return karata hai 


// console.log(path.resolve('./amit', 'rohan.js'));// ye hame absolute path return kar ke deta hia agar ham isme kuchh pass karate hai to uska absolute path deta hai aur ye join bhi karane ka kam karata hai

// console.log(path.sep); ye hame platform-specific path segment  return karata hai window ke liye \ linux ke liye /




// url module

// const { exec } = require('child_process');

// exec('npm -v', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`${stdout}`);
// });


// const { URL } = require('url');

// const myURL = new URL('https://ashish:1234@example.com:8080/path/to/page?name=ashish&age=25#section1');

// console.log(myURL);

// const url = require('url');

// const newUrl = new url.domainToASCII('https://ashish:1234@example.com:8080/path/to/page?name=ashish&age=25#section1');
// console.log(newUrl);

const http = require('http');

const agent = new http.Agent({ keepAlive: true });

http.request('http://localhost:3000', { agent }, res => {
  console.log('Got response for /');
});

http.request('http://localhost:3000/amit', { agent }, res => {
  console.log('Got response for /amit');
})

const server = http.createServer((req, res) => {
  console.log(`📥 HTTP request: ${req.method} ${req.url}`);
  res.end();
});

server.on('connection', (socket) => {
  console.log('⚡ New TCP connection');
  socket.on('close', () => {
    console.log('❌ TCP connection closed');
  });
});


server.listen(3000, () => {
  console.log('🚀 Server is listening on port 3000');
});
