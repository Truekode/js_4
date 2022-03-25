class Validator {
    constructor(form) {
        this.form = form
        this.regExsPatterns = {
            name: /^[а-я]+$/i,
            phone: /^+[0-9]+$/,
            email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        }
        this.error = 'Поле некорректно заполнено';
        this.state = false;
        this.validate();
    }

    #validate(input) {

    }

    validate(regEx, value) {
        regEx.test(value)
        const formInputs = [...document.querySelector('input')]
        formInputs.forEach(item => {
            this.#validate(input);
        })
        // не закончил делать(
    }
}



document.querySelector('.myForm').addEventListener('submit', event => {
    const validator = new Validator('myForm');
    if (!validator.state) {
        event.preventDefault()
    }
})
