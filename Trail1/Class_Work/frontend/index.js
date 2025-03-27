document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    });

    console.log(res)

    const data = await res.json();
    console.log(data)
    
    if (res.ok) {
        Toastify({
            text: "Registration Successful! Redirecting...",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "green",
        }).showToast();
  
        setTimeout(() => {
            window.location.href = "home.html";
        }, 3000);
    } else {
        Toastify({
            text: data.message || "Registration Failed",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "red",
        }).showToast();
    }
});

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    console.log(data)
    // if (data.token) {
    //     localStorage.setItem('token', data.token);
    //     window.location.href = 'dashboard.html';
    // } else {
    //     alert('Login failed');
    // }
    if (data.token) {
        localStorage.setItem('token', data.token);
        Toastify({
            text: "Login Successful! Redirecting...",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "green",
        }).showToast();
  
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 3000);
    } else {
        Toastify({
            text: "Login Failed! Invalid credentials",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "red",
        }).showToast();
    }
});


const productContainer = document.getElementById("product-container");
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

            window.location.href = "video.html"
        }

        productBox.append( img);
        productContainer.append(productBox);
    });
}


nextBtn.addEventListener("click", () => {
    currentPage++;
    fetchProducts();
});

fetchProducts();

