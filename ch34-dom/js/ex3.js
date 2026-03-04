document.addEventListener("DOMContentLoaded",function(){
    const tabs = document.querySelectorAll(".tabs>span")
    const tabDescriptions = document.querySelectorAll(".tab-descriptions>section")
    tabs.forEach(function(span,i){
        span.addEventListener("click",function(){
            tabs.forEach(span=>span.classList.remove("active"))
            // 일단 3개의 span태그에 있는 active라는 클래스를 다 지운다.
            span.classList.add("active")
            // this.classList.add("active") 라고 써도 됨
            // 내가 선택한 span태그에만 active라는 클래스가 추가된다.
            tabDescriptions.forEach(section=>section.classList.remove("active"))
            tabDescriptions[i].classList.add("active")
        })
    })

    // 기본원리 ▼
    let fruits = ["사과","바나나","배"]
    fruits.forEach(function(fruit,i){
        console.log(fruit)
        console.log(i)
    })
    // function(매개변수1,매개변수2)
    // 매개변수1 -> 배열의 원소들 / 매개변수2 -> 그 원소들의 순번


})