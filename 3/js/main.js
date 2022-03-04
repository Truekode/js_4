const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class Basket {
    addGood() {

    }
    removeGood() {

    }
    changeGood() {

    }

    _getBasket() {
        return fetch(`${API}/getBasket.json`)
            .then(response => response.json())
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        this._getBasket().then(data => {
            data.contents.forEach(item => {
                const basketEl = new ElemBasket();
                document.querySelector('.basketTotal').insertAdjacentHTML('beforebegin', basketEl.render(item));
            })
            document.querySelector('.basketTotalValue').textContent = data.amount;
        });
    }
}

class ElemBasket {
    render({product_name, price, quantity}){
        return `
        <div class="basketRow basketHeader">
                <div>${product_name}</div>
                <div>${quantity} шт.</div>
                <div>${price} р.</div>
                <div>${price * quantity}</div>
                <button class="basket__btn">x</button>
            </div>
        `;
    }

}

class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                 this.goods = data;
                 this.render()
            });
    }
    _getProducts(){
      
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
       
    }
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
//            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();
let basket = new Basket();
basket.render();
const basketBtn = document.querySelector('.btn-cart');
const basketElem = document.querySelector('.basket');
basketBtn.addEventListener('click', () => {
    basketElem.classList.toggle('hidden');
})

