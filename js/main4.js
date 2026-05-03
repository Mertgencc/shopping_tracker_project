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

function renderProduct(){
    const list = document.getElementById("productList");
    list.innerHTML = "";

    product.forEach(function(item){
        const li = document.createElement("li");
        li.textContent = item.urun;

        const btn = document.createElement("button");
        btn.textContent = "SİL";

        btn.onclick = function(){
            product = product.filter((p) => p.id != item.id);
            localStorage.setItem("product", JSON.stringify(product));
            renderProduct();
        }

        li.appendChild(btn);
        list.appendChild(li);
    })
}