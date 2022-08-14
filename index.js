//for single line comment using--> ctrl+/
//for multiline comment using--> /*     */ 

// 1:This is all console APIs
console.log("HELLO WORLD");
console.error("this is an error");
console.warn("this is warnning");
console.assert(4==6);
console.assert(4==(6-2));
console.assert(4==4);
console.clear();
//alert("me");


// 2:Variables in js
//contaioner which store the data values
// var keyword is used to define variables in js
// var variable_name
var number1=25;
var number2=25;
console.log(number1+number2);


// 3:DATA TYPES IN JS

//Number data types
var num1=2536;
var num2=256.32;
console.log(num1);
console.log(num2);

//String data types
var str1="this is my double quote string";
var str2='this is my single quote string';
console.log(str1);
console.log(str2);

//Object data types-->key:value
//it gives the sequence wise character
var marks={
    rahul:50.24,
    rohan:90.99,
    rohit:70.00,
    anshul:80.25,
    keshav:90.97,
}
console.log(marks);

//Boolean data types                                       
var a=true;          
var b=false;
console.log(a,b);
console.log(b,a);

//var und="undefined"
var und;
var und=undefined;
console.log(und);           // it shows undefined variable-->not defined
console.log(undefined);    //it also shows undefined variables

var n=null;                //it shows null-->nothing inside it
console.log(n);


/*
4:There are two data types
1:Primitive data types--> Undefined,Null,Number,String,Symbol
2:Reference data types--> Arrays and Objects

*/

//Array data type
//indexing starts with 0
//case sensitive language
var arr=[20,30,40,50,60,70];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);

var arr1=[10,20,"Rahul","ROHIT",30,40];
console.log(arr1);
console.log(arr1[3]);
console.log(arr1[2]);


//5: Operators in JS
//Arthmatic operator--> +,-,*,/,%
//Assignment operator--> =,+=,-=,/=,%=
//Compartion operator--> (==,>=,<=,>,<,!=) --> return boolena value
//Logical operators--> &&,||,!
//Bitwise operators--> &,|,^,>>,<< 

var a=20;
var b=30;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);

var c=b;
console.log("Now value of b is equal to c=",c);

c+=2;     //32
c-=3;     //29
console.log("Now c=",c);


// 6:Functions in JS




