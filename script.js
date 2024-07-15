let initiatives = [];

function rollInitiative() {
    const name = document.getElementById('name').value;
    const bonus = parseInt(document.getElementById('bonus').value) || 0;

    if (name) {
        const initiative = Math.floor(Math.random() * 20) + 1 + bonus;
        initiatives.push({ name, initiative });
        initiatives.sort((a, b) => b.initiative - a.initiative);
        updateInitiativeList();
    }

    document.getElementById('name').value = '';
    document.getElementById('bonus').value = '';
}

function updateInitiativeList() {
    const list = document.getElementById('initiativeList');
    list.innerHTML = '';

    initiatives.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = `${entry.name}: ${entry.initiative}`;
        list.appendChild(listItem);
    });
}