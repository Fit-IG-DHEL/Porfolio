// const people = [

//     {name:'kyle',age:21},
//     {name:'migu',age:22},
//     {name:'lay',age:23},
//     {name:'edo',age:23},
// ]



// const groupofPeople = people.reduce((group, person)=> {

// const age = person.age;
// if(group[age] == null) 
// group[age] = []
// group[age].push(person)
// return group;
// },{})

// console.log(groupofPeople);
AOS.init({duration:2500});
let typed = new Typed('.auto-typing', {
    strings:["Aspiring as Web Developer","Let's work together : )"],
    typeSpeed: 50,
    backSpeed: 50,
    loop:true
  });
$(document).ready(function() {
$(".scroll-link").click(function(event) {
event.preventDefault(); // Prevent default anchor click behavior

var target = $(this).attr("href"); // Get the target element's ID
var offset = $(target).offset().top; // Get the target element's position from the top

// Animate the scrolling
$("html, body").animate(
  {
    scrollTop: offset
  },
  1000 // Duration in milliseconds (adjust as desired)
);
});
});
const MaxWidth = window.matchMedia("(max-width:700px)");
const bord = document.querySelector("#section div");

function AddClassform() {
  if(window.matchMedia("(max-width:700px)").matches ){
 bord.classList.add('form-control');

  }
  else {
    bord.classList.remove('form-control');
  }
  
}
setInterval(() => {
  AddClassform()
},1000)