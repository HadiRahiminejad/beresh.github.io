var myImage = document.querySelector('img');

 myImage.onclick = function() {

    var mySrc = myImage.getAttribute('src');

   if(mySrc ==='index.jpg') {
      myImage.setAttribute('src','images.jpg');
   }else {
     myImage.setAttribute('src','index.jpg');
   }
 }


var mybtn = document.querySelector('button');
 var myheading =document.querySelector('h1');

function setUserName() {
   var myName = prompt('Please enter your name.');
   localStorage.setItem('name' , myName);/*an API called localStorage,
   which allows us to store data in the browser and later retrieve it*/
  myheading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')){
  setUserName();
}else {
  var storedName = localStorage.getItem('name');
  myheading.textContent = 'Mozilla is cool, ' + storedName;
}

mybtn.onclick = function() {
  setUserName();
}

 
