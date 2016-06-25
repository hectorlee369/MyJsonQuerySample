/**
 * Local functions (helpers)
 * Allows to to hack the query system to do just about anything.
 */

var jsonQuery = require('json-query');

var helpers = {
		  greetingName: function(input){
		    if (input.known_as){
		      return input.known_as
		    } else {
		      return input.name
		    }
		  },
		  and: function(inputA, inputB){
		    return inputA && inputB
		  },
		  text: function(input, text){
		    return text
		  },
		  then: function(input, thenValue, elseValue){
		    if (input){
		      return thenValue
		    } else {
		      return elseValue
		    }
		  }
		};
		 
		var data = {
		  is_fullscreen: true,
		  is_playing: false,
		  user: {
		    name: "Matthew McKegg",
		    known_as: "Matt"
		  }
		};
		 
		var result = jsonQuery('user:greetingName', {
		  data: data, locals: helpers
		}).value; //=> "Matt"
		console.log(result);
		
		 
		result = jsonQuery(['is_fullscreen:and({is_playing}):then(?, ?)', "Playing big!", "Not so much"], {
		  data: data, locals: helpers
		}).value; //=> "Not so much" 
		console.log(result);
		
		result = jsonQuery(':text(This displays text cos we made it so)', {
		  locals: helpers
		}).value; //=> "This displays text cos we made it so" 
		console.log(result);