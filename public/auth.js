document.getElementById("login-submit").addEventListener("click", async () => {
  console.log("login");
  const loginError = document.getElementById("login-error");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Login successful!");
      window.location.href = "/dashboard";
    } else {
      loginError.textContent = data.message;
      loginError.style.color = "red";
    }
  } catch (error) {
    loginError.textContent = "Error logging in";
    loginError.style.color = "red";
  }
});
