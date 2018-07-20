// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/* 
Example of JSON:
    {
        "Bob": [{"larry": [{"harry": []}]}],
        "Truman":"I love Pizza,
        "Frank": ["eat my diq"],
    }
*/

let stringifyJSON = function(obj){
    if(typeof obj === 'object' && !Array.isArray(obj)){
      let object = '{'
      for(var key in obj){
        object += `${key}: ${stringifyJSON(obj[key])},`
      }
      return `${object}}`
    } else if(Array.isArray(obj)){
        let stringified = obj.reduce(function(stringy,element){
            stringy.push(stringifyJSON(element));
            return stringy
        },[])
        return '[' + stringified.join(',') + ']';
      } else if(typeof obj === 'string'){
          return '"' + obj + '"';
        } else if(typeof obj === 'number'){
            return obj + '';
          } else if(typeof obj === 'undefined'){
              return 'undefined';
            } else if(typeof obj === 'null'){
                return 'null';
              } else if(typeof obj === 'function'){
                  return 'function'
                }

}
console.log(stringifyJSON({
    "Bob": [{"larry": [{"harry": []}]}],
    "Truman":"I love Pizza",
    "Frank": ["wahooo"],
}))


/*
{},[],"a",9,undefined, null, function
*/