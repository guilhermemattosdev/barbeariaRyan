const button = document.getElementById('buttonDialog')
const modal = document.querySelector("dialog")
const buttonClose = document.getElementById('buttonCloseId')


button.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}