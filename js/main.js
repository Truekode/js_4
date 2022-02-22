const link = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png';

const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = ({id, title, price}, imgLink = link) => {
    return `<div class="product-item" data-id="${id}">
                <img src="${imgLink}" alt="image">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));

    //мы собираем массив с разметкой и массив выводим, а когда массив превращается в строку, запятые, разделяющие значения остаются
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);