document.getElementById("registrationForm").addEventListener("submit", function(event) {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let group = document.getElementById("group").value;

    if (password !== confirmPassword) {
        alert("Паролі не співпадають!");
        event.preventDefault();
    }

    if (group === "") {
        alert("Будь ласка, оберіть групу!");
        event.preventDefault();
    }
});
