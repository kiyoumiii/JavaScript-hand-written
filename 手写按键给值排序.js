const arr = [
    {name:'a', age: 4},
    {name:'b', age: 6},
    {name:'c', age: 3},
    {name:'d', age: 2},
    {name:'e', age: 9},
    {name:'f', age: 8}
  ];
  
  arr.sort((a, b) => b.age - a.age);
  
  console.log(arr);