$(document).ready(function () {
    $("#loginForm").on("SIGN IN", function (e) {
        e.preventDefault(); 
        var email = $("#email").val();
        var password = $("#password").val();

        if (email === "" || password === "") {
            alert("Email and password fields cannot be empty!");
            return;
        }

        if (password< 6) {
            alert("Password must be at least 6 characters long!");
            }
            else{
                return;
            }

        alert("Email and password are valid!");
    });
});
