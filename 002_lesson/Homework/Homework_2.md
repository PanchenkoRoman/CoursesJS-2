# Homework 

###Задача 1. 
Напишите функцию, которая принимает 1 параметр.
При первом вызове она его запоминает, при втором - суммирует переданный параметр с параметром, переданным при предыдущем вызове.

``` 
(function () {
function sum (val) {
  var temp = val;
  sum = function() {
  var arg = arguments[0] ? arguments[0] : 0;
  return temp = temp + arg;
};
  return sum();
}
console.log(sum(3)); //3
console.log(sum(8)); //11
console.log(sum(4)); //15
})();

```

###Задача 2. 
Создайте функцию strCount, которая принимает один аргумент (объект) и считает количество свойств строкового типа. 


```
function strCount(obj){
var counter = 0;
	for(var key in obj){
	if(typeof obj[key] == "string"){
	counter++;
}
}
return counter; 
}

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })

  ```

###Задача 3. 
   Напишите функцию, которая складывает числа при двойном вызове. 

```
function makeSumm(a) {

	 	return function(b) {
	 		 return a+b; 

	 	}
	}
alert(makeSumm(5)(6));
```
     
