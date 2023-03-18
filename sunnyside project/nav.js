const burger = document.getElementById("burger");
const centerBar = document.getElementById("sidebar-navbar");
const cancelIcon = document.getElementById("cancel-icon");


// show bar

burger.addEventListener("click", () => {
    centerBar.classList.add("showNav");
});

// closenav

cancelIcon.addEventListener("click", () => {
    centerBar.classList.remove("showNav");
});
