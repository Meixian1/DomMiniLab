const textContentH1 = document.querySelector(".Big-title");
textContentH1.textContent = "some text";

const hideH1 = () => {
    textContentH1.style.display = "none";
}

const unhideH1 =() => {
    textContentH1.style.display = "block";
}

const hideButton = document.querySelector(".Hide-H1");
hideButton.addEventListener("click", hideH1);

const showButton = document.querySelector(".Unhide-H1");
showButton.addEventListener("click", unhideH1);