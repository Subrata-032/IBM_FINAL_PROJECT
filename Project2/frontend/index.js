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
            window.location.href = "home.htm";
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
            window.location.href = 'data1.htm';
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
