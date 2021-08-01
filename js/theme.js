const switch$ = document.querySelector('#toggle__switch');
const body$ = document.querySelector('body');

switch$.addEventListener('click', (e) => {
    const value = e.target.value;
    if (value) {
        changeTheme(value);
    }
});

const changeTheme = (value) => {
    body$.className = '';

    switch (Number(value)) {
        case 1:
            body$.classList.add('theme1');
            break;
        case 2:
            body$.classList.add('theme2');
            break;
        case 3: 
            body$.classList.add('theme3');
            break;
    }
};