var programingLanguages =['Javascript','Php','Python','C#'];

// programingLanguages.push('C++')
// programingLanguages.pop();
programingLanguages.unshift('Ruby on rails');
// programingLanguages.shift();
programingLanguages.splice(0,2,'Ruby');

console.log(programingLanguages);
console.log(Math.log()*5);

var places=['Paris','London','Berlin','New York'];
var [firstPlace, ,secondPlace]=places;
console.log(secondPlace);

var numbers=[1,2,3,4,5,6,7,8];
var[first,second, ...otherNumbers]=numbers
console.log(first);
console.log(second);
console.log(otherNumbers.toString());


