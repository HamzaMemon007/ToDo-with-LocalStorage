showProduct()

let ProData = JSON.parse(localStorage.getItem("product")) || [];
const add = () => {
    let proName = document.getElementById("product-name").value.toUpperCase()
    let proPrice = document.getElementById("product-price").value.toUpperCase()
    let prodescription = document.getElementById("description").value
    addProduct(proName, proPrice, prodescription)
}
function addProduct(name, price, description) {
    let product = {
        name: name,
        price: price,
        description: description
    }
    ProData.push(product)
    localStorage.setItem("product", JSON.stringify(ProData))
    ////console.log("Product Added")
    ////console.log(ProData)
    ////console.log(localStorage.getItem("product"))
    showProduct()

}

function deleteProduct(index) {
    // Remove product from ProData array
    ProData.splice(index, 1)

    // Update localStorage
    localStorage.setItem("product", JSON.stringify(ProData))

    // Refresh the table to show updated data
    showProduct()
}


function showProduct() {
    let data = JSON.parse(localStorage.getItem("product")) || [];
    //console.log(data)

    document.getElementById("Root").innerHTML = "";
    
    for (let i = 0; i < data.length; i++) {
        let proCard = document.createElement("div")
        proCard.className = " pro-card"

        let cardHeading = document.createElement("h1")
        cardHeading.innerHTML = data[i].name
        proCard.appendChild(cardHeading)
        console.log(cardHeading);
        cardHeading.className = " card-heading";
        
        let cardPrice = document.createElement("h2")
        cardPrice.innerHTML = data[i].price
        proCard.appendChild(cardPrice)
        cardPrice.className = " card-price";

        let cardDescription = document.createElement("p")
        cardDescription.innerHTML = data[i].description
        proCard.appendChild(cardDescription)
        cardDescription.className = " card-description";
        
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = () => deleteProduct(i);
        proCard.appendChild(deleteButton);
        deleteButton.className = " delete-button";

        document.getElementById("Root").appendChild(proCard)
    }
}

