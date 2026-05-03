let product = [];

window.onload = function(){
    const data = localStorage.getItem("product");
    if (data){
        product = JSON.parse(data);
    }

    renderProduct();
}
