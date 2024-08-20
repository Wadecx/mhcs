const burger = document.querySelector(".burger_btn");
const sidebar = document.querySelector(".nav_phone");

console.log(burger);

const bar1 = document.getElementById("top");
const bar2 = document.getElementById("mid");
const bar3 = document.getElementById("bot");

burger.addEventListener("click", () => {
  burger.classList.toggle("enabled");

  const burgerIsOpen = burger.classList.contains("enabled");

  if (burgerIsOpen) {
    bar1.classList.add("top-enabled");
    bar2.classList.add("mid-enabled");
    bar3.classList.add("bot-enabled");
    sidebar.style.visibility = "visible";
    sidebar.style.opacity = "1";
    sidebar.style.transform = "translateY(-20px)";
    sidebar.style.transition = " all .2s";
  } else {
    bar1.classList.remove("top-enabled");
    bar2.classList.remove("mid-enabled");
    bar3.classList.remove("bot-enabled");
    sidebar.style.transform = "translateY(20px)";
    sidebar.style.opacity = "1";
    sidebar.style.opacity = "0";
    sidebar.style.visibility = "hidden";
  }
});
