document.addEventListener("DOMContentLoaded",function(){
    let btn1 = document.querySelector("#btn1")
    btn1.addEventListener("click",function(){
        alert("안녕하세요")
    })
    // 이 동작을 이벤트리스너 라고 부른다.

    let btn2 = document.querySelector("#btn2")
    let box = document.querySelector(".box")
    btn2.addEventListener("click",()=>{
        // let box = document.querySelector(".box")
        box.style.backgroundColor = "lime"
    })
    // 익명함수 내에 box라는 클래스를 선택하면 클릭할 때마다 새로 동작을 실행하기 때문에 1번 선택해서 동작을 실행하도록 바깥쪽에서 선택하는 게 좋다.

    const btn3 = document.querySelector("#btn3")
    btn3.addEventListener("click",()=>{
        box.style.backgroundColor = "initial"
    })
    // 최근에는 태그를 선택할 때 let보다 const로 선택하는 경우가 많다.

    // const originalFontSize = 20
    let basicFontSize = 20
    let minFontSize = 14
    let maxFontSize = 26
    const chip = document.querySelector(".chip")
    const btnSmallFont = document.querySelector("#btn-small-font")
    const html = document.querySelector("html")

    btnSmallFont.addEventListener("click",()=>{
        if(basicFontSize<=minFontSize){
            alert(minFontSize+"픽셀 보다 작게 글씨를 줄일 수 없습니다.")
            return
        }
        basicFontSize-=1
        chip.innerHTML = `${basicFontSize}px`
        html.style.fontSize = `${basicFontSize}px`
    })

    const btnLargeFont = document.querySelector("#btn-large-font")
    btnLargeFont.addEventListener("click",()=>{
        if(basicFontSize>=maxFontSize){
            alert(maxFontSize+"픽셀 보다 크게 글씨를 키울 수 없습니다.")
            return
        }
        basicFontSize+=1
        chip.innerHTML = `${basicFontSize}px`
        html.style.fontSize = `${basicFontSize}px`
    })

    const btnOriginalFont = document.querySelector("#btn-original-font")
    btnOriginalFont.addEventListener("click",()=>{
        basicFontSize = 20
        chip.innerHTML = `${basicFontSize}px`
        html.style.fontSize = `${basicFontSize}px`
        // basicFontSize = originalFontSize
        // chip.innerHTML = `${originalFontSize}px`
        // html.style.fontSize = originalFontSize+"px"
    })
})

// document.addEventListener("DOMContentLoaded",function(){} => body태그 안의 코드가 모두 실행된 이후에 js코드를 실행한다는 의미

