const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    username: document.getElementById("username").value,
    email: document.getElementById("user-email").value,
    password: document.getElementById("user-password").value,
  };

  try {
    const response = await fetch("/register-endpoint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      window.location.href = result.redirectUrl;
    }
  } catch (error) {
    console.error("Gagal melakukan pendaftaran:", error);
  }
});
