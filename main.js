const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const detailProduct = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
iconCarrito.addEventListener('click', toggleDetail);

function toggleDesktopMenu() {
    const isDeteailClosed = detailProduct.classList.contains('inactive');

    if (!isDeteailClosed) {
        detailProduct.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isDeteailClosed = detailProduct.classList.contains('inactive');

    if (!isDeteailClosed) {
        detailProduct.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMenuDesktopClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isMenuDesktopClosed) {
        desktopMenu.classList.add('inactive');
    }

    detailProduct.classList.toggle('inactive');
}


const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'pc',
    price: 610,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'pc',
    price: 610,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function productos(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img')
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const parrafos = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        parrafos.appendChild(productPrice);
        parrafos.appendChild(productName);
    
        const figure = document.createElement('figure');
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        figure.appendChild(productImg);
    
        productInfo.appendChild(parrafos);
        productInfo.appendChild(figure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
    }
}
productos(productList)
