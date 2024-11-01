function generateTable(m, n) {
    if (!Number.isInteger(m) || !Number.isInteger(n) || m <= 0 || n <= 0) {
        console.error("Кількість рядків (m) та стовпців (n) повинні бути позитивними цілими числами.");
        return;
    }

    const table = document.createElement("table");

    for (let i = 0; i < m; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < n; j++) {
            const cell = document.createElement("td");
            cell.textContent = `${i + 1},${j + 1}`;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    const existingTable = document.querySelector("table");
    if (existingTable) {
        existingTable.remove();
    }

    document.body.appendChild(table);
}

function createForm() {
    const existingForm = document.querySelector("form");
    if (existingForm) {
        existingForm.remove();
    }

    const form = document.createElement("form");
    form.action = "#";

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Ім'я:";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.required = true;
    form.appendChild(nameLabel);
    form.appendChild(nameInput);

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Електронна пошта:";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.required = true;
    form.appendChild(emailLabel);
    form.appendChild(emailInput);

    const subscribeLabel = document.createElement("label");
    subscribeLabel.textContent = "Підписатися на новини";
    const subscribeCheckbox = document.createElement("input");
    subscribeCheckbox.type = "checkbox";
    subscribeCheckbox.name = "subscribe";
    form.appendChild(subscribeLabel);
    form.appendChild(subscribeCheckbox);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Надіслати";
    form.appendChild(submitButton);

    const resetButton = document.createElement("button");
    resetButton.type = "reset";
    resetButton.textContent = "Скинути";
    form.appendChild(resetButton);

    document.body.appendChild(form);
}
