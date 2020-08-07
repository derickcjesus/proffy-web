const buttonAddNewField = document.querySelector("#add-time")

function cloneField(){

    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    const field = newFieldContainer.querySelectorAll("input")

    field.forEach((item) => {
        item.value = "";
    })

    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}

buttonAddNewField.addEventListener("click", cloneField)
