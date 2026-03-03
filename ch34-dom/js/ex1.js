document.addEventListener("DOMContentLoaded",function(){
    // 문서 끝까지 읽고 난 뒤 한번 실행되는 소스코드
    const popup = document.querySelector(".popup")
    const btnClosePopup = document.querySelector(".btn-close-popup")
    btnClosePopup.addEventListener("click",()=>{
        // popup.style.display = "none"
        popup.classList.add("hide")
        // 이 방법이 대중적이며 애니메이션과 같은 효과를 쓸 수 있다.
    })
})
