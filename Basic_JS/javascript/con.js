// Section 1: Play With Variables
console.log(1+2);
console.log("apple"+"orange");
console.log(1+2+"apple");
console.log("apple"+1+2);
console.log(1+true);
console.log(0 == false);
console.log(1==true);
console.log(2=="2");

// Section 2: Play with Arrays

//A Cricket Team has 11 players. Create a list with the names of all players.
let list=["Gill","Rohit","Kohli","Surya","Hardik","Jadeja","Pant","Axar","Shami","Bumrah","Akshardeep"];
console.log(list);

// Unfortunately, the first player had an injury. Remove him from the list of players.
list.shift();
console.log(list);

//Now, find out the number of players
console.log(list.length);

//Add another player to the above list of players to make the count 11.
list.push("Dhoni");
console.log(list);

// The cricket board has decided to take photographs of all players and so they would need the players list in sorted format.
list.sort();
console.log(list);

// Display all the Players name and assign a random jersey number. For example. MS Dhoni-7
list.forEach((val,i) => {
    list[i]=val+"-"+Math.round(Math.random()*30);
});
console.log(list);

// The cricket board wants to print the names of all players in uppercase and store it in a different location for printing jerseys. Do not modify the existing players list.
let jersey=[];
list.forEach((val,i,)=>{
    jersey[i]=val.toUpperCase();
});
console.log(jersey);



// Section 3 Play with functions:

// Create a function to display numbers from 1 to 100.
function displayNum(){
   for(let i=0;i<=100;i++)
   {
       console.log(i);
   }
}
displayNum();

//Create a function to display today's date in DD/MM/YYYY format.
function diplayDate()
{
    let convertedStartDate = new Date();
    console.log(convertedStartDate.getMonth() + 1+"/"+convertedStartDate.getDate()+"/"+convertedStartDate.getFullYear());
}
diplayDate();

// Create a function which accepts a Celsius value as parameter and returns the Fahrenheit value.
function convertFarhenheit(celcius){
     console.log(celcius*1.8+32);
}
convertFarhenheit(1);

// Create a function which accepts an array of numbers as parameter and return the average of those numbers.
function average(array){
    let sum=0;
   for(let i=0;i<array.length;i++)
   {
    sum+=array[i];
   }
   console.log(sum/array.length);
}
average([2,3,9]);

// Create a function to reverse a given string.
function reverse(str)
{
    let sum="";
    for(let i=str.length-1;i>=0;i--)
    {
       sum+=str[i]; 
    }
    console.log(sum);
}

reverse("hello");