function getElementWidth(content, padding, boarder) {
    content = parseFloat(content);
    padding = parseFloat(padding);
    boarder = parseFloat(boarder);
    
    const borderBox = (padding + boarder) * 2;
    const result = content + borderBox;

    return result;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
