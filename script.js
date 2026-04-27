let list = document.getElementById("listCatatan");

// Load data saat pertama buka
window.onload = function () {
  const data = JSON.parse(localStorage.getItem("catatan")) || [];
  data.forEach(tampilCatatan);
};

function tambahCatatan() {
  const input = document.getElementById("inputCatatan");

  if (input.value === "") return;

  tampilCatatan(input.value);

  // simpan ke localStorage
  const data = JSON.parse(localStorage.getItem("catatan")) || [];
  data.push(input.value);
  localStorage.setItem("catatan", JSON.stringify(data));

  input.value = "";
}

function tampilCatatan(teks) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = teks;

  const btn = document.createElement("button");
  btn.textContent = "hapus";
  btn.className = "delete-btn";

  btn.onclick = function () {
    li.remove();
    hapusDariStorage(teks);
  };

  li.appendChild(span);
  li.appendChild(btn);

  list.appendChild(li);
}

function hapusDariStorage(teks) {
  let data = JSON.parse(localStorage.getItem("catatan")) || [];
  data = data.filter(item => item !== teks);
  localStorage.setItem("catatan", JSON.stringify(data));
}function toggleDarkMode() {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark);

  document.getElementById("darkBtn").textContent = isDark ? "☀️" : "🌙";
}

// load mode saat pertama buka
window.onload = function () {
  const data = JSON.parse(localStorage.getItem("catatan")) || [];
  data.forEach(tampilCatatan);

  const isDark = localStorage.getItem("darkMode") === "true";
  if (isDark) {
    document.body.classList.add("dark");
    document.getElementById("darkBtn").textContent = "☀️";
  }
};