document.addEventListener("DOMContentLoaded", function() {
    const appnameElement = document.getElementById("appname");
    const text = "স্মার্ট নারায়ণগঞ্জ";
    const delay = 100;
    const splashTimeout = 3000;

    // Typewriter animation logic (MainActivity.java logic)
    for (let i = 0; i <= text.length; i++) {
        setTimeout(() => {
            appnameElement.textContent = text.substring(0, i);
        }, delay * i);
    }

    // Timer logic to navigate to second page
    setTimeout(() => {
        window.location.href = "secondpage.html";
    }, splashTimeout);
});