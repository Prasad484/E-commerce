function Change1() {

    const overlay1 = document.getElementById("show-overlay")
    overlay1.style.visibility = "visible"

    const overlay2 = document.getElementById("show-overlay2")
    overlay2.style.visibility = "hidden"

    const overlay3 = document.getElementById("show-overlay3")
    overlay3.style.visibility = "hidden"

    const overlay4 = document.getElementById("show-overlay4")
    overlay4.style.visibility = "hidden"

    const img1 = document.getElementById("one");
    img1.style.display = "block";


    const img2 = document.getElementById("two");
    img2.style.display = "none";


    const img3 = document.getElementById("three");
    img3.style.display = "none";


    const img4 = document.getElementById("four");
    img4.style.display = "none";
}


function Change2() {

    const overlay1 = document.getElementById("show-overlay")
    overlay1.style.visibility = "hidden"

    const overlay2 = document.getElementById("show-overlay2")
    overlay2.style.visibility = "visible"

    const overlay3 = document.getElementById("show-overlay3")
    overlay3.style.visibility = "hidden"

    const overlay4 = document.getElementById("show-overlay4")
    overlay4.style.visibility = "hidden"

    // document.querySelectorAll(".overlay").classList.add(".show-overlay");
    const img1 = document.getElementById("one");
    img1.style.display = "none";


    const img2 = document.getElementById("two");
    img2.style.display = "block";


    const img3 = document.getElementById("three");
    img3.style.display = "none";


    const img4 = document.getElementById("four");
    img4.style.display = "none";
}

function Change3() {

    const overlay1 = document.getElementById("show-overlay")
    overlay1.style.visibility = "hidden"

    const overlay2 = document.getElementById("show-overlay2")
    overlay2.style.visibility = "hidden"

    const overlay3 = document.getElementById("show-overlay3")
    overlay3.style.visibility = "visible"

    const overlay4 = document.getElementById("show-overlay4")
    overlay4.style.visibility = "hidden"

    const img1 = document.getElementById("one");
    img1.style.display = "none";


    const img2 = document.getElementById("two");
    img2.style.display = "none";

    const img3 = document.getElementById("three");
    img3.style.display = "block";


    const img4 = document.getElementById("four");
    img4.style.display = "none";
}

function Change4() {

    const overlay1 = document.getElementById("show-overlay")
    overlay1.style.visibility = "hidden"

    const overlay2 = document.getElementById("show-overlay2")
    overlay2.style.visibility = "hidden"

    const overlay3 = document.getElementById("show-overlay3")
    overlay3.style.visibility = "hidden"

    const overlay4 = document.getElementById("show-overlay4")
    overlay4.style.visibility = "visible"

    const img1 = document.getElementById("one");
    img1.style.display = "none";


    const img2 = document.getElementById("two");
    img2.style.display = "none";

    const img3 = document.getElementById("three");
    img3.style.display = "none";


    const img4 = document.getElementById("four");
    img4.style.display = "block";
}


function minus() {
    const minus = document.getElementById("minus");
    const count = document.getElementById("count");
    if (count.innerText == 0) {
        count.innerText = count.innerText;
    }
    else {
        count.innerText = count.innerText - 1;
    }
}

var g = 0;
function plus() {
    const plus = document.getElementById("plus");
    const count = document.getElementById("count");
    if (count.innerText === 3) {
        count.innerText = count.innerText;
    }
    else {
        g++;
        if (g > 3) {
            g = 3;
        }
        // count.innerText = count.innerText+1;
        count.innerText = g;
    }
}

function AddCart() {
    const first = document.getElementById("first");
    const count = document.getElementById("count");
    const onePrice = document.getElementById("onePrice");
    first.innerHTML = count.innerHTML;
    const final = document.getElementById("final");
    final.innerHTML = onePrice.innerText * first.innerText;

    // experi
    const img = document.getElementById("deleteimg");
    img.style.display = "block";
    const prod = document.getElementById("prod");
    prod.style.display = "flex"
    const checkOut = document.getElementById("checkOut");
    checkOut.style.display = "block"
    const empty = document.getElementById("empty");
    empty.style.display = "none"
}

function Delete() {
    const img = document.getElementById("deleteimg");
    img.style.display = "none";
    const prod = document.getElementById("prod");
    prod.style.display = "none"
    const checkOut = document.getElementById("checkOut");
    checkOut.style.display = "none"
    const empty = document.getElementById("empty");
    empty.style.display = "block"
}

function showCard() {
    const cardContent = document.getElementById("card-content");
    if (cardContent.style.display === "flex") {
        cardContent.style.display = "none"
    }

    else{
        (cardContent.style.display === "none") 
        cardContent.style.display = "flex";
    }
}