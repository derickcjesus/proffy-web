const buttonAddNewField = document.querySelector("#add-time")

buttonAddNewField.addEventListener("click", cloneField)

function cloneField(){

    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    const field = newFieldContainer.querySelectorAll("input")

    field.forEach((item) => {
        item.value = "";
    })

    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}