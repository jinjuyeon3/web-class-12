document.addEventListener("DOMContentLoaded",()=>{
    const btnNext = document.querySelector("#btn-next")
    const btnPrev = document.querySelector("#btn-prev")
    const train = document.querySelector(".train")
    let count = 0

    let sildes = train.children.length
    // => .train의 자식태그인 li태그들의 개수를 저장한다는 의미
    train.style.width = `${100*sildes}%`

    btnNext.addEventListener("click",()=>{
        count++
        if(count>sildes-1){count=sildes-1}
        // count=0을 쓰면 무한반복되는 슬라이드를 만들 수 있음
        // train클래스가 왼쪽으로 1000픽셀씩 이동
        train.style.transform = `translateX(${-(100/sildes)*count}%)`
    })
    btnPrev.addEventListener("click",()=>{
        count--
        if(count<0){count=0}
        train.style.transform = `translateX(${-(100/sildes)*count}%)`
    })
})

// 배너 크기를 수정하는 경우가 많기 때문에 비율단위(%)를 사용해서 나타내면 수치를 하나씩 수정하지 않아도 됨
// 슬라이드 개수에 따라 width, height 등 스타일이 변경되기 때문에 변수를 생성해서 사용해주면 수정과정이 단순해져서 자동화되기 때문에 유지보수 측면에서 좋음