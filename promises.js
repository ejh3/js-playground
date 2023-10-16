/******************************* MDN Promise tutorials ************************************/

// Promises represent the eventual result of an asynchronous operation. 
// A Promise is in one of these states: pending, fulfilled, rejected.
// A promise can be passed callbacks that can work with whatever the promise resolves to. These 
// callbacks must also return promises. This allows them to be chained together.
console.log("MDN Promise tutorial");
const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
fetchPromise  // resolves to a Response object
  .then((response) => response.json())  // .json() returns a promise that resolves to a JSON 
  .then((data) => {  // once the promise resolves, we can access the data inside of the callback
    console.log(data[0].name);
  })
  // passes the fn console.log to catch. Might not work. See https://stackoverflow.com/a/28668819
  .catch(console.log.bind(console)); 

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");  // this promise resolves to the string "foo" after 300ms
    }, 300);
  });

myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then(console.log.bind(console));
// foo and bar and bar again and again and again

// Promise.all() takes an array of promises and returns a single promise
const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );
  
  Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
      for (const response of responses) {
        console.log(`${response.url}: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error(`Failed to fetch: ${error}`);
    });

async function main() {  
  var value = await Promise.resolve('Hey there');
  console.log('inside: ' + value);
  return 5;
}

var text = main();  
console.log('outside: ', text);