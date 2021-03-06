/**
 * Params can be specified by passing in an array with the first param the query (with ? params) and subsequent params.
 */
var jsonQuery = require('json-query'); // 宣告程式使用套件

var data = {  // json格式的資料物件
  people: [
    {name: 'Matt', country: 'NZ'},
    {name: 'Pete', country: 'AU'},
    {name: 'Mikey', country: 'NZ'}
  ]
};
 
var name = jsonQuery(['people[*country=?]','NZ'], { // 資料某一節點的物件
  data: data
});


console.log(name); // 將節點物件寫出在console中
