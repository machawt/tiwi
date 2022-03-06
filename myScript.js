function check(){document.text.innerHTML='pika';}
gameLoop();
}

var loops=0;
var peopleVisible=false;
var gameScore=0;


function gameLoop(){
peopleVisible=!peopleVisible;
createCharacters();
loops++;
if(loops<12){
setTimeout(gameLoop,3000);
}
else{alert("You scored "+gameScore);
}
}
function createCharacters(){
var board=document.getElementById("board");
var classToSet=peopleVisible ? "character visible":"character hidden";
for (var index=0; index < 6; index ++){
board.children[index].className=classToSet;

board.children[index].innerHTML="Guest";
board.children[index].onclick=function (){gameScore+=-2;}
}
var randomNumber=Math.floor(Math.random()*8)+1;
board.children[randomNumber-1].innerHTML="Thief";

board.children[randomNumber-1].onclick=function (){gameScore++;
}
board.children[randomNumber-1].className=classToSet +" thief";

}

