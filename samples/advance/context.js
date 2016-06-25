/**
 * Specifying context ('data', 'source', and 'parent' options) is good for databinding 
 * and working on a specific object and still keeping the big picture available.
 */
var jsonQuery = require('json-query');

var data = {
  styles: {
    bold: 'font-weight:strong',
    red: 'color: red'
  },
  paragraphs: [
    {content: "I am a red paragraph", style: 'red'},
    {content: "I am a bold paragraph", style: 'bold'},
  ],
};

var pageHtml = '';
data.paragraphs.forEach(function(paragraph){
  var style = jsonQuery('styles[{.style}]', {data: data, source: paragraph}).value;
  var content = jsonQuery('.content', {data: data, source: paragraph}).value; // pretty pointless :) 
  pageHtml += "<p style='" + style + "'>" + content + "</p>";
});

console.log(pageHtml);