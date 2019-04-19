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
        const root = document.getElementById(this.mainElementId);

        for(let rowCount = 0; rowCount < this.count; rowCount++){
            const row = document.createElement('div');
            row.setAttribute('class', 'row')    

            for(let ceilCount = 0; ceilCount < this.count; ceilCount++) {
                const ceil = document.createElement('span');
                ceil.setAttribute('class', 'ceil')   
                row.appendChild(ceil)
            }
           
            root.appendChild(row)
        }

        const ceils = [].slice.call(document.getElementsByClassName('ceil'))

        ceils.map((ceil, index) => ceil.setAttribute('id', index))

        root.addEventListener('click', function(event){
            if(event.target.className.includes('row')) return false
            console.dir(event.target.id)
            event.target.classList.add('active')
        }, false)

    }

}

export default Draw;