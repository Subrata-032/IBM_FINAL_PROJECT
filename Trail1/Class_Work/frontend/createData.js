const button = document.getElementById("submit-products");

button.addEventListener("click", async()=>{
    const image = document.getElementById("img").value;
    const videolink=document.getElementById("videolink").value;

    const obj = {
        image,videolink
    }
    console.log(obj);
    const response = await fetch("http://localhost:8080/api/create-product", {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(obj)
    });

    const res = await response.json();

    console.log(res)

})