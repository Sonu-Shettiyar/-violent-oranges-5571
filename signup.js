let form = document.querySelector("form")
let sub = document.querySelector("#sub");

let signup = JSON.parse(localStorage.getItem("Sign")) || [];

let pass = document.querySelector("#pass")
let email = document.querySelector("#email")
let last = document.querySelector("#last")
let first = document.querySelector("#first")

sub.addEventListener("click", function () {

    let obj = {
        first: first.value,
        last: last.value,
        email: email.value,
        pass: pass.value
    }
    signup.push(obj);

    localStorage.setItem("Sign", JSON.stringify(signup));
    alert("Account Created Successfully ");
    window.location.href = "./login.html"

})