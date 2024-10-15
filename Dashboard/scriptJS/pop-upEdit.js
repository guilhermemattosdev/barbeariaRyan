const button = document.getElementById('btnEdicao')
const button1 = document.getElementById('btnEdicao1')
const modal = document.querySelector("dialog")
const buttonClose = document.getElementById('buttonCloseId')


button.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}

button1.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}