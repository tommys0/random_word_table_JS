const words = ['Auto', 'Kamion', 'Trajekt', 'Letadlo', 'Helikoptera', 'Motorka', 'Kolo', 'Skutr', 'Ctyrkolka', 'Kroska', 'Lod', 'Stihacka', 'Trikolka'];

function generateTable() {
    const body = document.querySelector('body');

    const table = document.createElement('table');
    table.setAttribute('id', 'myTable');
    body.appendChild(table);

    const headers = ['Num.1', 'Num.2', 'Num.3'];

    const headerRow = table.createTHead().insertRow();
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    for (let i = 0; i < 10; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 3; j++) {
            const cell = row.insertCell();
            const randomWord = words[Math.floor(Math.random() * words.length)];
            cell.textContent = randomWord;
        }
    }
}

function addRow() {

}

function deleteRow() {

}

function randomRows() {

}

generateTable()