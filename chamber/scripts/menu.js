function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamButton")
x.onclick = toggleMenu;