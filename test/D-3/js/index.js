document.addEventListener("DOMContentLoaded",()=>{
    const btnPopup = document.querySelector(".btn-popup")
    const popup = document.querySelector(".popup")
    const btnClose = document.querySelector("#btn-close")
    btnPopup.addEventListener("click",()=>{
        popup.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        popup.classList.remove("on")
    })

    const slides = document.querySelectorAll(".train>li")
    let count = 0
    setInterval(()=>{
        count++
        if(count>2){count=0}
        slides.forEach(list=>list.classList.remove("on"))
        slides[count].classList.add("on")
    },2500)

    const tabs = document.querySelectorAll(".tabs>span")
    const tabDescs = document.querySelectorAll(".tab-desc>div")
    tabs.forEach((tab, i) => {
        tab.addEventListener("click", () => {
            tabs.forEach(span=>span.classList.remove("on"))
            tab.classList.add("on")
            tabDescs.forEach(desc=>desc.classList.remove("on"))
            tabDescs[i].classList.add("on")
        })
    })
})