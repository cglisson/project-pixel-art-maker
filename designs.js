"use strict";
const DEFAULT_COLOR = $('#colorPicker').val(),
      TABLE = document.getElementById('pixel_canvas');

// Select color input
var colorPicker = $('#colorPicker'); // Reference to color input
colorPicker.value = DEFAULT_COLOR;

colorPicker.change(function(evt) {
    colorPicker.value = evt.target.value;
});

// Select size input
var heightInput = $('#input_height'),
    widthInput = $('#input_width'),
    isGrid = false,
    height, width;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function() {
    event.preventDefault();
    if (isGrid) {
        removeTable();
    }

    height = heightInput.val();
    width = widthInput.val();
    makeGrid();
});

// Makes the grid.
function makeGrid() {
// Your code goes here!
    insertTable();
    isGrid = true
};

// Inserts table into the index webpage.
function insertTable() {
    for (let i = 0; i < height; i++) {
         let row = TABLE.insertRow(i);
        for (let x = 0; x < width; x++) {
            var cell = row.insertCell(x);
            cell.addEventListener('click', function() {
                this.style.backgroundColor = colorPicker.val();
            });
        }
    };
};

// Removes Rows in the table.
function removeTable() {
    let rowCount = TABLE.rows.length;

    for (let i = 0; i < rowCount; i++) {
        let row = TABLE.rows[i];
        TABLE.deleteRow(row);
    }
};
