let NameProduct = function (name) {
    this.name = name;
    this.product = [];

    this.getName = function () {
        return this.name;
    };

};

let newNameProduct = new NameProduct();
newNameProduct.product.push("Iphone", "Samsung","Huawei","Opppo","Realme");

displayProduct();

function displayProduct() {
    let paint = document.getElementById('products');
    paint.innerHTML = '';
    for (let i = 0; i < newNameProduct.product.length; i++) {
        paint.innerHTML += `
            <h2 style="color: yellowgreen">
            <button type="button" onclick="deleteProduct(${i})" style="color: hotpink">Xóa</button>
            &nbsp&nbsp
            <button type="button" onclick="editProduct(${i})" style="color: hotpink">Sửa</button>
            &nbsp&nbsp
            <span>${newNameProduct.product[i]}</span>
            <br><br></h2>`;
    }
}

function deleteProduct(index) {
    newNameProduct.product.splice(index,1);
    displayProduct()
}

function editProduct(index) {
    for (let i = 0; i < newNameProduct.product.length; i++) {
        newNameProduct.product[index] = prompt("Nhập tên cần sửa");
        break;
    }
    displayProduct();
}

function addProduct() {
    let products = document.getElementById('addName').value;     newNameProduct.product.push(products);
    displayProduct();
}
