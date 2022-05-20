const borgir = document.querySelector(".borgir");
const primnav = document.querySelector(".primary-navigation");
borgir.addEventListener("click", function () {
  borgir.classList.toggle("is-active");
  primnav.classList.toggle("activate");
});
document.querySelectorAll(".primary-navigation>a").forEach((n) =>
  n.addEventListener("click", () => {
    borgir.classList.remove("is-active");
    primnav.classList.remove("activate");
  })
);
