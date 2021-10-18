//@ts-check

const gridContainer = document.querySelector('.grid-container')

const buttonClear = document.querySelector('#clear-background-color');
buttonClear.addEventListener('click', removeHoverEffect);


const DEFAULT_GRID_SIZE = 16;
const sliderValueContainer = document.querySelector('#slider-container');
sliderValueContainer.textContent = `${DEFAULT_GRID_SIZE} x ${DEFAULT_GRID_SIZE}`;
const slider = document.querySelector('#slider');
slider.addEventListener('change', reCreateGrid);

createGrid(DEFAULT_GRID_SIZE);

function reCreateGrid() {
    removeAllChildNodes(gridContainer);
    let sliderValue = slider.value;
    sliderValueContainer.textContent = `${sliderValue} x ${sliderValue}`;
    createGrid(sliderValue);
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function removeHoverEffect() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.classList.remove('hover'));
}

/**
 * @param {Number!} grid_width
 */
function createGrid(grid_width) {
    for (let index = 0; index < (grid_width * grid_width); index++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        setCellSize(cell, grid_width);
        addHoverEffect(cell);
        gridContainer.appendChild(cell);
    }

    function setCellSize(cell, grid_width) {
        const cell_width = 100 / grid_width;
        cell.style.height = `${cell_width}%`;
        cell.style.width = `${cell_width}%`;
    }
}

/**
 * @param {HTMLDivElement} cell
 */
function addHoverEffect(cell) {
    cell.addEventListener('mouseenter', () => {
        cell.classList.add('hover');
        // cell.style.cssText = 'background-color: rgb(26, 26, 26);';
    });
}