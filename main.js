var myImage = document.querySelector('img');

myImage.onclick = function() {
   var mySrc = myImage.getAttribute('src');
   if(mySrc ==='index.jpg' ){
     myImage.setAttribute('src','images.jpg');
   }
   else {
     myImage.setAttribute('src','index.jpg');
   }

}

var mybtn =document.querySelector('button');
var myheading = document.querySelector('h1');

function setUserName() {

  var myName = prompt('Please enter your name');
  localStorage.setItem('name' ,myName);
  myheading,textContent = 'Mozzila is cool, ' + myName;
}

if(!localStorage.getItem('name')){
  setUserName();
}else {
  var storedName = localStorage.getItem('name');
  myheading.textContent = 'mozilla is cool, ' + storedName;
}

mybtn.onclick = function(){
  setUserName();
}
