import Game from './Game';

const game = new Game();

const timeField = document.getElementById('time');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');

game.createGame();



timeField.addEventListener('keyup', function(event){
    this.value = this.value.replace(/[^0-9\.]/g, '');
})  

startBtn.addEventListener('click', function(){

    if(!timeField.value){
        console.log('введите число в МС')
        return false
    }

    if(timeField.value < 500){
        console.log('слишком мало времени')
        return false
    }

    if(timeField.value > 20000){
        console.log('слишком много времени')
        return false
    }

    game.playGame(Math.abs(timeField.value))

    console.log(timeField.value)
})

resetBtn.addEventListener('click', function(){
    game.resetGame()
})


