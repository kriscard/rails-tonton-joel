function switch_tabs() {
const tab_left = document.getElementById("tab_left")
const tab_right = document.getElementById("tab_right")
const container_left = document.getElementById("div_left")
const container_right = document.getElementById("div_right")
const container_center = document.getElementById("div_center")
console.log(container_right.style);
container_center.style.display = "none";
container_right.style.display = "none";

tab_right.addEventListener("click", (event) => {
  tab_left.classList.remove("active");
  tab_right.classList.add("active");
  tab_center.classList.remove("active");
  container_left.style.display = "none";
  container_center.style.display = "none";
  container_right.style.display = "block";
});

tab_center.addEventListener("click", (event) => {
  tab_left.classList.remove("active");
  tab_right.classList.remove("active");
  tab_center.classList.add("active");
  container_left.style.display = "none";
  container_right.style.display = "none";
  container_center.style.display = "block";
});

tab_left.addEventListener("click", (event) => {
  tab_right.classList.remove("active");
  tab_left.classList.add("active");
  tab_center.classList.remove("active");
  container_right.style.display = "none";
  container_center.style.display = "none";
  container_left.style.display = "block";
});

}

export { switch_tabs };
