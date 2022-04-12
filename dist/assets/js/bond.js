function login(form) {
    var un = form.Username.value;
    var pw = form.Password.value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("post", "Login", true);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            loginResults();
        }
    }
}

window.addEventListener(window,"load", function() {
    var loginForm = document.getElementById("form-group");
    window.addEventListener(formGroup, "submit", function() {
         login(formGroup);
     });
 });