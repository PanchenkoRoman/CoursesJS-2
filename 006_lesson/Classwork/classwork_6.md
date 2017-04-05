#Class Work 

###Задача 1. 

Код для задачи: 
```
<body>
  <div>Пользователи:</div>
  <ul>
    <li>user1</li>
    <li>user2</li>
  </ul>

  <script>
    var head = document.getElementsByTagName(head)[0];
    var ul = document.getElementsByTagName(ul)[0];
    var li_2 = document.getElementsByTagName(li)[1];
  </script>

</body>

``` 

Задание: 

* Напишите код, который получит объект для тега head и запишет его в переменную.
* Напишите код, который получит объект для тега ul и запишет его в переменную.
* Напишите код, который получит объект для второго тега li и запишет его в переменную. 


###Задача 2.  

Код для  задачи: 

```
<body>

  <div id="widget" data-widget-name="menu">Выберите жанр</div>


  <script>
    var div = document.getElementById('widget');

    var widgetName = div.getAttribute('data-widget-name');
   
    var widgetName = div.dataset.widgetName;

    alert( widgetName ); // "menu"
  </script>
</body>
```
Задание: 

* Напишите код, который получит объект для тега div и запишите его в переменную.
* Запишите значение атрибута "data-widget-name" в переменную.


###Задача 3. 
Напишите код, который выделит все ячейки в таблице по диагонали красным цветом:

```
// в переменной td DOM-элемент для тега <td>
td.style.backgroundColor = 'red';
```

Link: https://jsfiddle.net/Roman_Panchenko/orf20tme/




