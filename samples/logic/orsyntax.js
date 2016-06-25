/**
 * Or syntax
 * 
 * ?????????????
 */
var jsonQuery = require('json-query'); // 宣告程式使用套件

var data = {  // json格式的資料物件
  people: [
    {name: 'Matt',greetingName:'Ma', country: 'NZ', rating: 5, starred: false},
    {name: 'Pete',greetingName:'Pe',  country: 'AU', rating: 2, starred: true},
    {name: 'Mikey',greetingName:'Mi',  country: 'NZ', rating: 10, starred: true}
  ]
};
 
var name = jsonQuery('people[*rating>2]|people[*starred=true]', { // 資料某一節點的物件
  data: data
});


console.log(name); // 將節點物件寫出在console中

