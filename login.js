let form = document.querySelector("form");
let main = document.querySelector(".main");

let login = JSON.parse(localStorage.getItem("Sign")) || [];
console.log(login)
let email1 = document.querySelector("#email");

let pass = document.querySelector("#pass");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let flag = false;
    login.forEach(element => {
        if (email1.value == element.email && pass.value == element.pass) {
            console.log("login")
            flag = true;
            // return 
            // console.log("sonu " + element.first)

            localStorage.setItem("name", element.first)
        }
    });
    let signal = [];
    if (flag) {
        alert("Logged in Succefully!");

        window.location.href = "./index.html"
    } else {
        alert("Wrong Credentials! Check email and password")
    }
})