class Draw {

    constructor(count = 10, mainElementId = 'root'){
        this.count = count;
        this.mainElementId = mainElementId;
    }

    drawElement(tag, className) {
        const element = document.createElement(tag);
        element.setAttribute('class', className)
        return element
    }

    draw(){
        let root = document.getElementById(this.mainElementId);

        for(let i = 0; i < this.count; i++){
            let row =  this.drawElement('div', 'row')
            
            for(let i = 0; i < this.count; i++) {
                row.appendChild(this.drawElement('span', 'ceil'))
            }
           
            root.appendChild(row)
        }

        root.addEventListener('click', function(event){
            console.log(event.target)
            event.target.setAttribute('class', 'active ceil')
        }, false)

        console.log(root);
    }

}

export default Draw;