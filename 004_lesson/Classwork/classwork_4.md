#Class Work 

###Задача 1 

Напишите функцию sumArgs, которая суммирует все свои аргументы. При решении задачи используйте метод call или apply. 
```
function sumArgs() {
  arguments.reduce = [].reduce;
  return arguments.reduce.call(arguments, function(a,b){
  	return a+b;	
  });
}

alert( sumArgs(1, 2, 3) );

```

###Задача 2  

Перепишите с использованием встроенного метода bind: 
```
function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

var user = {
  firstName: "Вася",
  sayHi: function() {
    alert( this.firstName );
  }
}; 

var f = bind(user.sayHi, user);  
f(); 
``` 

```
var user = {
  firstName: "Вася",
  sayHi: function() {
    alert( this.firstName );
  }
}; 

var f = user.sayHi.bind(user);  
f(); 
``` 

###Задача 3 

Напишите функцию joinArgs, которая выводит свои аргументы, разделенные символом  ‘*’ на экран в виде строки. 
Используйте прием “одалживания методов”.  У вас должно получиться: 
```
function joinArgs(){
	arguments.join = [].join;
	return arguments.join.call(arguments, '*')
}

joinArgs(1,2,3); 
joinArgs('hello', 'world', '!');
```
