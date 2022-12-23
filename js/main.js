console.log(
  "%c@ %cPeter%c Sherif",
  "color :red; font-size:20px;",
  "color:pink;font-weight:bold; font-size:20px;",
  "color:orange; font-size:20px;font-weight:bold;",
);
/*

let myBtn = document.getElementById("my__btn");
myBtn.className = "rounded shadow bg-primary text-white border-0 p-1 pe-4 ps-4";
myBtn.onclick = function () {
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
};
console.log(myBtn);
*/
console.log(document.links[9])
document.links[9].onclick = function (e) {
  console.log(e);
  event.preventDefault();
}
