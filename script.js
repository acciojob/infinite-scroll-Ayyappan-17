//your code here!
const listContainer = document.getElementById("list");

// Add 10 default items
let count = 1;

function addItems(num) {
    for (let i = 0; i < num; i++) {
        const li = document.createElement("li");
        li.textContent = `Item ${count++}`;
        listContainer.appendChild(li);
    }
}

// Load initial items
addItems(10);

// Infinite Scroll Logic
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    // If user reaches bottom
    if (scrollTop + windowHeight >= fullHeight - 5) {
        addItems(2); // Add 2 new items
    }
});


