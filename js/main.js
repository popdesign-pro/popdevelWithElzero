console.log(
  "%c@ %cPeter%c Sherif",
  "color :red; font-size:20px;",
  "color:pink;font-weight:bold; font-size:20px;",
  "color:orange; font-size:20px;font-weight:bold;",
);
// Create Elements
let myWay = document.querySelector(".js");
myWay.className = "shadow-lg js mt-4 p-3 shadow container";
let myHead = document.createElement("h2");
myHead.className = "text-primary fs-20";
let myHeadIn = document.createTextNode(`My only way`);
let myText = document.createElement("p");
let myTextIn = document.createTextNode("Hello in my world Guys");
// reOrder Elements inside each other
document.body.appendChild(myWay);
myWay.appendChild(myHead);
myHead.appendChild(myHeadIn);
myWay.appendChild(myText);
myText.appendChild(myTextIn);
