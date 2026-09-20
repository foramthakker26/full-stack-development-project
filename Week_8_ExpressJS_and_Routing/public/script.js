const result = document.getElementById("result");

async function loadRoute(url) {
  result.textContent = "Loading...";
  try {
    const response = await fetch(url);
    const data = await response.json();
    result.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    result.textContent = "Error: " + error.message;
  }
}

function loadAPI() { loadRoute("/api"); }
function loadUsers() { loadRoute("/api/users"); }
function loadProducts() { loadRoute("/api/products"); }