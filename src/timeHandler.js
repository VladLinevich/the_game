import Modal from './Modal';
const modal = new Modal();

const timeHandler = (time) => {

    if(!time){
        modal.open('Please, write time')
        return false
    }

    if(time < 500){
        modal.open('Time is too little')
        return false
    }

    if(time > 20000){
        modal.open('Time is too much')
        return false
    }

    return Math.abs(time)
}

export default timeHandler;