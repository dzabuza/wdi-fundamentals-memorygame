var cards = ['queen','queen','king','king'];
var cardsinplay = [];

// think the problem is somewhere here. I am unable to make the cards generate
function createBoard(){

var board = document.getElementsByClassName('board')[0];

for(var i=0;i<cards.length;i++){
var cardElement = document.createElement('div');
cardElement.classname = 'card';
cardElement.innerHTML = cards[i];

cardElement.addEventListener('click',istwocards)
board.appendChild(cardElement);
}
}

function istwocards(){
cardsinplay.push(this.innerHTML);

if(cardsinplay.length === 2){
	ismatch(cardsinplay);

	cardsinplay = [];
}


}


function ismatch(cards){
	if(cards[0]===cards[1]){

		alert("its a match!");
	}
	else{
		alert("try again");
	}
createboard();
}

