const images = document.querySelector(".images")
const left = document.querySelector(".left")
const right = document.querySelector(".right")

images.onmousewheel = (evt) => {
    evt.preventDefault()
    images.scrollLeft += evt.deltaY
    images.style.scrollBehaviour = "inherit"
}
left.onclick = () => {
    images.scrollLeft += 900
    images.style.scrollBehaviour = "inherit"
}
right.onclick = () => {
    images.scrollLeft -= 900
    images.style.scrollBehaviour = "inherit"
}