class Modal {

    constructor(){
        this.modal = document.getElementById('modal');
    }

    open(text){
        document.getElementById('winner-text').innerText = text;
        this.modal.classList.add('active');
    }

    close(){
        this.modal.classList.remove('active')
    }
}

export default Modal;