// Uganda Object
const uganda = {
    name: "Uganda",
    slogan: "The Pearl of Africa"
};

// Foods Array
const foods = ["Rolex", "Matooke", "Luwombo"];

// Load Foods Dynamically
function loadFoods() {
    const list = document.querySelector("#foodList");
    if (!list) return;

    list.innerHTML = "";

    foods.forEach(food => {
        const li = document.createElement("li");
        li.textContent = food;
        list.appendChild(li);
    });
}

// ✅ UPDATED GREETING (your request)
function greetingMessage() {
    const title = document.querySelector("#greeting");

    if (title) {
        title.textContent = "✨ Welcome to the Pearl of Africa Uganda";
    }
}

// Visitor Counter
function trackVisits() {
    let visits = Number(localStorage.getItem("visits")) || 0;
    visits++;

    localStorage.setItem("visits", visits);

    const v = document.querySelector("#visits");
    if (v) {
        v.textContent = `Number of visits: ${visits}`;
    }
}

// Contact Form Handling
function setupForm() {
    const form = document.querySelector("#contactForm");
    const messageBox = document.querySelector("#formMessage");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (messageBox) {
            messageBox.textContent =
                "✅ Thank you! Your message has been sent successfully.";
        }

        form.reset();
    });
}

// Footer Last Modified
function lastModified() {
    const el = document.querySelector("#lastModified");
    if (el) {
        el.textContent = `Last Modified: ${document.lastModified}`;
    }
}

// Run Everything
greetingMessage();
trackVisits();
loadFoods();
setupForm();
lastModified();