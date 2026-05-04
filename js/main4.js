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
    const nameInput = document.getElementById("nameInput");
    const priceInput = document.getElementById("priceInput");
    const categoryInput = document.getElementById("category")

    const name = nameInput.value;
    const price = Number(priceInput.value);
    const category = categoryInput.value;

    if (name === "" || price === 0);

    const newItem = {
        id: generateID(),
        name: name,
        price: price,
        category: category,
        completed: false,
    };

    product.push(newItem);
    localStorage.setItem("product", JSON.stringify(product));

    renderProduct();

    nameInput.value = "";
    priceInput.value = "";

}

function renderProduct(){
    const list = document.getElementById("productList");
    list.innerHTML = "";

    product.forEach(function(item){
        const li = document.createElement("li");
        li.textContent = item.name + " " + item.price + " ₺ (" + item.category + ")";

        const checkbox = document.createElement("checkbox");
        checkbox.type = "checkbox";
        checkbox.checked = item.completed;

        checkbox.onchange = function(){
            item.completed = !item.completed;
            localStorage.setItem("product", JSON.stringify(product));
            renderProduct();
        }

        if(item.completed){
            li.style.textDecoration = "line-through";
        }

        const btn = document.createElement("button");
        btn.textContent = "SİL";

        btn.onclick = function(){
            product = product.filter((p) => p.id != item.id);
            localStorage.setItem("product", JSON.stringify(product));
            renderProduct();
        }

        li.appendChild(checkbox);
        li.appendChild(btn);
        list.appendChild(li);
    })

    const toplam = product.reduce((acc, item) => acc + item.price, 0);
    document.getElementById("balance").textContent = toplam + " ₺";
}