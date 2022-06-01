# Consid Sitevision functions
This is a JavaScript package for handling standard JavaScript functions commonly used in Sitevision. 

Available functions in the npm package **@consid/sitevision-functions**:
## Arrays

Sort arrays on date in descending order. 
```js
/**
 * @param {items} Array
 * @returns array with the newest array first
*/
function sortArraysOnDate(items)
```

Get part of array based on a maximum amount of arrays that should be returned.
```js
/**
 * @param {items} Array
 * @param {maxItems} number amout of arrays to be returned af function execution
 * @returns array 
*/
function getNumberOfArrays(items, maxItems)
```

### Add new functions

1. create a new folder in ```/functions/example``` and create a new ```example.js``` file with the same name as the folder.

2. Export your function in the ```example.js``` file:

```js
export const example = () => {
}
```
3. Import and export your new function in ```index.js```

```js
import {
   example
} from './functions/example/example';

export {
  example
};
```

Now your done and ready to push your changes and add a new **pull-request** to the repository! 🎉🎉🎉
### Test functionality

The application have a javascript file name **app.js** which imports **sitevisionFunctions** as default with all functions available in the npm package. So that it is possible to test the new functionality before a new release of the package.

1. Install the application:
> npm install

2. Run the application and test the functionality in **app.js**:
> npm run dev

3. Open your favorite browser and type in the address: **http://127.0.0.1:3000/**

Now you should see a text with **Test environment ready** and your all set to start coding new functionality! 💻




#### Example how functionality could be tested in  ```app.js```:
```js
import * as sitevisionFunctions from './index';
import * as http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

let array = [
   { id: 1, date: "Mar 12 2012 10:00:00 AM" },
   { id: 2, date: "Mar 8 2012 08:00:00 AM" },
   { id: 2, date: "Mar 4 2012 08:00:00 AM" },
   { id: 2, date: "Mar 9 2012 08:00:00 AM" }
];

const server = http.createServer((req, res) => {
   let newArray = sitevisionFunctions.sortArraysOnDate(array);
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end(JSON.stringify(newArray));
});

server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});
```


