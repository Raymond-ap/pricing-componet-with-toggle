
(()=> {
    const toogleContainer = document.querySelector('.toggle-container');
    const toogleBtn = document.querySelector('.toggle');
    const price1 = document.querySelector('.price-1');
    const price2 = document.querySelector('.price-2');
    const price3 = document.querySelector('.price-3');
    
    toogleContainer.addEventListener('click', ()=> {
        toogleBtn.classList.toggle('toggle-btn');
        toogleContainer.classList.toggle('toggle-parent');

        price1.classList.toggle('price');
        price2.classList.toggle('price');
        price3.classList.toggle('price');
        if (price1.classList.contains('price')) {
            price1.innerHTML = "&dollar;199.99";
        } else {
            price1.innerHTML = "&dollar;19.99";
        }

        if (price2.classList.contains('price')) {
            price2.innerHTML = "&dollar;249.99";
        } else {
            price2.innerHTML = "&dollar;24.99";
        }

        if (price3.classList.contains('price')) {
            price3.innerHTML = "&dollar;399.99";
        } else {
            price3.innerHTML = "&dollar;39.99";
        }
    });
})();