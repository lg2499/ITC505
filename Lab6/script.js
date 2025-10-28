function sortNumbers() {
    const input = document.getElementById('numInput').value;
    const numArray = input.split(',').map(Number);
    numArray.sort((a, b) => a - b);
    document.getElementById('output').textContent = numArray.join(', ');
}

