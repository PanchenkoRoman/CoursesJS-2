#Class Work 

###Задача 1 
Почему первое равенство – неверно, а второе – верно?
```
alert( [] == [] ); // false (два обьекта равны если только это один 				   //  и тот же обьект)
alert( [] ==! [] ); // true
```
Какие преобразования происходят при вычислении?


###Задача 2  
Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:
* Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
* Метод sum() возвращает сумму двух значений принятых от пользователя.
* Метод mul() возвращает произведение двух значений принятых от пользователя. 
```
function Calculator(){
	this.read = function(){
		this.a = +prompt('enter a');
		this.b = +prompt('enter b');
	}
	this.sum = function(){
		return this.a + this.b;
	}
	this.mul = function(){
		return this.a * this*b;
	}
	
}
var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );
```
###Задача 3 
Напишите функцию-конструктор Summator, которая создает объект с двумя методами. 
* Метод sum(a,b) возвращает сумму двух значений;
* Метод run() запрашивает два значения при помощи prompt и выводит их сумму, используя метод sum. 
В итоге вызов new Summator().run() должен спрашивать два значения и выводить их сумму.
```
function Summator() {

  this.sum = function(a, b) {
    return a + b;
  };

  this.run = function() {
    var a = +prompt('a?', 0);
    var b = +prompt('b?', 0);
    alert("sum=" + this.sum(a,b));
  };
}

new Summator().run();
```
