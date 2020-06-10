//==== Chapter 1 ====/

// 01
alert("Javascript Alert!");

// 02
alert("Error! Please Enter a valid Password");

// 03
alert("Welcome to JS Land... \n Happy Coding.");

// 04
alert("Welcome to JS Land");
alert("Happy Coding!");

// 05
console.log("Hello... I can run JS through my web browser console");

//06
alert("My Name Is Ahsan");

//07
alert("Body (after your page’s HTML)");

//==== Chapter 2 ====//

// 01
var username="my first variable";
alert(username);

// 02
var myName="My Name Is Ahsan Jamil";
alert(myName);

// 03
var jsVariable="Hello World";
alert(jsVariable);

// 04
var userName="Ahsan Jamil";
var age="23";
var course="Web and Mobile Application";

alert(userName);
alert(age);
alert(course);

// 05
var foodName="Pizza \n Pizz \n Piz \n Pi \n P";
alert(foodName);

// 06
var email="My email address is ahsanjamil@live.com";
alert(email);

// 07
var book="I an rying to learn from the book A smarter way to learn JavaScript";
alert(book);

// 08
document.write("Yah! i can write HTML content through JAVASCRIPT");

// 09
alert("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");


//==== Chapter 3 ====//

// 01
var myAge="Iam 23 Year old";
alert(myAge);

// 02
var visit="You have visited this site 10 times";
alert(visit);

// 03
var birthYear=1997;
document.write("My Birth year is" + birthYear + "<br> Data type of my declair variable is number");

// 04
document.write("Ahsan Jamil ordered 5 T-shirt(s) on Ebay Clothing store.");


//==== Chapter 4 ====//

// 01
var title= "<b>Rules for naming JS variables</b>";
var ques1= "Variable names can only contain number, $ and_ . For Example: $my_1stVariable";
var ques2= "Variables must begin with a $name, _name or name. For example $name, _name or name";
var ques3= "Variable names are case sencetive";
var ques4= "Variable names should not be JS Key word";

document.write(title + "<br>" + ques1 + "<br>" + ques2 + "<br>" + ques3 + "<br>" + ques4);


//==== Chapter 5 ====//

// 01
var a=44;
var b=20;
var sumof=a+b;
document.write("sum of 44 and 20 is equal to: "+ sumof);

// 02
var a=44;
var b=20;
var sum=a+b;
var subtract=a-b;
var multiply= a*b;
var divide= a/b;
var moduls=44%20;
document.write("sum of 44 and 20 is : "+ sum +"<br>");
document.write("subtract of 44 and 20 is : "+ subtract +"<br>");
document.write("multiply of 44 and 20 is : "+ multiply +"<br>");
document.write("divide of 44 and 20 is : "+ divide +"<br>");
document.write("moduls of 44 and 20 is : "+ moduls +"<br>");

// 03
var a=5;
document.write("Initial Value "+a+"<br>"); //5
var b= ++a;
document.write("Value after incerement is "+b+"<br>"); //6
var c=b+a+1
document.write("Value after addition is "+c+"<br>"); //13
var d=c-1;
document.write("Value after decrement is "+d+"<br>"); //12
var e=d-12;
document.write("The remander is "+e); //0

// 04
var costMovie=600;
var totCost=costMovie*5;
document.write("Total cost to buy 5 tickets to a movie is "+totCost+"PKR");

// 05
//table of 4
document.write("Table of 4"+"<br>")
var tab=4;
document.write(tab+"*"+"1"+"="+tab*1+"<br>");
document.write(tab+"*"+"2"+"="+tab*2+"<br>");
document.write(tab+"*"+"3"+"="+tab*3+"<br>");
document.write(tab+"*"+"4"+"="+tab*4+"<br>");
document.write(tab+"*"+"5"+"="+tab*5+"<br>");
document.write(tab+"*"+"6"+"="+tab*6+"<br>");
document.write(tab+"*"+"71"+"="+tab*7+"<br>");
document.write(tab+"*"+"8"+"="+tab*8+"<br>");
document.write(tab+"*"+"9"+"="+tab*9+"<br>");
document.write(tab+"*"+"10"+"="+tab*10+"<br>");

// 06

var cel_Temp=25;
var fer_Temp=70;

document.write("70 F is "+(fer_Temp-32)*5/9+" C");
document.write("<br>");
document.write("25 C is "+(cel_Temp*9/5)+32+" F");

// 07
document.write("<h3>Shopping Cart</h3>"+"<br>");

var itema=650;
var itemb=100;
var shp=100;
document.write("price of item 1 is "+itema+"<br>"); 
document.write("Quantity of item 1 is 3"+"<br>");
document.write("price of item 2 is "+itemb+"<br>");
document.write("Quantity of item 2 is 7"+"<br>");
document.write("Shipping Charges"+shp+"<br>");

document.write("Total cost of your order is "+(itema*3+itemb*7+shp));

// 08
var obt_mks=658;
var tot_mks=800;

var per_mks=obt_mks*100/800;
document.write("<h3>Marks Sheet</h3>")
document.write("Total marks: "+tot_mks+"<br>");
document.write("Marks obtain: "+obt_mks+"<br>");
document.write("Percentage: "+per_mks+"%");

// 09 
var us_dollar=10;
var sud_riyal=25;


document.write("Total Currency in  PKR: "+(us_dollar*104.80+sud_riyal*28));

// 10
var add=5;
var mul=10;
var div=2;
document.write(64+add*mul/div);

// 11
var curt_year=2020;
var brth_year=1997;

document.write("<h3>Age Calculator</h3>");
document.write("Current Year: " + curt_year+ "<br>");
document.write("Birth Year: " + brth_year+ "<br>");
document.write("Year Age is: " + (curt_year-brth_year));

// 12
document.write("<h3>The Geometrizer</h3>");
var radius=20;
var pie=3.142;

document.write("Radius of a circle:"+ radius+"<br>");
document.write("The circumference is:" + 2*pie*radius+"<br>");
document.write("The area is:" + pie*radius*radius);

// 13
var fvrt_snk="chocklate chip";
var cunt_age=15;
var mx_age=65;
var amnt_snk=3;
document.write("<h3>The Lifetime Supply Calculator</h3>");
document.write("Favourite Snack: " + fvrt_snk +"<br>");
document.write("Current age: " + cunt_age +"<br>");
document.write("Estimated Maximum Age : " + mx_age+"<br>");
document.write("Amount of snacks per day: " + amnt_snk +"<br>");

document.write("You will need "  +(mx_age-cunt_age)*amnt_snk+" to last you until the ripe old age of " + mx_age);


//==== Chapter 6-9 ====//

// 01
document.write("Result:"+"<br>");
document.write("The value of a is: 10"+ "<br><br><br>");

var a=10;
var fis= ++a;
document.write("The value of ++a is: "+fis+"<br>")
document.write("Now the value of a is: "+fis+"<br><br>");
var sec= a++ + 1;
document.write("The value of a++ is: "+fis+"<br>")
document.write("Now the value of a is: "+sec+"<br><br>");
var thr= --a;
document.write("The value of --a is: "+fis+"<br>")
document.write("Now the value of a is: "+thr+"<br><br>");
var four= a-- - 1;
document.write("The value of a-- is: "+fis+"<br>")
document.write("Now the value of a is: "+four+"<br>");

// 02
var a=2;
var b=1;

var result= --a - --b + ++b + b--;

document.write("a is : "+a+"<br>");
document.write("b is : "+b+"<br>");
document.write("result is : "+result+"<br>");

// 03
var userName=prompt("Enter Your Name");
document.write("<h5>"+userName+"</h5>");

// 04
// Not available in assignment paper

// 05
var a=prompt("Enter Value");

if(a==""){
document.write("Table of 5"+"<br>")
var tab=5;
document.write(tab+"*"+"1"+"="+tab*1+"<br>");
document.write(tab+"*"+"2"+"="+tab*2+"<br>");
document.write(tab+"*"+"3"+"="+tab*3+"<br>");
document.write(tab+"*"+"4"+"="+tab*4+"<br>");
document.write(tab+"*"+"5"+"="+tab*5+"<br>");
document.write(tab+"*"+"6"+"="+tab*6+"<br>");
document.write(tab+"*"+"71"+"="+tab*7+"<br>");
document.write(tab+"*"+"8"+"="+tab*8+"<br>");
document.write(tab+"*"+"9"+"="+tab*9+"<br>");
document.write(tab+"*"+"10"+"="+tab*10+"<br>");
}else{
document.write(a+"*"+"1"+"="+a*1+"<br>");
document.write(a+"*"+"2"+"="+a*2+"<br>");
document.write(a+"*"+"3"+"="+a*3+"<br>");
document.write(a+"*"+"4"+"="+a*4+"<br>");
document.write(a+"*"+"5"+"="+a*5+"<br>");
document.write(a+"*"+"6"+"="+a*6+"<br>");
document.write(a+"*"+"71"+"="+a*7+"<br>");
document.write(a+"*"+"8"+"="+a*8+"<br>");
document.write(a+"*"+"9"+"="+a*9+"<br>");
document.write(a+"*"+"10"+"="+a*10+"<br>");
}

// 06
document.write("<h4>Subject &nbsp; Total Marks &nbsp; Obtained Marks &nbsp; Percentage </h4>");

var sub1= prompt("Enter First Subject Name");
var sub2= prompt("Enter Second Subject Name");
var sub3= prompt("Enter Third Subject Name");

var sub_mks1= prompt("Enter First Subject Marks");
var sub_mks2= prompt("Enter Second Subject Marks");
var sub_mks3= prompt("Enter Third Subject Marks");

var sum3 = (+sub_mks1)+(+sub_mks2)+(+sub_mks3);

document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+sub1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+sub_mks1+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+(sub_mks1*100/100+"%")+""+"<br>");

document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+sub2+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+sub_mks1+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+(sub_mks2*100/100+"%")+""+"<br>");

document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+sub3+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+sub_mks1+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+(sub_mks3*100/100+"%")+""+"<br>");



document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 300 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+sum3+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+sum3*100/300+"%"+" ");
