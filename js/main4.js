let product = [];

window.onload = function(){
    const data = localStorage.getItem("product");
    if (data){
        product = JSON.parse(data);
    }

    renderProduct();
}

function generateID(){
    return Date.now();
}

function addProduct(){
    const input = document.getElementById("textInput");
    const value = input.value;

    const urun = Number(value);
    const newItem = {
        id: generateID(),
        urun: urun,
    };

    product.push(newItem);
    localStorage.setItem("product", JSON.stringify(product));

    renderProduct();

    input.value = "";
}

