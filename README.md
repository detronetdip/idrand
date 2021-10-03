# idrand

A random alphanumeric id generator.

### Usage
 First install it using `npm`;
 ```
 npm i idrand
 ```
 then `require` `idrand` in your code.
```
const newId = require('idrand');
```
Now you can call `newId` in order to get a random alphanumeric `id`.

```
const id = newId();
```
By default it returns 10 digit alhanumeric id but you can specify the digit to be returned at the time of calling the function.

If you need 25 digit alphanumeric id you can write -
```
const id=newId(25);
```
and it will return 25 digit alphanumeic id.