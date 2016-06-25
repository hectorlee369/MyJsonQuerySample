/**
 * Deep queries
 * Search through multiple levels of Objects/Arrays
 */
var jsonQuery = require('json-query'); // 宣告程式使用套件

var data = {
  grouped_people: {
    'friends': [
      {name: 'Steve', country: 'NZ'},
      {name: 'Bob', country: 'US'}
    ],
    'enemies': [
      {name: 'Ed John', country: 'NZ'}, // Can't lookup ????
      {name: 'Evil Steve', country: 'AU'}
      
    ]
  }
};
 
var result = jsonQuery('grouped_people[][*country=NZ]', {data: data});


console.log(result); // 將節點物件寫出在console中
