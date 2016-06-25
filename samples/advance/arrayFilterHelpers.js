/**
 * You can also use helper functions inside array filtering:
 */
var jsonQuery = require('json-query');

var data = {  // json格式的資料物件
		  people: [
		    {name: 'Matt', country: 'NZ', updatedAt: new Date()},
		    {name: 'Pete', country: 'AU', updatedAt: new Date(1970,1,1)},
		    {name: 'Mikey', country: 'NZ', updatedAt: new Date(2070,1,1)}
		  ]
		};
		 
var result = jsonQuery('people[*:recentlyUpdated]', {
  data: data,
  locals: {
    recentlyUpdated: function (item) {
      return item.updatedAt < Date.now() - (30 * 24 * 60 * 60 * 1000);
    }
  }
});

console.log(result);