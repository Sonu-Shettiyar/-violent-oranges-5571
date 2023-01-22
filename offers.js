let up = document.querySelector(".app");
let chnge = [];
let forcat = []
let forSearch = [];
let allData = [];
let D = JSON.parse(localStorage.getItem("basket")) || []
let total = document.querySelector("#bestlength");
fetch("https://63ca601d4f53a0042021af5b.mockapi.io/off")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
        // console.log("sonu")
        display(data)
        chnge = data
        forcat = data
        forSearch = data
        allData = data
    })
let itemNo = document.querySelector("#item");
let q = 1;
let count = 0;
let big = JSON.parse(localStorage.getItem("bigcart")) || [];

let old = JSON.parse(localStorage.getItem("old")) || [];
function display(data) {
    up.innerHTML = "";
    total.innerText = data.length
    data.forEach((element) => {
        let cont = document.createElement("div")
        // let count = 0;

        let it = document.createElement("span")
        let card = document.createElement("div");
        let get = document.createElement("div");
        let img = document.createElement("img");
        let vegSymbol = document.createElement("img");
        let comp = document.createElement("p");
        let title = document.createElement("h4");
        let starRating = document.createElement("p");
        let weight = document.createElement("h5");
        let mrpdiv = document.createElement("div");
        let cross = document.createElement("p")
        let discMrp = document.createElement("h5");
        let inc = document.createElement("button");
        inc.innerText = "+";
        let qty = document.createElement("input")
        qty.value = Number(1);
        let dec = document.createElement("button");
        dec.innerText = "-";
        let add = document.createElement("button");
        // let r = ((Math.random() * 100) / 1) / 10;
        let r = Math.floor(Math.random() * 10)
        get.innerText = `GET ${element.percent}% OFF`;
        get.className = "off"

        img.setAttribute("src", element.Productimage);

        vegSymbol.src = "./veg.png";


        comp.innerText = element.company;
        title.innerText = element.title;
        starRating.innerText = element.star + " ⭐ " + element.ratings + " ratings";
        weight.innerText = element.quantity + " " + element.Type;
        // ...div to be attached with mrp ection
        let d = document.createElement("p");
        d.innerText = +element.percent / 100 * 100;
        d.className = "cr"
        cross.innerText = "Rs " + element.price
        // ` ${element[count].prevPrice}`
        // if (element.prevPrice == undefined) {
        //     cross.innerHTML = "MRP " + 70
        // } else if (element.DiscPrize == undefined) {
        //     cross.innerHTML = "MRP " + d.innerText + "Rs 62";
        // } else {
        //     cross.innerHTML = "MRP " + d.innerText
        // }


        inc.addEventListener("click", function () {
            count++;
            q++;
            qty.value = q

            localStorage.setItem("bigcart", JSON.stringify(Cartitem))
            display(data)
        })
        dec.addEventListener("click", function () {
            if (q > 1) {
                q--;
            }
            qty.value = q;
            localStorage.setItem("bigcart", JSON.stringify(Cartitem))
            display(data)

        })
        let left = document.createElement("button");
        left.addEventListener("click", function () {
            if (count > 1) {
                count--
            }

            display(data);
        });


        let right = document.createElement("button");
        right.addEventListener("click", function () {
            count++;
            display(data);
        });
        comp.className = "comp";
        title.className = "title";
        starRating.className = "rate";
        weight.className = "weight";
        mrpdiv.className = "mrpdiv";
        cross.className = "mrp";
        qty.className = "qty";
        add.className = "addbtn";
        add.innerText = "Add 🧺";
        it.innerText = big.length;
        itemNo.innerText = '';

        add.addEventListener("click", () => {
            itemNo.textContent = D.length;


            if (rep(element)) {
                alert("Already in Cart")
            } else {
                D.push({ ...element, quantity: 1 })

                localStorage.setItem("basket", JSON.stringify(D));
                alert("Product Added To Cart")
            }
        })

        card.className = "product-card"
        vegSymbol.className = "Veg"
        img.className = "product-img"
        mrpdiv.append(cross, add)
        card.append(get, vegSymbol, img, comp, title, starRating, weight, mrpdiv)
        cont.append(card);
        itemNo.append(it)
        up.append(cont)


    });
}
console.log(allData)
function rep(data) {
    for (let i = 0; i < D.length; i++) {

        if (data.title == D[i].title) {
            return true


        }

    }
    return false

}
let sorter = document.querySelector("#sort");
let p = allData;
sorter.addEventListener("change", function () {

    if (sorter.value == "") {
        location.reload();
    }
    let res = allData.sort((a, b) => {

        if (sorter.value == "high") {
            return b.price - a.price
        } else if (sorter.value == "low") {
            return a.price - b.price
        } else if (sorter.value == "alphabetical") {
            return a.title - b.title
        } else if (sorter.value == "percent") {
            return b.percent - a.percent
        }
    })
    display(res)
})

// -------------------------------------------------------------------------------------------login name-----------


let log = document.querySelector("#log");

let nme = localStorage.getItem("name");

log.innerText = nme;
let out = document.querySelector("#out");
out.innerText = "Logout"

out.addEventListener("click", function () {
    log.innerText = "Lgin/SignUp";
    setTimeout(() => {

        window.location.href = "./login.html"
    }, 2000)

})

// 



// -----------------------------------------------------------------------------------------filtering [part]---


let cat = document.querySelector("#shopByCategory");

cat.addEventListener("change", function () {

    if (cat.value == "onu") {
        return display(forcat)
        console.log(D)
    }
    let fil = forcat.filter((ele, ind) => {

        if (ele.category == cat.value) {
            return true
        }
    })

    return display(fil)
})



// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------search by title-------------------------------------------



let sarch = document.querySelector("#search");
let vaw = document.querySelector("#Search-products")

sarch.addEventListener("submit", function (event) {
    event.preventDefault();
    let fil = allData.filter((ele, ind) => {

        if (ele.title.toUpperCase().includes(vaw.value.toUpperCase()) == true) {
            return true;
        }
    })
    display(fil)
})