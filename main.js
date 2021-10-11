document.querySelector(".header-left").innerHTML = "<img src=http://boolean.careers/images/misc/logo.png>"

const hamburgerIcon = document.querySelector(".header-right>a")
const hamburgerMenu = document.querySelector(".hamburger-menu")
const closeIcon = document.querySelector(".hamburger-menu>a")

// hamburgerIcon.addEventListener("click", function(){
//     hamburgerMenu.style.display = "block"
// })

// closeIcon.addEventListener("click", function(){
//     hamburgerMenu.style.display = "none"
// })

hamburgerIcon.addEventListener("click", function(){
    hamburgerMenu.classList.toggle("active")
})

closeIcon.addEventListener("click", function(){
    hamburgerMenu.classList.toggle("active")
})
