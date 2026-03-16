document.addEventListener("DOMContentLoaded",()=>{
    const btnClose = document.querySelector(".btn-close")
    const btnPopup = document.querySelector("#btn-popup")
    const popup = document.querySelector(".popup")

    btnPopup.addEventListener("click",()=>{
        popup.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        popup.classList.remove("on")
    })

    // document.querySelector("#btn-popup").addEventListener("click",()=>{})
    // 변수에 저장하지 않고 이렇게 바로 addEvent 써도 되는데 별로 좋은 코드는 아님

    const  train = document.querySelector(".train")
    let count = 0

    setInterval(()=>{
        count++
        if(count>2){count=0}
        train.style.transform = `translateY(${-33.333*count}%)`
    },2500)
})