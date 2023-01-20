let up = document.querySelector(".app");
let chnge = []
fetch("https://63c79ecb5c0760f69aba8ab0.mockapi.io/veg")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
        chnge = data
        display(data)
    })
let count = 0;

let itemNo = document.querySelector("#item");

let q = 1;


let big = JSON.parse(localStorage.getItem("bigcart")) || [];

function display(data) {
    up.innerHTML = "";
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
        get.innerText = `GET ${r}% OFF`;
        get.className = "off"

        img.setAttribute("src", element[count].Productimage);

        vegSymbol.src = "./veg.png";


        comp.innerText = element[count].Company;
        title.innerText = element[count].description;
        starRating.innerText = element[count].star + " ⭐ " + element[count].ratings + " ratings";
        weight.innerText = element[count].quantity + " " + element[count].Type;
        // ...div to be attached with mrp ection
        let d = document.createElement("p");
        d.innerText = element[count].prevPrice;
        d.className = "cr"

        // ` ${element[count].prevPrice}`
        if (element[count].prevPrice == undefined) {
            cross.innerHTML = "MRP " + 70
        } else if (element[count].DiscPrize == undefined) {
            cross.innerHTML = "MRP " + d.innerText + "Rs 62";
        } else {
            cross.innerHTML = "MRP " + d.innerText
        }


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
        itemNo.innerText = '';
        it.innerText = big.length;
        add.addEventListener("click", function () {


            // console.log(element[count])
            big.push(element[count])
            localStorage.setItem("bigcart", JSON.stringify(big));
            if (qty.value == 1) {
                it.innerText = big.length
            } else {
                it.innerText = Number(big.length) + Number(qty.value)
            }


        })
        card.className = "product-card"
        vegSymbol.className = "Veg"
        img.className = "product-img"
        mrpdiv.append(cross, dec, qty, inc, add)
        card.append(get, vegSymbol, img, comp, title, starRating, weight, mrpdiv)
        cont.append(card);
        itemNo.append(it)
        up.append(cont)


    });
}

let leftarrow = document.querySelector(".arrowq");
let rightarrow = document.querySelector(".arroww");

leftarrow.addEventListener("click", function () {
    if (count > 0) {
        count--;
    }

    // console.log(count)

    return display(chnge);

})
rightarrow.addEventListener("click", function () {

    // console.log(count)
    count++
    if (count == chnge.length) {
        count = 0;
    }
    display(chnge);
})




// sliding Image-------------------------------------------------




let slideArr = ["https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/5e469fa8-b795-4b40-b684-318a5e235528/t4_DT_hp_m_hds_Nagp_400_261222.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/5e469fa8-b795-4b40-b684-318a5e235528/t4_DT_hp_m_fav-winter-delicates_Nagp_400_261222.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/5e469fa8-b795-4b40-b684-318a5e235528/t4_DT_hp_m_winter-nourishment%20_Nagp_400_261222.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/5e469fa8-b795-4b40-b684-318a5e235528/t4_DT_hp_m_hom-kitc-min-20-of%20_Nagp_400_261222.jpg"

]



let dv = this.document.querySelector(".sliding")

let img = this.document.createElement("img")
dv.append(img)
let ct = 1;
img.setAttribute("src", slideArr[0])
img.className = "slideimg"
let len = slideArr.length - 1;
setInterval(function () {

    img.setAttribute("src", slideArr[ct]);
    ct++;
    if (ct == len) {
        ct = 0;
    }
}, 2000)


let winters = [
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/436a520f-e17e-4c75-a0c2-56cce9d899b6/t4_DT_hp_01_m_bev_tea_coffee_Nagp_480_020123.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/436a520f-e17e-4c75-a0c2-56cce9d899b6/t4_DT_hp_02_m_bcd_biscuit-cookies_Nagp_480_020123.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/436a520f-e17e-4c75-a0c2-56cce9d899b6/t4_DT_hp_03_m_fom_dry_fruits_chikki_Nagp_480_020123.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/436a520f-e17e-4c75-a0c2-56cce9d899b6/t4_DT_hp_04_m_sbf_soups_Nagp_480_020123.jpg", "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/436a520f-e17e-4c75-a0c2-56cce9d899b6/t4_DT_hp_05_m_sbf_ready_to_cook_Nagp_480_020123.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/436a520f-e17e-4c75-a0c2-56cce9d899b6/t4_DT_hp_06_m_bev_health_drinks_Nagp_480_020123.jpg"


]

let wintdiv = document.querySelector(".winter-pro");
displaySix(winters, wintdiv)
function displaySix(data, d) {
    data.forEach(element => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.src = element;
        card.append(img);
        d.append(card)
    });

}
let provi = document.querySelector(".provi-store");
let provisions = [
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/9a95f473-a73c-48ad-bde3-ad5a248cdab4/t4_DT_hp_01_c_fom_Oil-ghee_Hyd_Krsh_Nag_Viz_480_261212.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/9a95f473-a73c-48ad-bde3-ad5a248cdab4/t4_DT_hp_02_c_fom_Rice-products_Hyd_Krsh_Nag_Viz_480_261212.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/9a95f473-a73c-48ad-bde3-ad5a248cdab4/t4_DT_hp_03_c_fom_Atta-flours_Hyd_Krsh_Nag_Viz_480_261212.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/9a95f473-a73c-48ad-bde3-ad5a248cdab4/t4_DT_hp_04_c_fom_Dal-pulses_Hyd_Krsh_Nag_Viz_480_261212.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/9a95f473-a73c-48ad-bde3-ad5a248cdab4/t4_DT_hp_05_c_masala-spices_Hyd_Krsh_Nag_Viz_480_261212.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/9a95f473-a73c-48ad-bde3-ad5a248cdab4/t4_DT_hp_06_c_fom_Sugar_jaggery_Hyd_Krsh_Nag_Viz_480_261212.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/9a95f473-a73c-48ad-bde3-ad5a248cdab4/t4_DT_hp_07_c_fom_Organic-staples_Hyd_Krsh_Nag_Viz_480_261212.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/9a95f473-a73c-48ad-bde3-ad5a248cdab4/t4_DT_hp_08_c_fom_Dry-fruitss_Hyd_Krsh_Nag_Viz_480_261212.jpg"




]
displaySix(provisions, provi)

let nourish = [
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/0ec2243d-caf3-4d67-8d35-37a520dbefa8/t4_DT_hp_01_m_b&h_Moisture_Hyd_Krsh_Nagp_Viz_480_261222.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/0ec2243d-caf3-4d67-8d35-37a520dbefa8/t4_DT_hp_02_m_b&h_Hair_oil_serum_Hyd_Krsh_Nagp_Viz_480_261222.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/0ec2243d-caf3-4d67-8d35-37a520dbefa8/t4_DT_hp_03_m_b&h_Mens_groomingi_Hyd_Krsh_Nagp_Viz_480_261222.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/0ec2243d-caf3-4d67-8d35-37a520dbefa8/t4_DT_hp_04_m_b&h_Lip_care_Hyd_Krsh_Nagp_Viz_480_261222.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/0ec2243d-caf3-4d67-8d35-37a520dbefa8/t4_DT_hp_05_m_b&h_Femine_hyg_Hyd_Krsh_Nagp_Viz_480_261222.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/0ec2243d-caf3-4d67-8d35-37a520dbefa8/t4_DT_hp_06_m_b&h_Oral_care_Hyd_Krsh_Nagp_Viz_480_261222.jpg"

]
let nourishment = document.querySelector(".nour-card");

displaySix(nourish, nourishment);

let home = [
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/8dd9aa70-701b-4cf6-b3f8-a221c1c2a2cf/t4_DT_hp_01_c_c&h_Cookware_Nonstick_Hyd_Krsh_Nag_Viz_480_261222.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/8dd9aa70-701b-4cf6-b3f8-a221c1c2a2cf/t4_DT_hp_02_c_c&h_Crockery_Hyd_Krsh_Nag_Viz_480_261222.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/8dd9aa70-701b-4cf6-b3f8-a221c1c2a2cf/t4_DT_hp_03_c_c&h_flask_caserol_Hyd_Krsh_Nag_Viz_480_261222.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/8dd9aa70-701b-4cf6-b3f8-a221c1c2a2cf/t4_DT_hp_04_c_c&h_Kitchen_acc_Hyd_Krsh_Nag_Viz_480_261222.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/8dd9aa70-701b-4cf6-b3f8-a221c1c2a2cf/t4_DT_hp_05_c_c&h_steel_utensils_Hyd_Krsh_Nag_Viz_480_261222.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/8dd9aa70-701b-4cf6-b3f8-a221c1c2a2cf/t4_DT_hp_06_c_c&h_storage_acc_Hyd_Krsh_Nag_Viz_480_261222.jpg"
]
let kitchen = document.querySelector(".home-card");

displaySix(home, kitchen);

let cleaning = [
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/6ea6c8b4-5f24-4ca8-8cfc-a20890b14189/t4_DT_hp_01_c_c&h_All_Purp_hyd_krsh_nag_viz_480_261222.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/6ea6c8b4-5f24-4ca8-8cfc-a20890b14189/t4_DT_hp_02_c_c&h_Detergent_hyd_krsh_nag_viz_480_261222.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/6ea6c8b4-5f24-4ca8-8cfc-a20890b14189/t4_DT_hp_03_c_c&h_Mops_Brush_hyd_krsh_nag_viz_480_261222.jpg",
    "https://www.bigbasket.com/media/customPage/af8a6915-a79e-4f18-8ca0-bd83165b0846/9b50f224-b14c-4d87-aabd-9a0cce5f5042/6ea6c8b4-5f24-4ca8-8cfc-a20890b14189/t4_DT_hp_04_c_c&h_Fresh-Repellent_hyd_krsh_nag_viz_480_261222.jpg"
]
let clean = document.querySelector(".clean-card");

displaySix(cleaning, clean)















// let smartBasket = document.querySelector(".smartBasket");

// let API = "https://63c689b7dcdc478e15c39808.mockapi.io/veg"
// fetch(API)
//     .then((res) => {
//         return res.json();
//     })
//     .then((el) => {
//         display(el);
//         console.log(el)
//     })
// function display(data) {
//     // smartBasket.innerHTML = "";
//     data.forEach((element, ind) => {

//         let cards = document.createElement("div");

//         let imgPro = document.querySelector("img");
//         let percent = document.createElement("div"); let percentP = document.querySelector("p");
//         let span = document.querySelector("span");
//         // percent.innerText =
//         let comp = document.querySelector("p");
//         let title = document.createElement("h3");
//         let ratings = document.createElement("p");
//         let weight = document.querySelector("h4");
//         let mrp = document.querySelector("div");
//         let rs = document.querySelector("p");
//         let qtymain = document.createElement("div");
//         let qtydiv = document.querySelector("p");
//         let qtyinp = document.createElement("input");
//         let adddiv = document.createElement("div");
//         // img.src = `${element.product - image - top}`;
//         // imgPro.innerText =


//         // qtymain.append(qtydiv, qtyinp, adddiv)

//         // // mrp.append(rs, qtymain)
//         // cards.append(percent, img, comp, title, ratings, weight, mrp)
//         cards.append(percent, imgPro)
//         smartBasket.append(cards)
//     });


// }