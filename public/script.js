
document.addEventListener("DOMContentLoaded", function () {
    window.checkPassword = function () {
        const password = document.getElementById("password").value;
        if (password === "140125") {
            window.location.href = "pages/firstpage.html";
        } else {
            document.getElementById("message").innerText = "Yanlış şifre, tekrar deneyin!";
        }
    }
});
function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === "140125") {
        window.location.href = "pages/firstpage.html"; // Şifre doğruysa yönlendir
    } else {
        document.getElementById("message").innerText = "Yanlış şifre, tekrar deneyin!";
    }
}
