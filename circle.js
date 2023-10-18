const main = document.querySelector("#main")

main.addEventListener( "click",(e)=>{
    const element = document.createElement("div")
    element.classList.add("circle")
    element.style.top = e.clientY +"px"
    element.style.left = e.clientX +"px"
    main.append(element)
}
 



)