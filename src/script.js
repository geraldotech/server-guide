const links = document.querySelectorAll("a");
const getText = document.querySelectorAll("details p")

getText.forEach(value => {
    value.addEventListener("click", handlerClick)
})

console.log('one')


function handlerClick(e) {
    //the current text value
    const current = e.target.textContent
   
   
    navigator.clipboard.writeText(current).then(() => {       
      
        e.target.textContent = "Copied"
        RestoreValue(e, current)
    }).catch(() => {
        console.error("something went wrong")
    })
}

  // custom txt set a timeout to return current value
function RestoreValue(e, current){
    return setTimeout(() => {
        e.target.textContent = current
    }, 1000) 
}




links.forEach((val, ind) => {
    val.setAttribute("target", "_blank")
    //console.warn(ind, val.href)
})



