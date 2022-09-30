
let button = document.querySelector(".btn");
let button2 = document.querySelector(".btn2");
const textarea = document.querySelector("textarea");
const comments = document.querySelectorAll("text");
let array = [];

button.addEventListener("click", function () {

    function getImage(max) {
        const random = Math.floor((Math.random() * (29 - 0 + 1)) + 1);   
        return '<img src="assets/card/'+random+'.jpg" border="0" height="400px" />';
       
      }
      document.getElementById("cardImg").innerHTML = getImage();
});



button2.addEventListener("click", function () {
  let text = textarea.value;
  textarea.value ="";
  array.push(text);
  console.log(array);
  localStorage.setItem('localNotes', JSON.stringify(array));
});


