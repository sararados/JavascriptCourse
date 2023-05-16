'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal'); //get all buttons


const openModal = ()=> {
    modal.classList.remove('hidden'); //remove the class
    overlay.classList.remove('hidden');
}

const closeModal = ()=> {
    modal.classList.add('hidden'); // add the class
    overlay.classList.add('hidden');
}

for (let i=0; i<showModal.length; i++)
    showModal[i].addEventListener('click', openModal);


btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function(e){
    console.log(e.key);

    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});