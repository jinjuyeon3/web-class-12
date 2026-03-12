document.addEventListener("DOMContentLoaded",()=>{
    const btnPopup = document.querySelector("#btn-popup")
    const popup = document.querySelector(".popup")
    const btnClose = document.querySelector("#btn-close")

    btnPopup.addEventListener("click",()=>{
        popup.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        popup.classList.remove("on")
    })

    // 3초마다 .tarin>li 태그 3개가 on클래스가 지워지고 순번에 맞는 li태그한테 on클래스가 들어가면 됨
    const slides = document.querySelectorAll(".train>li")
    let count = 0
    setInterval(()=>{
        count++
        if(count>2){count=0}
        slides.forEach(slide=>{slide.classList.remove("on")})
        // 3개의 li태그에 on클래스를 지운다.
        slides[count].classList.add("on")
    },2500)

    // 탭메뉴
    const tabs = document.querySelectorAll(".tabs>span")
    const tabDesc = document.querySelectorAll(".tab-desc>div")
    tabs.forEach((tab,i)=>{
        tab.addEventListener("click",()=>{
            // 2개의 on클래스를 다 지운다.
           tabDesc.forEach(div=>div.classList.remove("on"))
           tabDesc[i].classList.add("on")
           // 클릭한 탭만 on클래스가 추가되도록 한다.
           tabs.forEach(span=>span.classList.remove("on"))
           tab[i].classList.add("on")
        })
    })
})
