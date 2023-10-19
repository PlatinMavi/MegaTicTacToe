let Turn = "X"
let playSquare = ""

function checkBoardForWins(){}

function handleElementClick(event) {
    const clickedElementId = event.target.id;
    
    if (playSquare === ""){
        document.getElementById(clickedElementId).innerHTML = Turn
        playSquare = clickedElementId.split(".")[1]
        Turn = "O"
    }else{
        if (clickedElementId.split(".")[0] === playSquare){
            if (Turn === "X"){
                if (document.getElementById(clickedElementId).innerHTML === ""){
                    document.getElementById(clickedElementId).innerHTML = Turn
                    playSquare = clickedElementId.split(".")[1]
                    Turn = "O"
                }else{
                    alert("Already Played")
                }
                
            }else{
                if (document.getElementById(clickedElementId).innerHTML === ""){
                    document.getElementById(clickedElementId).innerHTML = Turn
                    playSquare = clickedElementId.split(".")[1]
                    Turn = "X"
                }else{
                    alert("Already Played")
                }
               
            }
            
        }else{
            alert("Wrong board")
        }
    }
}
  
const elementsWithBgWhite = document.querySelectorAll('.bg-white');
  
elementsWithBgWhite.forEach(function(element) {
    element.addEventListener('click', handleElementClick);
});
  