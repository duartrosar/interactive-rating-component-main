const ratingElements = Array.from(document.querySelectorAll(".rating-element"));
let selectedIndex = -1;

ratingElements.forEach((element) => {
  element.addEventListener("click", () => {
    updateSelectedStyle(element);
    selectedIndex = ratingElements.indexOf(element);
    removeUnselectedStyle(selectedIndex);
    console.log(ratingElements[selectedIndex].innerHTML);
  });
});

function updateSelectedStyle(element) {
  if (!element.classList.contains("checked")) {
    element.classList.add("checked");
  } else {
    element.classList.remove("checked");
  }
}

function removeUnselectedStyle(elementIndex) {
  for (let i = 0; i < ratingElements.length; i++) {
    if (selectedIndex != i) {
      ratingElements[i].classList.remove("checked");
    }
  }
}
