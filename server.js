app.use(express.json());

app.post("/register-endpoint", (req, res) => {
  const { username, email, password } = req.body;

  res.status(200).json({
    success: true,
    message: "Registrasi berhasil!",
    redirectURL: "/html/login.html",
  });
});
