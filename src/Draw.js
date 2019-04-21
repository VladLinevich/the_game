class Draw {

    constructor(count = 3, mainElementId = 'root'){
        this.cellsCount = count;
        this.rootContainer = document.getElementById(mainElementId);
        this.emptyCells = [];
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

        for(let rowCount = 0; rowCount < this.cellsCount; rowCount++){
            const row = document.createElement('div');
            row.setAttribute('class', 'row')    

            for(let cellCount = 0; cellCount < this.cellsCount; cellCount++) {
                const cell = document.createElement('span');
                cell.setAttribute('class', 'cell')   
                row.appendChild(cell)
            }
            this.rootContainer.appendChild(row)
        }
    }

    fillEmptyCells(){
        const cells = [].slice.call(document.getElementsByClassName('cell'))

        cells.map((cell, index) => {
            cell.setAttribute('id', index);
            this.emptyCells.push(index)
        })
    }

    addActionsForCells(){
        this.rootContainer.addEventListener('click', (event)=>{
            if(event.target.className.includes('row')) return false
            this.moveByPlayer(event.target.id)
        }, false)
    }


    setScore(playerSide){
        this.score = {...this.score, [playerSide]: this.score[playerSide] += 1}
    }


    /**
     * Interaction actions
     */
    generateRandomCellNumber(cells){
        let generateNum = Math.floor( Math.random() * Math.floor(cells.length));
        this.nextCell = cells[generateNum];   
    }

    updateEmptyCells(number, arr){
        this.emptyCells = arr.filter((id) => id != number)
    }

    paintCell(cellNumber, paintStatusClass){
        document.getElementById(cellNumber).classList.add(paintStatusClass)
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
        if(this.emptyCells.length === 0) return this.endGame();

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

    endGame(){
        this.stop();
        console.log(this.score)
    }

   
    /**
     * Game Start Actions
     */
    createGame(){
        this.createGameView();
        this.fillEmptyCells()
        this.generateRandomCellNumber(this.emptyCells);
        this.addActionsForCells()
    }

    playGame(timeForMove){
        this.timeForMove = timeForMove
        this.play()
    }

}

export default Draw;