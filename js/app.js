const burger = document.querySelector('.burger')
const

document.addEventListener('DOMContentLoaded',()=>{
    showMenu();
});

function showMenu() {
    burger.addEventListener('click',()=>{
        console.log('clickeando...');
    });
}