//the average of the array:
var a=[4,1,3,5,7,2];
let sum=0;
for(var i=0;i< a.length;i++)
{
    sum=a[i]+sum;
}
console.log("the average of the array is:"+ sum);

//largest element in the array:

var greater=a[0];
for( var i=0; i<a.length;i++)
{
    if(a[i]>greater)
    {
        greater=a[i];
    }
    
}
console.log("the largest number in the array is:"+ greater);

//reverse a string


    var string = "hello";
    var ans ="";
    for (var i = string.length - 1; i >= 0; i--) {
        ans += string[i];
    }
    console.log("The reverse string is:"+ ans);


//Decimal To Binary 
function dectobinary(n)
{
	
	let binarynum = [];
    let string="";

	
	let i = 0;
	while (n > 0) {

		
		binarynum[i] = n % 2;
		n = Math.floor(n / 2);
		i++;
	}


	for (let j = i - 1; j >= 0; j--)
        string=binarynum[j];
		console.log(string);
}
let n = 10;
dectobinary(n);
	
//Array methods

var studentDatabase = []


function addDetails(name,email,phone,regId,age){
  var  student = {
    name:name,
    email:email,
    phone:phone,
    regId:regId,
    age:age
  }
   studentDatabase.push(student);
 
}
 
addDetails("john","john@email.com","9876543210","regid1001","20")
addDetails("wick","", "9876542310","regid1002","21")
addDetails("bruce","bruce@email.com","9876534210","regid1003","18")
addDetails("wayne","wayne@email.com","9876453210","regid1004","18")
addDetails("abraham","abraham@email.com","9786543210","regid1005","17")
console.log(studentDatabase)

console.log("------------------------------------")

var uppercaseName = studentDatabase.map(function(content) {
  return content.name.toUpperCase();
})

console.log("uppercase:")
console.log(uppercaseName);

console.log("------------------------------------")

var filterAge = studentDatabase.filter(function(item){
  return (item.age >=17 && item.age <=20)
})

console.log(filterAge);

console.log("------------------------------------")

var totalstudent = studentDatabase.reduce(function(accumulator){
  return accumulator + 1;
},0);

console.log("total no of students are:");
console.log(totalstudent);

console.log("------------------------------------")

var toFindEmail = studentDatabase.some(function(item){
  return item.email === "jon@email.com"
})

console.log(toFindEmail);

