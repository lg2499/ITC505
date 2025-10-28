// script.js
// Interactive Number Sorter Tool
// Responds to click events and updates DOM

const inputEl = document.getElementById("numbersInput");
const sortBtn = document.getElementById("sortBtn");
const shuffleBtn = document.getElementById("shuffleBtn");

const sortedAscEl = document.getElementById("sortedAsc");
const sortedDescEl = document.getElementById("sortedDesc");
const minMaxEl = document.getElementById("minMax");

const errorMsgEl = document.getElementById("errorMsg");

function parseNumbers(raw) {
    const parts = raw.split(",");
    const nums = [];
    for (let p of parts) {
        const trimmed = p.trim();
        if (trimmed === "") continue;
        const n = Number(trimmed);
        if (Number.isNaN(n)) {
            return null;
        }
        nums.push(n);
    }
    return nums;
}

function renderResults(arr) {
    const asc = [...arr].sort((a, b) => a - b);
    const desc = [...arr].sort((a, b) => b - a);
    const minVal = asc[0];
    const maxVal = asc[asc.length - 1];

    sortedAscEl.textContent = asc.join(", ");
    sortedDescEl.textContent = desc.join(", ");
    minMaxEl.textContent = `min = ${minVal}, max = ${maxVal}`;
}

sortBtn.addEventListener("click", () => {
    const rawValue = inputEl.value;
    const nums = parseNumbers(rawValue);

    if (!nums || nums.length === 0) {
        errorMsgEl.classList.remove("hidden");
        sortedAscEl.textContent = "—";
        sortedDescEl.textContent = "—";
        minMaxEl.textContent = "—";
        return;
    }

    errorMsgEl.classList.add("hidden");

    renderResults(nums);
});

shuffleBtn.addEventListener("click", () => {
    const demo = [];
    for (let i = 0; i < 6; i++) {
        demo.push(Math.floor(Math.random() * 100) + 1);
    }

    inputEl.value = demo.join(", ");
    errorMsgEl.classList.add("hidden");
    renderResults(demo);
});
