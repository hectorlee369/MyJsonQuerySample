/**
 * If options.enableRegexp is enabled, you can use the ~ operator to match RegExp:
 */
var jsonQuery = require('json-query'); // 宣告程式使用套件

var data = {  // json格式的資料物件
  people: [
    {name: 'Matt', country: 'NZ', rating: 5, starred: false},
    {name: 'Pete', country: 'AU', rating: 2, starred: true},
    {name: 'Mikey', country: 'NZ', rating: 10, starred: true}
  ]
};
 
var name = jsonQuery('people[*name~/^P/i]', { // 資料某一節點的物件
  data: data,
  allowRegexp : true
});


console.log(name); // 將節點物件寫出在console中
