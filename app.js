 
var activePlayer, scores, roundScore ;
 
   scores = [0,0];
   roundScore = 0;
   activePlayer = 0;

function newGame() {

   document.querySelector('.dice').style.display = 'none';
   
   document.getElementById('score-0').textContent = '0';
   document.getElementById('score-1').textContent = '0';
   document.getElementById('current-0').textContent = '0';
   document.getElementById('current-1').textContent = '0';
   
   var score0 = document.getElementById('score-0');
   var score1 = document.getElementById('score-1');
   var current0 = document.getElementById('current-0');
   var current1 = document.getElementById('current-1');
   
  
    document.querySelector('.btn-roll').addEventListener('click', function() {
       
       // 1. random number
       var dice = Math.floor(Math.random() * 6) + 1;
     
       
       // 2.display number
        
       var diceDom = document.querySelector('.dice');
       diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
   
        // 3. Update the round score If the rolled number was NOT a 1
   
           if(dice !== 1) {
              roundScore += dice;
              document.querySelector('#current-' + activePlayer).textContent = roundScore;
           } else{
           
            changPlayer();
   
           }
             
   });
   
   document.querySelector('.btn-hold').addEventListener('click', function() {
   
       scores[activePlayer] += roundScore;
      
         
       document.getElementById('score-' + activePlayer).textContent =  scores[activePlayer];
   
       
       if(scores[activePlayer] >= 10 )  {
         document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
   
         document.querySelector('.dice').style.display = 'none';
         document.querySelector('.player-' + activePlayer +  '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
         document.querySelector('.btn-hold').disabled = true;
         document.querySelector('.btn-roll').disabled = true;
         
      }else{
         changPlayer();
      }
   
     
   
   });
   
   function changPlayer() {
   
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
              roundScore = 0;
              
              document.getElementById('current-0').textContent = '0';
              document.getElementById('current-1').textContent = '0';
              
              document.querySelector('.player-0-panel').classList.toggle('active');
              document.querySelector('.player-1-panel').classList.toggle('active');
   
              document.querySelector('.dice').style.display = 'none';
   }
};

newGame();

document.querySelector('.btn-new').addEventListener('click' , function(){
   newGame();
})


