const burger = document.getElementById("burger");
const centerBar = document.getElementById("sidebar-navbar");
const cancelIcon = document.getElementById("cancel-icon");


// show bar

burger.addEventListener("click", () => {
    centerBar.classList.add("sidebar-navbar");
    centerBar.style.display = 'block'
});

// closenav

cancelIcon.addEventListener("click", () => {
    centerBar.classList.remove("sidebar-navbar");
    centerBar.style.display = "none";
});



