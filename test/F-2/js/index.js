document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".train>li");
    let count = 0;

    setInterval(() => {
        count++;
        if (count>2){count=0;}
        slides.forEach(li=>li.classList.remove("on"));
        slides[count].classList.add("on");
    }, 2500);

    const btnPopup = document.querySelector("#btn-popup")
    const popup = document.querySelector(".popup")
    const modal = document.querySelector(".modal")
    const btnColse = document.querySelector("#btn-colse")

    btnPopup.addEventListener("click",()=>{
        popup.classList.add("on")
        modal.classList.add("on")
    })
    btnColse.addEventListener("click",()=>{
        popup.classList.remove("on")
        modal.classList.remove("on")
    })
});