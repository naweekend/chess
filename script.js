import { log } from "./functions.js";

const chessBoardElement = document.querySelector("#chess-board")

const chessBoard = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30, 31],
    [32, 33, 34, 35, 36, 37, 38, 39],
    [40, 41, 42, 43, 44, 45, 46, 47],
    [48, 49, 50, 51, 52, 53, 54, 55],
    [56, 57, 58, 59, 60, 61, 62, 63]
]

// svgs
const tileSVG = (color, number) => {
    return `
    <svg class="${color}-tile" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" h="0" width="100%" height="100%" />
    </svg>
    `
}

for (let row = 0; row < 8; row++) {
    // a new span created everytime
    const rowSpan = document.createElement("span");
    rowSpan.style.display = "flex";
    chessBoardElement.appendChild(rowSpan);

    // a tile appended to the 8 spans created
    for (let col = 0; col < 8; col++) {
        const positionIndex = chessBoard[row][col];
        const p = document.createElement("span");
        const tile = (col + row) % 2 == 0 ? tileSVG("white", col + row) : tileSVG("black", col + row);
        p.innerHTML = tile;
        rowSpan.appendChild(p);
    }
}
