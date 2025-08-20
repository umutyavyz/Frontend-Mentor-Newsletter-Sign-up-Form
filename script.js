document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const emailInput = document.getElementById("email");
  const errorText = document.getElementById("errorText");
  const formContainer = document.getElementById("formContainer");
  const successMessage = document.getElementById("successMessage");
  const userEmailSpan = document.getElementById("userEmail");
  const dismissBtn = document.getElementById("dismissBtn");

  // Kullanıcı yazarken hata mesajını temizle
  emailInput.addEventListener("input", () => {
    emailInput.classList.remove("bg-red-100", "border-red-500");
    errorText.classList.add("hidden");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Önce tüm hata durumunu sıfırla
    emailInput.classList.remove("bg-red-100", "border-red-500");
    errorText.classList.add("hidden");

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      // Hatalı email
      emailInput.classList.add("bg-red-100", "border-red-500");
      errorText.classList.remove("hidden");
      return; // Başarı mesajına geçme
    }

    // Email doğruysa başarı işlemi
    userEmailSpan.textContent = email;
    formContainer.classList.add("opacity-0");
    setTimeout(() => {
      formContainer.classList.add("hidden");
      successMessage.classList.remove("hidden");
      setTimeout(() => successMessage.classList.remove("opacity-0"), 10);
    }, 500);
  });

  dismissBtn.addEventListener("click", () => {
    successMessage.classList.add("opacity-0");
    setTimeout(() => {
      successMessage.classList.add("hidden");
      formContainer.classList.remove("hidden");
      setTimeout(() => formContainer.classList.remove("opacity-0"), 10);
    }, 500);
    form.reset();

    // Dismiss sonrası input ve hata mesajını sıfırla
    emailInput.classList.remove("bg-red-100", "border-red-500");
    errorText.classList.add("hidden");
  });
});
