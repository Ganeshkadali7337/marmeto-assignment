let container = document.getElementById("bg")
let newSection = document.getElementById("new")
let inputEl = document.getElementById("input")
let shirtsSection = document.getElementById("shirts")
let navBar = document.getElementById("nav-bar")
let navItems = document.getElementById("nav")
let hoodiesSection = document.getElementById("hoodies")
let searchEl = document.getElementById("search")

let searched = ""
let navClicked = false
let getData = async function() {
    let response = await fetch("https://products-api-2ttf.onrender.com/api/products");
    let data = await response.json();
    console.log(data)
    for (let i of data) {
        let img = i.image;
        let imgel = document.createElement("img");
        let headingEl = document.createElement("h1")
        headingEl.textContent = i.title;
        imgel.setAttribute("src", img);
        imgel.classList.add("back");
        if (i.title === "Latest Edition" && "new edition".includes(searched)) {
            newSection.appendChild(headingEl)
            newSection.appendChild(imgel)
        }
        if (i.title === "Shirts" && "shirts".includes(searched)) {
            shirtsSection.appendChild(headingEl)
            shirtsSection.appendChild(imgel)
        }
        if (i.title === "Hoodies" && "hoodies".includes(searched)) {
            hoodiesSection.appendChild(headingEl)
            hoodiesSection.appendChild(imgel)
        }
    }
}

navBar.onclick = function() {

    if (navClicked === false) {
        navItems.style.display = "block";
        navClicked = true;
    } else {
        navItems.style.display = "none";
        navClicked = false;
    }

}

searchEl.onclick = function() {
    searched = inputEl.value;
    newSection.textContent = ""
    shirtsSection.textContent = ""
    hoodiesSection.textContent = ""
    getData();
}
getData()