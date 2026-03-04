document.addEventListener("DOMContentLoaded",function(){
    const tabs = document.querySelectorAll(".tabs>span")
    const tabDescriptions = document.querySelectorAll(".tab-descriptions>section")
    tabs.forEach(function(span,i){
        span.addEventListener("click",()=>{
        tabs.forEach(span=>span.classList.remove("active"))
        span.classList.add("active")
        tabDescriptions.forEach(section=>section.classList.remove("active"))
        tabDescriptions[i].classList.add("active")
        })
    })
})