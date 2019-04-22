import Modal from './Modal';

const winnerModal = new Modal();

class Game {

    constructor(mainElementId = 'root'){
        this.rootContainer = document.getElementById(mainElementId);
        this.cellsInOneSide = 10;
        this.winnebleRate = 10;
        this.emptyCells = [];
        this.cellElements = [];
        this.moveTime = null;
        this.nextCell = null;
        this.score = {
            player: 0,
            computer: 0
        };
        this.timeForMove = 2000;
    }

    /**
     * Game Create process
     */
    createGameView(){
        for(let rowCount = 0; rowCount < this.cellsInOneSide; rowCount++){
            const row = document.createElement('div');
            row.setAttribute('class', 'row')    

            for(let cellCount = 0; cellCount < this.cellsInOneSide; cellCount++) {
                const cell = document.createElement('span');
                cell.setAttribute('class', 'cell')   
                row.appendChild(cell)
            }
            this.rootContainer.appendChild(row)
        }

        this.cellElements = [].slice.call(document.getElementsByClassName('cell'))
    }

    fillEmptyCells(){
        this.cellElements.map((cell, index) => {
            cell.setAttribute('id', index);
            this.emptyCells.push(index)
        })
    }

    addActionsForCells(){
        this.rootContainer.addEventListener('click', (event)=>{
            if(!event.target.className || event.target.className.includes('row')) return false
            this.moveByPlayer(event.target.id)
        }, false)
    }


    setScore(playerSide, score){
        const result = typeof score != 'undefined' ? score : this.score[playerSide] += 1 

        this.score = {...this.score, 
                      [playerSide]: result}

        document.getElementById(`${playerSide}Score`).innerText = this.score[playerSide];        
    }


    /**
     * Interaction actions
     */
    generateRandomCellNumber(cells){
        const generateNum = Math.floor( Math.random() * Math.floor(cells.length));
        this.nextCell = cells[generateNum];   
    }

    updateEmptyCells(number, arr){
        this.emptyCells = arr.filter((id) => id != number)
    }

    paintCell(cellNumber, paintStatusClass){
        document.getElementById(cellNumber).classList.add(paintStatusClass)
    }

    createWinnerText(){
        const { player, computer} = this.score;
        const winnerScoreText = `Computer: ${computer}. Your: ${player}`;

        if(player > computer) return `You are win. ${winnerScoreText}`
        else return `Compuner is win. ${winnerScoreText}`
    }

    /**
     * Players actions
     */
    moveByComputer(cellNumber){
        this.paintCell(cellNumber, 'disactive')
        this.updateEmptyCells(cellNumber, this.emptyCells)
        this.setScore('computer')
        this.play()
    }

    moveByPlayer(cellNumber){
        this.paintCell(cellNumber, 'active')
        this.updateEmptyCells(cellNumber, this.emptyCells)
        this.setScore('player')
        this.nextStep()
    }


    /**
     * Game flow actions
     */
    play() {
        if(this.score.player >= this.winnebleRate || this.score.computer >= this.winnebleRate) return this.endGame();

        this.generateRandomCellNumber(this.emptyCells);
        this.paintCell(this.nextCell, 'hint')

        this.moveTime = setTimeout(()=> {
            this.moveByComputer(this.nextCell);  
        }, this.timeForMove)
    }

    stop(){
        return clearTimeout(this.moveTime);
    }

    nextStep(){
       this.stop();
       this.play() 
    }


    /**
     * Actions for start game
     */
    createGame(){
        this.createGameView();
        this.fillEmptyCells()
        this.generateRandomCellNumber(this.emptyCells);
        this.addActionsForCells()
    }

    playGame(timeForMove = 2000){
        this.resetGame()

        this.timeForMove = timeForMove
        this.play()
    }

    endGame(){
        this.stop();
        winnerModal.open(this.createWinnerText())   
    }

    resetGame(){

        this.stop();
        this.emptyCells = [];

        this.cellElements.map((cell, index) => {
            cell.setAttribute('class', 'cell');
            this.emptyCells.push(index)
        })

        this.setScore('computer', 0)
        this.setScore('player', 0)

    }

}

export default Game;