const products = [
  { id: "fc-1888", name: "flux capacitor" },
  { id: "fc-2050", name: "power laces" },
  { id: "fs-1987", name: "time circuits" },
  { id: "ac-2000", name: "low voltage reactor" },
  { id: "jj-1969", name: "warp equalizer" }
];

// Populate select
const select = document.getElementById("product");

products.forEach(p => {
  const option = document.createElement("option");
  option.value = p.id;
  option.textContent = p.name;
  select.appendChild(option);
});

// footer date
document.getElementById("modified").textContent = document.lastModified;

// review counter
let count = localStorage.getItem("reviews") || 0;

if (window.location.pathname.includes("review.html")) {
  count++;
  localStorage.setItem("reviews", count);
}