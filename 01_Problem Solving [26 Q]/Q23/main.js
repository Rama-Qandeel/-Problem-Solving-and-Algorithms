console.log('Problem Solving Q:23 ');

/*getQueryString   */

/*  
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.
If the url does not contain a query string, return undefined
*/

function getQueryString(url) {
  if (url.indexOf('?') === -1) return;
  let result = [];
  // console.log('splite',url
  // .split(/[&?]/));
  url
    .split(/[&?]/)
    .slice(1)
    .forEach(str => {
      let tuple = str.split('=');
      console.log('tuple',tuple);
      result.push(tuple);
    });
  return result;
}


/* 
Examples:
getQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
getQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
getQueryString("http://example.com") // undefined
*/