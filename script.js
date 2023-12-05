const words = ['Auto', 'Kamion', 'Trajekt', 'Letadlo', 'Helikoptera', 'Motorka', 'Kolo', 'Skutr', 'Ctyrkolka', 'Kroska', 'Lod', 'Stihacka', 'Trikolka']

function generateTable() {
    const body = document.querySelector('body')

    const table = document.createElement('table')
    table.setAttribute('id', 'myTable')
    body.appendChild(table)

    const headers = ['Num.1', 'Num.2', 'Num.3']

    const headerRow = table.createTHead().insertRow()
    headers.forEach(headerText => {
        const th = document.createElement('th')
        th.textContent = headerText
        headerRow.appendChild(th)
    });

    for (let i = 0; i < 10; i++) {
        const row = table.insertRow()
        for (let j = 0; j < 3; j++) {
            const cell = row.insertCell()
            const randomWord = words[Math.floor(Math.random() * words.length)]
            cell.textContent = randomWord
        }
    }

    const addButton = createButton('Add Row', addRow);
    body.appendChild(addButton)

    const deleteButton = createButton('Delete Row', deleteRow);
    body.appendChild(deleteButton)

    const randomButton = createButton('Random Rows', randomRows);
    body.appendChild(randomButton)
}

function createButton(text, onClick) {
    const button = document.createElement('button')
    button.textContent = text
    button.onclick = onClick
    button.classList.add('row-button')
    return button
}

function addRow() {
    const table = document.getElementById('myTable')
    const row = table.insertRow()
    for (let i = 0; i < 3; i++) {
        const cell = row.insertCell()
        const randomWord = words[Math.floor(Math.random() * words.length)]
        cell.textContent = randomWord
    }
}

function deleteRow() {
    const table = document.getElementById('myTable')
    const rowCount = table.rows.length
    if (rowCount > 1) {
        table.deleteRow(rowCount - 1)
    }
}

function randomRows() {
    const table = document.getElementById('myTable');
    const numberOfRows = table.rows.length;

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    for (let i = 0; i < 10; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 3; j++) {
            const cell = row.insertCell();
            const randomWord = words[Math.floor(Math.random() * words.length)];
            cell.textContent = randomWord;
        }
    }
}

generateTable()