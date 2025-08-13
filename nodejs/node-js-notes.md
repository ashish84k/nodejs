node js
-------------

Node.js JavaScript ka run-time hai,
jo JS ko browser ke bahar run karne ki functionalities provide karta hai.

Node.js JavaScript ka server-side version hai.



JavaScript
--------------------


JavaScript client-side scripting language hai
jo client ke device pe run hoti hai.
Kahne ka matlab hai ki JavaScript ka sara code client machine pe jaake run hota hai.
Ye server pe run nahi ho sakti — isliye ise client-side scripting language kehte hain.


Note:
-----------------
JavaScript server-side scripting nahi hai,
wo client-side scripting hai.

JavaScript ko server pe run karne ke liye ek environment chahiye tha,
jo Ryan Dahl ne banaya.

Ab JavaScript ko server-side pe bhi run kar sakte hain.
Lekin JavaScript ki nature client-side scripting hi hai —
environment banane se wo server-side scripting language nahi ban jaati.


JavaScript me bahut saari problems thi:
--------------------------------------------------

- Kyunki wo sirf browser me run hoti thi, terminal ya CMD me nahi.
- Isliye wo file handling nahi kar sakti thi.
- Server handle nahi kar sakti thi.
- JavaScript sirf request bhej sakti thi, response nahi de sakti thi.

Response dena sirf server-side language ka kaam hota hai,
jo compiled language hoti hai aur terminal pe run hoti hai.



node js announcement
---------------------


Ek person the jinka naam tha Ryan Dahl.
Woh ek developer the jo Apache framework pe kaam karte the.

Us time ki sabhi languages thread-based thi:
Java, PHP, etc. — sabhi multithreaded environment pe kaam karti thi.



Problem ye thi ki har request ke liye ek thread banta tha.
Agar ek baar me 1000 requests aayein,
to 1000 thread ban jaate the.

Har thread system ke resource use karta hai.
Agar resource khatam ho jaye to system request lena band kar deta tha.
Baki users ko wait karna padta tha jab tak resource free na ho.



 Example:
--------------------------

Maan lo koi website hai — government ki — form nikalta hai.

Sab log ek saath form bhar rahe hain.
Agar website thread-based hai,
aur ek baar me 1000 threads hi chal sakte hain,
to sirf 1000 hi log form bhar sakte hain.
Baaki logon ko wait karna padega jab tak pehle wale complete na ho jaayein.



 Ryan Dahl Ka Solution:
-------------------------------

Ryan Dahl ko ye problem bahut badi lagi.

Unhone sabhi programming languages analyze ki.
Unhe JavaScript sabse best lagi.

Kyuki unhone jo socha tha — wo sab cheezein JavaScript me thi:
event-driven , event loop, call stack, event queue, etc.

To unhone decide kiya:
JavaScript ko browser ke bahar run karne layak banaenge.
Ek aisa environment banayenge jisme JavaScript server pe bhi chal sake.

Aur to aur — single thread se 1000s of requests handle ho sakein,
bina ruke, bina thake — efficiently.


Sab log sochne lage: "What? Ye kaise hoga?"
"Single thread me 1000 request? Aur JavaScript server pe?"
"Majak lagta hai!"



Node.js ka Launch:
-------------------------------

Ek din Node.js ka pehla version launch hota hai.

Ryan Dahl ne C++ ki library "libuv" aur Chrome ka V8 engine use karke,
JavaScript ka run-time bana diya.

Ab JavaScript:

- File handling kar sakti thi
- Server create kar sakti thi
- API responses de sakti thi
- Aur terminal me bhi run hone lagi thi



 Final Thought:
 ---------------------------------

Sab log sochne lage: "Bhai ye kaise ho gaya?"
"Jo kaam multi-threaded language nahi kar paayi,
wo single thread ne kaise kar diya?"

Yahi tha Node.js ka magic!



Event Loop 
---------------------

Event Loop ek aisa infinite loop hota hai jo baar-baar check karta hai ki 
Call Stack khali hai ya nahi

Agar Call Stack khali hota hai, to Event Loop sabse pehle Microtask Queue ko check karta hai.

Agar Microtask Queue me koi task hota hai, to use turant Call Stack me bhej kar execute karwa deta hai.
Agar Microtask Queue khali hota hai, tab Event Loop Callback Queue (ya Macrotask Queue) me jata hai.

Phir Callback Queue me jo bhi task pehle aaya hota hai (jaise `setTimeout`), 
use Call Stack me daal kar execute karta hai.

Yeh process continuously repeat hoti rehti hai — isiliye isse "event loop" kehte hain



Event Loop Structure
---------------------------------

          🔁 EVENT LOOP
               │
               ▼
     ┌────────────────────┐
     │  CALL STACK EMPTY? │
     └────────────────────┘
               │
     ┌─────────┴─────────┐
     │                   │
   ❌No               ✅Yes
     │                   │
     ▼                   ▼
 Wait until      ┌────────────────────┐
 call stack      │ CHECK MICROTASKS   │
 is empty        └────────────────────┘
                         │
              ┌──────────┴──────────┐
              │                     │
           Tasks?                 Empty?
              │                     │
         ┌────▼────┐           ┌────▼────┐
         │ Execute │           │ Check   │
         │ Micro   │           │ CALLBACK│
         │ Task    │           │ QUEUE   │
         └─────────┘           └─────────┘
                                     │
                          ┌──────────┴──────────┐
                          │                     │
                       Tasks?                Empty?
                          │                     │
                    ┌─────▼─────┐         ┌─────▼─────┐
                    │ Execute   │         │ Repeat    │
                    │ Callback  │◄────────┤ Loop      │
                    └───────────┘         └───────────┘




Full Architecture
------------------------------

Node.js architecture ek event-driven, non-blocking, single-threaded model par kaam karta hai, jo high-performance network applications banane ke liye use hota hai

jab koi client request karata hai hamare node js ke server se to hota kya hai ki o request hamare main thread ke pass jati hai main thread ek aisi thread hoti hai jo ane wali sabhi request ko handle karati hai yani pahele request main thread ke pass hi jati hai 

type check 
------------------------

ab main thread me check kiya jata hai ki ye kaisi request hai CPU-Insensitive to nahi hai agar aisa hota hai to use utha ke thread pool me bhej diya jata hai aur agar simple hai to callStack me bhej ke turant execute kar diya jata hai aur ab thread pool kya hota hai

Thread Pool
------------------------

Thread Pool ek aisi jagah hai jahan multiple threads parallelly kaam karte hain multi thrading ki taraha hi hai

thrad pool me Execute ho rahe Program check kiya jata hai jo program ho jata hai use waite karana hota hai microqueue ya callback queue me apane kam ke hisab se

Thread pool 4 size ka hota hai default me yani 4 thread ek sath chal sakati hai ham iski size 128 tak badha sakate hai 

 In Sab Kam ko Hone ke liye Thre Space banata hai 
   callStack 
   microQueue 
   callback queue 


callStack ek aisa consept hai jo LEFO pe kam karata hai (Last In First Out) 
aur microQueue ek aisa queue hai jo FIFO pe kam karata hai (First In First Out) ye callback queue  se pahele chalata hai 
aur same as callBack queue bhi microQueue ki tarah kam karata hai bas microQueue ke bad chalata hai 

in sab ko handal karane ka kam event loop karata hai jaise ki maine bataya tha event loop ke bare me kaise kam karata hai  




       ┌─────────────┐
       │  Client     │
       │  Request    │
       └─────┬───────┘
             ↓
      ┌──────────────┐
      │ Main Thread  │
      └─────┬────────┘
            ↓
 ┌──────────────┐         ┌──────────────┐
 │ CPU-Intensive│ ──No──▶ │ I/O-Intensive│ ──▶ Thread Pool
 └──────┬───────┘         └──────┬───────┘
        ↓                        ↓
  ┌────────────┐        ┌────────────────────┐
  │ Call Stack │◀───────│Callback/Micro Queue│
  └────┬───────┘        └────────────────────┘
       ↑
  ┌────────────┐
  │Event Loop  │◀───────── Keeps checking
  └────────────┘



Module in Node.js
-------------------------------

Module ek collection of code hota hai, jisme functions, classes, variables, objects, etc. ho sakte hain. 
Ham module ko ek collection of file bhi keh sakte hain. Isme hota kya hai ki ek file me kuchh function, variable, ya classes banate hain aur unhe export kar dete hain. 
Export karne ke baad ham unhe kisi bhi file me import karke use kar sakte hain.

Isse code ki reusability badh jaati hai aur ham same code ko alag-alag jagah reuse kar sakte hain.

Node.js me modules 3 type ke hote hain:

1. Built-in Modules  
2. User-defined Modules  
3. Third-party Modules


Built-in Module
----------------------
Ye aise modules hote hain jo Node.js khud provide karta hai jaise: `fs`, `os`, `path`, etc.  
Ham inhe directly import karke use kar sakte hain.

Syntax:
const fs = require('fs');


User-defined Module
--------------------------
Ye aise modules hote hain jo ham khud banate hain. Inhe export karte hain aur fir import karke use karte hain.

Example:

// add.js
function add(a, b) {
   return a + b;
}
module.exports = add;

// index.js
const add = require('./add');
console.log(add(2, 3));


Third-party Module
--------------------------
Ye aise modules hote hain jo ham npm se install karte hain jaise express, mongoose, lodash, etc.

npm install express

const express = require('express');



Export and Import
--------------------------
Ye 2 tarike se hota hai:
1. ES Modules (ESM)
2. CommonJS Modules (CJS)


ES Module
-------------------
ES Module vanilla JavaScript ka module system hota hai jisme export aur import ka use hota hai.

Export
-------------------
export ek aisa object hota hai jo module ko distribute karta hai, jaise ek warehouse product ko distribute karta hai.

Types of Export:
1. Named Export  
2. Default Export

Named Export
-----------------------
Named export me object ke form me data export hota hai. Import karte waqt same name ka use karna padta hai.

Example:
// module.js
let name = 'amit patel';
let age = 21;
export { name, age };

// import
import { name, age } from './module.js';

// object destructuring jaisa
let obj = { name, age };
let { name, age } = obj; // correct
let { amit } = obj; // amit is undefined

// array ke form me export
let name = 'amit patel';
let age = 21;
export default [name, age];

// import
import data from './module.js';
const [n, a] = data;


Default Export
-------------------
Default export me sirf ek hi cheez export hoti hai, aur usse kisi bhi naam se import kiya ja sakta hai.

Example:
// module.js
let a = 10;
export default a;

// import
import b from './module.js';


Import Summary
------------------------

Default export:
import anyName from './module.js';

Named export:
import { name1, name2 } from './module.js';

Default array export:
import data from './module.js';
const [val1, val2] = data;


CommonJS Module
-------------------------
Ye Node.js ke traditional module system hai. Isme module.exports aur require() ka use hota hai.

Export:
module.exports = {};
module.exports = name;

Import:
const variableName = require('./path');
const { name } = require('./path');
const [name1, name2] = require('./path');

// Agar object export kiya:
const obj = require('./module');
console.log(obj.name);

// Agar direct value export ki:
const value = require('./module');
console.log(value);




Callbacks and Event Emitters  
-----------------------------------

Callback  
------------  
Callback ek aisa function hota hai jo kisi doosre function me argument ke roop me pass kiya jata hai.  
Ye tab call hota hai jab uski zarurat hoti hai, yani asynchronously ya kisi kaam ke complete hone ke baad.

Example:  
function a(cb) {
   cb();
}

a(() => {
   console.log('hello node js');
});


Real-life Example (with setTimeout):  
function greet(name, callback) {
   console.log('Hi ' + name);
   callback();
}

function sayBye() {
   console.log('Bye!');
}

greet('Ashish', sayBye);


Event Emitters  
-------------------------
EventEmitter Node.js ka ek core module hota hai jo events ko handle karta hai.  
Iska use ham custom events create aur handle karne ke liye karte hain.

ye pub/sub model pe kam karata hai 

EventEmitter ke through hum:
- Event define kar sakte hain
- Event emit kar sakte hain
- Event ke liye listener attach kar sakte hain

Syntax:
const EventEmitter = require('events');
const event = new EventEmitter();

event.on('eventName', () => {
   console.log('Event triggered!');
});

event.emit('eventName');


Example:
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('greet', () => {
   console.log('Hello! This is a custom event.');
});

myEmitter.emit('greet');


// Multiple listeners
myEmitter.on('greet', () => {
   console.log('Another listener for greet event.');
});

myEmitter.emit('greet');


Passing data in event:
myEmitter.on('welcome', (name) => {
   console.log(`Welcome, ${name}!`);
});

myEmitter.emit('welcome', 'Ashish');


// One-time listener:
myEmitter.once('login', () => {
   console.log('User logged in!');
});

myEmitter.emit('login');
myEmitter.emit('login'); // Won’t run again



How Node.js Runs Behind the Scenes
------------------------------------------

Ek file banao aur run karo is code ko:

------------------------------------------
console.log(__filename)
console.log(__dirname)
------------------------------------------

Ab dekho — kuchh print hoga console pe. Matlab ye variables exist karte hain.  
Lekin socho — humne to __dirname aur __filename banaya nahi, na hi import kiya.  
To ye mil kaha se rahe hain?

🔍 Jab Node.js ko run karte ho, to actually hota kya hai?

Node.js tumhari har file ko run karne se pehle kuch **global objects** set karta hai,  
jaise browser me `window.a = 'ashish'` set karo, to `window.a` accessible ho jata hai.

Waise hi Node.js me bhi kuch global variables hote hain:
- `global`
- `globalThis`
- `process`
- `Buffer`
- `setTimeout`, etc.

In sab ko hum direct use kar sakte hain bina import kiye.

🛑 Lekin `__filename` aur `__dirname` in global objects me nahi milte:

------------------------------------------
console.log(global.__filename);   // undefined
console.log(global.__dirname);    // undefined
------------------------------------------

To fir milte kahaan se hain?

💡 Answer: Node.js tumhari har file ko ek function ke andar **wrap** kar deta hai run karne se pehle:

------------------------------------------
(function (exports, require, module, __filename, __dirname) {
   // tumhara code yahan hota hai
});
------------------------------------------

Ye ek special wrapper function hai jise **IIFE (Immediately Invoked Function Expression)** ke concept par banaya gaya hai.

Yani:
- Node.js tumhari har JS file ko ek function me lapet deta hai
- Aur us function me arguments ke roop me `__filename`, `__dirname` etc. provide karta hai
- Isliye ye variables tumhari file me directly accessible hote hain

📌 Iska matlab:
- `__dirname` aur `__filename` **truly global** nahi hain
- Ye **module-scoped variables** hain
- Aur sirf Node.js ke wrapper function ke through available hote hain

🧠 Wrap-up:
- Node.js tumhari har file ko function me wrap karta hai
- Ye function arguments ke through special variables deta hai
- Isliye `__dirname` aur `__filename` tum use kar paate ho
- Lekin ye `global` object ka part nahi hote







URL Module 
-------------------------

ye ek aisa build-in module hai jo url ko pars karane ka kam karata hai 
ab url kya hota hai 

url 
-----------

url (Uniform Resource Locator) Ye ek web address hota hai jo kisi resource (jaise ki webpage, image, video, API endpoint) ko Internet par uniquely identify karta hai

URL ek address hota hai jise browser me dal kar kisi website ya web resource tak pahuch sakte hain

example
----------

https://ashish:1234@example.com:8080/path/to/page?name=ashish&age=25#section1

explain
---------------


  href: 'https://ashish:1234@example.com:8080/path/to/page?name=ashish&age=25#section1',
  origin: 'https://example.com:8080',
  protocol: 'https:',
  username: 'ashish',
  password: '1234',
  host: 'example.com:8080',
  hostname: 'example.com',
  port: '8080',
  pathname: '/path/to/page',
  search: '?name=ashish&age=25',
  searchParams: URLSearchParams { 'name' => 'ashish', 'age' => '25' },
  hash: '#section1'


new URL()
--------------

ye ek constructor hai jo user se url mangata hai aur ek object return karata hai url ko pars kar ke 

const { URL } = require('url');

const myURL = new URL('https://ashish:1234@example.com:8080/path/to/page?name=ashish&age=25#section1');

console.log(myURL);

output->

URL {
  href: 'https://ashish:1234@example.com:8080/path/to/page?name=ashish&age=25#section1',
  origin: 'https://example.com:8080',
  protocol: 'https:',
  username: 'ashish',
  password: '1234',
  host: 'example.com:8080',
  hostname: 'example.com',
  port: '8080',
  pathname: '/path/to/page',
  search: '?name=ashish&age=25',
  searchParams: URLSearchParams { 'name' => 'ashish', 'age' => '25' },
  hash: '#section1'
}












