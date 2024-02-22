function increase() {
    let value = document.getElementById("quantity").value;
    let quantity = parseInt(value) + 1;
    document.getElementById("quantity").value = quantity;
}

function decrease() {
    let value = document.getElementById("quantity").value;
    let quantity = parseInt(value) - 1;
    if (quantity <= 2){
        document.getElementById("quantity").value = 1
    } else {
        document.getElementById("quantity").value = quantity;
    }
}