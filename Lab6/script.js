const inputEl = document.getElementById("numbersInput");
const btnEl = document.getElementById("sortBtn");
const outEl = document.getElementById("outputArea");
const errEl = document.getElementById("errorMsg");

btnEl.addEventListener("click", () => {
  errEl.textContent = "";

  const raw = inputEl.value.trim();

  if (raw.length === 0) {
    errEl.textContent = "❗ Please enter at least one number.";
    outEl.textContent = "—";
    return;
  }

  const parts = raw.split(",");
  const nums = [];

  for (let p of parts) {
    const cleaned = p.trim();
    if (cleaned === "") continue;

    const value = Number(cleaned);

    if (Number.isNaN(value)) {
      errEl.textContent =
        "⚠ Error: Only numbers allowed (example: 5, 10, 3.5)";
      outEl.textContent = "—";
      return;
    }

    nums.push(value);
  }

  if (nums.length === 0) {
    errEl.textContent = "❗ No valid numbers found.";
    outEl.textContent = "—";
    return;
  }

  nums.sort((a, b) => a - b);

  outEl.textContent = "[ " + nums.join(", ") + " ]";
});
