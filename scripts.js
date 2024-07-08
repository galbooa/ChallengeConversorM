let api = "https://v6.exchangerate-api.com/v6/97cc58460e6b207c1eaae3ed/latest/USD";

const fromDropDown = document.getElementById('deselect');
const toDropDown = document.getElementById('paraselect');

currencies.forEach((currency) => {
    const optionFrom = document.createElement('option');
    optionFrom.text = currency;
    optionFrom.value = currency;
    fromDropDown.add(optionFrom);

    const optionTo = document.createElement('option');
    optionTo.text = currency;
    optionTo.value = currency;
    toDropDown.add(optionTo);
});


let convertCurrency = () => {
    const amount = document.getElementById('cantidad').value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    if (amount.length != 0) {
        fetch(api)
            .then(res => res.json())
            .then(data => {
                let fromExchangeRate = data.conversion_rates[fromCurrency];
                let toExchangeRate = data.conversion_rates[toCurrency];
                const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
                document.getElementById('resultado').innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
            });
    }
};

document
    .querySelector('#cboton')
    .addEventListener('click', convertCurrency);
window.addEventListener('load', convertCurrency);