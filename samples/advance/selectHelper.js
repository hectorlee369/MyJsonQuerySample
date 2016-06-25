/**
 * New node file
 */
var jsonQuery = require('json-query');

var data = {
		  people: [
		           {name: 'Matt', country: 'NZ', rating: 5, starred: false},
		           {name: 'Pete', country: 'AU', rating: 2, starred: true},
		           {name: 'Mikey', country: 'NZ', rating: 10, starred: true}
		  ]
		};

var result = jsonQuery('people:select(name, country)', {
  data: data,
  locals: {
    select: function (input) {
      if (Array.isArray(input)) {
        var keys = [].slice.call(arguments, 1)
        return input.map(function (item) {
          return Object.keys(item).reduce(function (result, key) {
            if (~keys.indexOf(key)) {
              result[key] = item[key]
            }
            return result
          }, {})
        })
      }
    }
  }
});

console.log(result);