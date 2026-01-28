document.addEventListener("DOMContentLoaded", function () {
    let params = new URLSearchParams(document.location.search);
    let p = params.get("newsletter");
    if (parseInt(p) == 1) {
        const nl = document.querySelector(".newsletter");
        const inf = document.querySelector(".info");
        nl.classList.remove("d-none");
        inf.classList.add("d-none");
    }
});
