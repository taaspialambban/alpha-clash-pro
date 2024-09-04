function calculateRectangleArea() {
    const rectangleBaseInput = document.getElementById('rectangle-width');
    const rectangleBaseText = rectangleBaseInput.value;
    const base = parseFloat(rectangleBaseText);
    console.log(base)

    const rectangleWidthInput = document.getElementById('rectangle-length');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width)

    const area = base * width;
    console.log(area);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area
}