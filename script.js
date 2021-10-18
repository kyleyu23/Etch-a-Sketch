//@ts-check

const gridContainer = document.querySelector('.grid-container')
createGrids(256);

/**
 * @param {Number!} n
 */
function createGrids(n) {
    for (let index = 0; index < n; index++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        // cell.textContent = `${index}`;
        addHoverEffect(cell);
        gridContainer.appendChild(cell);
    }
}

/**
 * @param {HTMLDivElement} cell
 */
function addHoverEffect(cell) {
    cell.addEventListener('mouseenter', e => {
        cell.style.cssText = 'background-color: rgb(26, 26, 26);';
    });
}