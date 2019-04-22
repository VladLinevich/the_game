import Game from './Game';
import Modal from './Modal';
import timeHandler from './timeHandler';

const game = new Game();
const modal = new Modal();


/**
 * Control elements
 */
const timeField = document.getElementById('time');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const modalResetButton = document.getElementById('modal-reset');

/**
 * Create teable for game.
 */
game.createGame();


/**
 * Handlers for controls
 */
modalResetButton.addEventListener('click', function(){
    modal.close();
    game.resetGame();
})

timeField.addEventListener('keyup', function(event){
    this.value = this.value.replace(/[^0-9\.]/g, '');
})  

startBtn.addEventListener('click', function(){
    const result = timeHandler(timeField.value);

    if(!result) return false
    game.playGame(result)
})

resetBtn.addEventListener('click', function(){
    game.resetGame()
})


