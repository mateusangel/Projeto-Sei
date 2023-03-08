let menu = document.querySelector(".menu")
let nav = document.querySelector("#nave")
let soci = document.querySelector(".social")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")


menu.addEventListener("click",()=>{
    nav.classList.toggle("active")
    // soci.classList.toggle("active")

    one.classList.toggle("move1")
    two.classList.toggle("move2")
    three.classList.toggle("move3")

    
})