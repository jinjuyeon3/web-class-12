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

// ----------------------------------

    const colorTabs = document.querySelectorAll(".color-tabs>span")
    const colorChips = document.querySelectorAll(".color-chips>div")
    colorTabs.forEach(function(span,i){
        span.addEventListener("click",()=>{
            colorTabs.forEach(span=>span.classList.remove("active"))
            span.classList.add("active")
            colorChips.forEach(div=>div.classList.remove("active"))
            colorChips[i].classList.add("active")
        })
    })

})
