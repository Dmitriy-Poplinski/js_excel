function toHTML() {
    return `
        <li class="db__record">
            <a href="#">Таблиця номер 1</a>
            <strong>12.06.2020</strong>
        </li>
    `;
};

function getAllKeys() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key.includes('excel')) {
            continue;
        };
        keys.push(key);
    };
    return keys;
};

export function createRecordsTable() {
    const keys = getAllKeys();
    if (!keys.length) {
        return '<p>Ви поки що не створили жодної таблиці</p>';
    }
    
    return `
        <div class="db__list-header">
            <span>Назва</span>
            <span>Дата відкриття</span>
        </div>
        <ul class="db__list">
            ${ keys.map(toHTML).join('') }
        </ul>
    `;
};
