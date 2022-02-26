class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.price = 0;
        this.ccal = 0;
        this.calculatePrice();
        this.calculateCalories();
    }

    // Добавить добавку
    addTopping(topping) {
        this.topping = topping;
        this.calculatePrice();
        this.calculateCalories();
    }

    // Убрать добавку
    removeTopping(topping) {
        this.topping = '';
        this.calculatePrice();
        this.calculateCalories();
    }

    // Получить список добавок
    getToppings(topping) {
        return this.topping;
    }

    // Узнать размер гамбургера
    getSize() {
        return this.size;
    }

    // Узнать начинку гамбургера
    getStuffing() {
        return this.stuffing;
    }

    // Узнать цену
    calculatePrice() {
        switch (this.size) {
            case "Маленький": this.price += 50;
            case "Большой": this.price += 100;
        }

        switch (this.topping) {
            case "С приправой": this.price += 15;
            case "С майонезом": this.price += 20;
        }

        switch (this.stuffing) {
            case "С сыром": this.price += 10;
            case "С салатом": this.price += 20;
            case "С картофелем": this.price += 15;
        }
    }

    // Узнать калорийность
    calculateCalories() {
        switch (this.ccal) {
            case "Маленький": this.ccal += 20;
            case "Большой": this.ccal += 40;
        }

        switch (this.topping) {
            case "С майонезом": this.ccal += 5;
        }

        switch (this.stuffing) {
            case "С сыром": this.ccal += 20;
            case "С салатом": this.ccal += 5;
            case "С картофелем": this.ccal += 10;
        }
    }
}

const bigMac = new Hamburger('Маленький', 'С сыром');
bigMac.addTopping('С майонезом');
console.log("-> bigMac", bigMac);

const bigMac1 = new Hamburger('Большой', 'С картофелем');
bigMac.addTopping('С майонезом');
console.log("-> bigMac1", bigMac1);