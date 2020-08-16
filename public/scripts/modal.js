const buttonModal = document.querySelector("main footer .button")
const modal = document.querySelector("#modal")

buttonModal.addEventListener("click", () => {
    modal.classList.remove("hide")
    
    document.location.href = "http://localhost:5500/study"
})