class Draw {

    constructor(count = 3, mainElementId = 'root'){
        this.count = count;
        this.mainElementId = mainElementId;
        this.emptyCeils = [];
    }

    drawElement(tag, className) {
        const element = document.createElement(tag);
        element.setAttribute('class', className)
        return element
    }

    generateRandomNumber(maxNumber){
        return Math.floor(Math.random() * (maxNumber + 1));
    }

    find(arr){
        let num = this.generateRandomNumber(arr.length);
        console.log(num)
        return {
            elementId: num,
            arr: arr.filter(id => id != num)
        }
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
        ceils.map((ceil, index) => {
            ceil.setAttribute('id', index);
            this.emptyCeils.push(index)
        })

        console.log(this.emptyCeils)
        // console.log(this.generateRandomNumber(100))

        // let interval = setInterval(() => {

        //     if(this.emptyCeils.length === 0) clearInterval(interval);

        //     console.log(this.emptyCeils)

        //     const resFind = this.find(this.emptyCeils);

        //     document.getElementById(resFind.elementId).classList.add('disactive')

        //     return this.emptyCeils = resFind.arr;
            
        // }, 1000);




        root.addEventListener('click', (event)=>{
            if(event.target.className.includes('row')) return false
            console.dir(event.target.id)
            console.log(this.generateRandomNumber(100))
            event.target.classList.add('active')
        }, false)

    }

}

export default Draw;