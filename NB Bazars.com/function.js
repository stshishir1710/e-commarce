let bar = document.querySelector("#bar");
let navBox = document.querySelector(".nab-btn");
let shopNow = document.querySelector("#shopNow");

bar.addEventListener("click",()=>{
    navBox.classList.toggle("tr")
});

shopNow.addEventListener("click",()=> {
    shopNow.classList.add("shopNow");
    setTimeout(() => {
        shopNow.classList.remove("shopNow");
    }, 100);
});


