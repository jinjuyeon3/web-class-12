// this -> 여기에 this를 쓰면 전체 window 브라우저창을 가리킴
document.addEventListener("DOMContentLoaded",function(){
    // this -> 여기에 this를 쓰면 document 문서를 가리킴
    // ★ ()=>{} 화살표형태로 쓰게되면 document에 바인딩이 안되서 window를 가리킴
    const btnNo = document.querySelector(".btn-no")
    const modal = document.querySelector(".modal")
    const popup = document.querySelector(".popup")
    btnNo.addEventListener("click",function(){
        modal.classList.add("blind")
        popup.classList.add("blind")
    })
    modal.addEventListener("click",function(){
        // this -> 여기에 this를 쓰면 modal을 가리킴 ("바인딩"되어있다고 표현함)
        this.classList.add("blind")
        popup.classList.add("blind")
    })
})
