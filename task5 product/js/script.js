let items = [
    {
        name: "item 1",
        price: 500,
        features: "color , size , quantity"
    },
    {
        name: "item 2",
        price: 15,
        features: "color , size , quantity"
    },
    {
        name: "item 3",
        price: 275,
        features: "color , size , quantity"
    },
    {
        name: "item 4",
        price: 12,
        features: "color , size , quantity"
    }
]

let wrapper = document.querySelector('.wrapper');

for({name, price, features} of items){
    let f = features.split(', ').map(fe => `<span>${fe}</span>`).join('');
    let box = `<div class="box">
            <h3>${name}</h3>
            <p>${price < 50 ? 'sale '+ price : price}$</p>
            ${f}
        </div>`
    wrapper.innerHTML += box;
}

