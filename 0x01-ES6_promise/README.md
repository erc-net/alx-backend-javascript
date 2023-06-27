![**JavaScript Promises**](https://www.freecodecamp.org/news/content/images/2020/06/Ekran-Resmi-2020-06-06-12.21.27.png)
**Promises in ES6 are a way to handle asynchronous operations in JavaScript. They provide a way to write code that is more readable and easier to understand than traditional callback-based code. A promise represents a value that may not be available yet, but will be at some point in the future. Promises have three states: `pending`, `fulfilled`, and `rejected`. Once a promise is fulfilled or rejected, it cannot change its state. You can use the `then` method to handle the fulfillment of a promise and the `catch` method to handle its rejection.**


**1:Creating a Promise**
const myPromise = new Promise((resolve, reject) => {
  // Do some asynchronous operation
  if (/* Operation successful */) {
    resolve('Operation successful');
  } else {
    reject('Operation failed');
  }
});

**2:Handling a fulfilled Promise**
myPromise.then((result) => {
  console.log(result); // Output: 'Operation successful'
}).catch((error) => {
  console.log(error); // Output: 'Operation failed'
});

**3:Chaining Promise**
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 1000);
});

promise1.then((result) => {
  console.log(result); // Output: 'Promise 1 resolved'
  return promise2;
}).then((result) => {
  console.log(result); // Output: 'Promise 2 resolved'
}).catch((error) => {
  console.log(error); // Output: Any error that occurred
});

