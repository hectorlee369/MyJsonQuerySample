/**
 * Inner queries
 */
var jsonQuery = require('json-query'); // 宣告程式使用套件

var data = {
		  page: {
		    id: 'page_1',
		    title: 'Test'
		  },
		  comments_lookup: {
		    'page_1': [
		      {id: 'comment_1', parent_id: 'page_1', content: "I am a comment 1"},
		      {id: 'comment_2', parent_id: 'page_2', content: "I am a comment 2"}
		    ]
		  }
		};
		 
//get the comments that match page's id 
var result = jsonQuery('comments_lookup[{page.id}]', {data: data});

console.log(result); // 將節點物件寫出在console中
