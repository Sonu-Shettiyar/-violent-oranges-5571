let data = localStorage.getItem("checkout");




let flag = false;



let ADD = document.querySelector("#Address");
let first = document.querySelector("#First");
let last = document.querySelector("#Last");
let house = document.querySelector("#House");
let apartment = document.querySelector("#apartment");
let street = document.querySelector("#Street");
let landmark = document.querySelector("#Landmark");
let city1 = document.querySelector("#City");
let area = document.querySelector("#Area");
let pincode = document.querySelector("#Pincode");
let arr = [];
ADD.addEventListener("click", function () {


    if (house.value == "") {
        return alert("Please fill all Mandatory fields ! to proceed")
    } else if (first.value == "") {
        return alert("Please fill all Mandatory fields ! to proceed")
    } else if (area.value == "") {
        return alert("Please fill all Mandatory fields ! to proceed")
    } else if (pincode.value == "") {
        return alert("Please fill all Mandatory fields ! to proceed")
    }
    let obj = {
        name: first.value,
        last: last.value,
        house: house.value,
        apartment: apartment.value,
        street: street.value,
        landmark: landmark.value,
        city: city1.value,
        area: area.value,
        pincode: pincode.value
    }

    ADD.textContent = "ADDED SUCCESSFULLY";
    arr.push(obj)
    localStorage.setItem("final", JSON.stringify(arr));
    flag = true;



})
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

let Basket_val = document.querySelector("#val");
Basket_val.textContent = data;
let charge = document.querySelector("#free");
let total = document.querySelector("#tot");
let coupon = document.querySelector("#Couponcode");
let Ac = document.querySelector("#AC");
let Cimg = document.querySelector("#Cimg");

Cimg.addEventListener("click", function () {

    alert("Use :-" + ` FoodProduct`);
})
if (data >= 499) {
    charge.textContent = "Free"
    total.textContent = data;
} else {
    charge.textContent = Number(25) + ".00";
    total.textContent = Number(data) + Number(25)

}
let btn = document.querySelector("form");
btn.addEventListener("submit", (event) => {
    // window.location.reload()
    event.preventDefault();
    if (coupon.value == "FoodPocket") {
        Ac.textContent = "SuccessFully Applied";
        total.textContent = (Number(data) + Number(25)) - Number(50);
        // window.location.reload();
    } else {
        Ac.textContent = "Invalid";
    }

})

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------proceed-to--payment-------------------;


let payment = document.querySelector("#proceed");
payment.addEventListener("click", function () {
    if (flag) {
        alert("")
    } else {
        alert("Please provide delivery address first ")
    }
})
