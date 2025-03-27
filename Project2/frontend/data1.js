const productContainer = document.getElementById("main_box2");
const nextBtn = document.getElementById("next-btn");

let currentPage = 1;

async function fetchProducts() {
    try {
        const response = await fetch(`http://localhost:8080/api/products?page=${currentPage}`,{
            method:"GET"
        });
        const data = await response.json();

        console.log(data)

        displayMovies(data.products);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function displayMovies(products) {
    products.forEach((product, index) => {
        let productBox = document.createElement("div");
        productBox.className = "product-box";

        let img = document.createElement("img");
        img.src = product.image || "placeholder.jpg";

        // let videolink=document.createElement("img");
        // videolink.src=product.videolink;
        

        // let name = document.createElement("p");
        // name.innerText = product.name;

        // let price = document.createElement("p");
        // price.innerText = `Price: $${product.price}`;

        // let rating = document.createElement("p");
        // rating.innerText = `Rating: ${product.rating || "N/A"}`;

        // let button = document.createElement("button");
        // button.innerText = "Add to Cart";
        // button.addEventListener("click", () => {
        //     addToCart(product);
        // });
        productBox.onclick=()=>{
            localStorage.setItem("videoData", JSON.stringify(product.videolink));

            window.location.href = "video.htm"
        }

        productBox.append( img);
        productContainer.append(productBox);
    });
}


