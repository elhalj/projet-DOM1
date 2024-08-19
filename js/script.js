const total = document.querySelector('.total');
const quantité = document.querySelector('.quantity');
const clicker = document.querySelector('.fas');
let num;



clicker.forEach(btn => {
    e.preventDefaulft()
    btn.addEventListener('click', (e) => {
        const list = e.currentTarget.classList;
        if(list.contains('fa-plus-circle')){
            num++;
        }else if(list.contains('fa-minus-circle')){
            num--;
        }else{
            num = 0;
        }
        quantité.textContent = num;
        alert('vous avez clicker');
    });
});
