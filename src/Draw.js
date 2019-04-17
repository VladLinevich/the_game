class Draw {

    constructor(count = 10){
        this.count = 10;
    }

    drawCell(){
        const cell = document.createElement('div');
        cell.setAttribute('class', 'cell')
        return cell
    }

    drawRow(innerElement){
        const row = document.createElement('div');
        
    }

    draw(){
        console.log(this.drawCell())
    }

}

export default Draw;