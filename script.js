document.addEventListener("DOMContentLoaded", function() {
    const welcomePopup = document.getElementById("welcomePopup");
    const closePopup = document.getElementById("closePopup");

    // Pop-up açılır
    welcomePopup.style.display = "flex";

    // Pop-up'ı kapat
    closePopup.addEventListener("click", function() {
        welcomePopup.style.display = "none";
    });
});
