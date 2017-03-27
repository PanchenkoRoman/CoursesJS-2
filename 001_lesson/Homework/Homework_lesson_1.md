# Homework

###Задача 1. 
Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.

```
function find(arr, value){
	for (var i = 0; i<arr.length; i++) {
		return arr.indexOf(value);
	}
}

```

###Задача 2.  
Отсортируйте массив arr, используя алгоритм пузырьковой сортировки.

```
var arr = [1, 90, 789, 56, 45, 34, 678, 78, -90, -6, 5, 3, 6]
   var n = arr.length;
   for (var i = 0; i < n-1; i++)
     { for (var j = 0; j < n-1-i; j++)
        { if (arr[j+1] < arr[j])
           { var t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t; }
        }
     }                     
alert(arr);
```

###Задача 3. 
Напишите функцию bigToSmall, которая будет принимать один аргумент arr (двухмерный массив). 
Ваше задание: 
1. Привести двухмерный массив к одномерному.  
2. Отсортировать массив в нисходящем порядке. 
3. Использовать символ ‘>’ как разделитель при превращении массива в строку.  

```
function bigToSmall(arr){
	function compareNumeric(a, b) {
  return b - a;
}
	var arr = [[1,2],[3,4],[5,6]];
	var str = arr.join(',');
	var arr2 =str.split(',');
	arr2 = arr2.sort(compareNumeric);
	var str2 = arr2.join(">");
	return 	str2;
}

  bigToSmall([[1,2],[3,4],[5,6]])  "6>5>4>3>2>1"
  bigToSmall([[1,3,5],[2,4,6]])  "6>5>4>3>2>1"
  bigToSmall([[1,1],[1],[1,1]])  "1>1>1>1>1" 
  ```

