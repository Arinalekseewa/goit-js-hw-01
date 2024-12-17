function getElementWidth (content, padding, border) {
    const getElementWidth = Number.parseInt(content) + ((Number.parseInt(padding) + Number.parseInt(border)) * 2);
    const message = `${getElementWidth}`;
    return message;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
