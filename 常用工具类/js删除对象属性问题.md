

+ 因为对象在赋值时，其实是引用，并不是拷贝一份。

```javascript
Object.prototype.clone=function(){
        var newObj = new Object();
        for(elements in this){
          newObj[elements] = this[elements];
        }
        return newObj;
}
  var name = {a:'value1',b:'value2'};
  var name2 = name.clone();
  name2.a="aaa";
  delete name2.a;
````
