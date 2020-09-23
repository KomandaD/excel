const CODES = {
    A: 65,
    Z: 90
}

function toCell() {
    return `<div class="cell" contenteditable=""></div>`
}

function toColumn(col) {
    return `<div class="column">${col}</div>`
}

function createRow(index, content) {
    return `<div class="row">
    <div class="row-info">${index || ''}</div>
    <div class="row-data">${content}</div>
        </div>`
}
function toChar(_, index) {
   return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []

    const cols = new Array(colsCount) // cоздаем массив
    .fill('') // заполняем массив пустой строкой
    .map(toChar) // добавляем в массив символы (A-Z)
    .map(toColumn) // добавляем html в массив (Колонки)
    .join('') // приводим все в строку


    rows.push(createRow(null, cols))

    for (let i = 0; i < rowsCount; i++) {
        const num = i+1
        const cells = new Array(colsCount)
    .fill('')
    .map(toCell)
    .join('')
        rows.push(createRow(num, cells))
    }
    return rows.join('')
}

