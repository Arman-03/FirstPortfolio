(function () {
    const controls = document.querySelectorAll(".control");
    controls.forEach(button => {
        button.addEventListener("click", () => {
            document.querySelector(".active-btn").classList.remove("active-btn");
            button.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
})();