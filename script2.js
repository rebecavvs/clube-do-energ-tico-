document.addEventListener('DOMContentLoaded', function () {
    const publishButtons = document.querySelectorAll('.publish-button');
    const publishedTableBody = document.getElementById('published-table-body');

    publishButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            const row = e.target.parentElement.parentElement;
            const data = {
                date: row.querySelector('.datepicker').value,
                time: row.querySelector('.timepicker').value,
                category: row.querySelector('.category').value,
                description: row.querySelector('.description').value
            };
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${data.date} ${data.time}</td>
                <td>${data.category}</td>
                <td>${data.description}</td>
                <td><button class="remove-button">Remover</button></td>
            `;
            publishedTableBody.appendChild(newRow);
        });
    });

    publishedTableBody.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-button')) {
            const row = e.target.parentElement.parentElement;
            publishedTableBody.removeChild(row);
        }
    });
});