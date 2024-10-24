let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#resetBtn');
let newGameBtn = document.querySelector('#newBtn');
let msgContainer = document.querySelector('.msgContainer');
let msg = document.querySelector('#msg');

let turn0 =  true;
let count = 0;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

function drawGame(){
    msg.innerText = 'Game was a Draw !!';
    msgContainer.classList.remove('hide');
}

function disableBoxes(){
    for(let box of boxes){
        box.disabled = true;
    }
}

function enableBoxes(){
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}

function resetGame(){
    count = 0;
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add('hide');
}

function showWinner(winner){
    msg.innerText = `Winner is ${winner} !!`
    msgContainer.classList.remove('hide');
    disableBoxes();
}

function checkWinner(check){
    for(let pattern of winPatterns) {
        pos1 = boxes[pattern[0]].innerText;
        pos2 = boxes[pattern[1]].innerText;
        pos3 = boxes[pattern[2]].innerText;

        if(check === 9){
            drawGame();
        }

        if(pos1 != '' && pos2 != "" && pos3 != ''){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                return true;
            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turn0){
            box.innerText = 'O';
            turn0 = false;
        }else{
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;
        count++;
        checkWinner(count);
    })
});

resetBtn.addEventListener('click',resetGame);
newGameBtn.addEventListener('click',resetGame);