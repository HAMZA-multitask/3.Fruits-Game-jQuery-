        // Flow Chart of Fruit Cutting Game Project:-



// Click on start/reset button
    // are we playing?
        // yes
             // reload page
        // no
             // show trials left.

             // change button text       to "reset game".

            //1.create random fruit.

            // define a random step      for fruits.
             
               //2.move fruit down    one step every      30sec

             // is fruit too low?
                // no-> repeat nb2.
                
                // yes->check any           trail left?

                    // yes: remove one heart and repeat nb1.

                    // no: show       game over and   button text:   start game. 


   // slice fruit
     // play sound
     //explode fruit
     // increase score by 1.












var playing= false;
var score;
var trialsLeft;
var step;
var action; // used for setInterval
var fruits = ['apple','banana','cherries','grapes','mango','melon','orange2','peach','pear','pineapple','orange','strawberry'];


$(function(){
  
   // click on start/reset button
  $("#startreset").click(function(){ 
      
    // we are playing
    if(playing == true){
        
        // reload page
        location.reload();
    }
    else{
        // we are not playing
        playing = true; // game initiated
        
        // set score to 0:-
        score = 0;
      $("#scorevalue").html(score);
        
        // show trials left:-
        $("#trialsLeft").show();
        trialsLeft = 3;
        addHearts();
        
        
        // hide the gameover box:-
        $("#gameOver").hide();
        
        
        // change button text to reset game:-
       $("#startreset").html("Reset Game");
        
        
        // start sending fruits:-
        startAction();
        
        
        
    }
    
});
  
  
 $("#fruit1").mouseover(function(){
     score++;
     $("#scorevalue").html(score);  // update score.
     
     
     
     // play sound:-
     // document.getElementById("slicesound").play();
    $("#slicesound")[0].play();
     
     
     // stop fruit and hide it:-
     clearInterval(action);
     
     // hide fruit with annimation:-
     $("#fruit1").hide("explode", 500); // slice fruit.
     
     // send new fruit:-
    setTimeout(startAction, 500);
     
     
  
 }); 
  
  

  
// functions:-


 // add hearts function:-
function addHearts(){
    
     $("#trialsLeft").empty();
    
    for(i=0; i<trialsLeft; i++){
        $("#trialsLeft").append('<img src="images/heart.png" class="life">');
    }
}



// define start sending fruits function:-

function startAction(){
    
    // generate a fruit:-
   $("#fruit1").show();
    
    // choose a random fruit:-
    chooseFruit(); 
    
    // random position:-
    $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50});
    
    // generate a random step:-
    step = 1+ Math.round(5*Math.random());// change step.
    
    
    
    //move fruit down by one step every 10ms:-
    
    action = setInterval(function(){
    $("#fruit1").css('top',
        $("#fruit1").position().top + step);   
        
    //check if the fruit is too low:-
        if($("#fruit1").position().top > $("#fruitsContainer").height()){
            // check if we have trials left:-
            if(trialsLeft > 1){
                
                
             // generate a fruit:-
   $("#fruit1").show();
    
    // choose a random fruit:-
    chooseFruit(); 
    
    // random position:-
    $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50});
    
    // generate a random step:-
    step = 1+ Math.round(5*Math.random());// change step.
                
        
        // reduce trials by one:-
            trialsLeft--;
        
                
    // populate trialLeft box:-     
            addHearts();    
              
                
            }
            else{
                // game over
                
        // we are not playing anymore.
            playing = false;
                
              
                
        // change button to start button:-
       $("#startreset").html("Start Game"); 
                
                
    $("#gameOver").show();
    $("#gameOver").html('<p>Game Over!</p><p>Your Score Is '+ score +'</p>');
        
                
      // hide the trials box when game is over:-          
    $("#trialsLeft").hide(); 
                
                
                stopAction();
                
                
            }
        }        
        
    }, 10);
}


//  function to generate a random fruit:-

function chooseFruit(){
    
    $("#fruit1").attr('src' , 'images/' + fruits[Math.round(8*Math.random())] +'.png');
    
}


 // function to stop dropping fruit:-
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}


});
