// Dom elements
const boxes = document.querySelectorAll(".box");
images = document.querySelector(".image");

// Loop through each boxes element
boxes.forEach((box) => {
  // when a draggable element drags over a box element
  box.addEventListener("dragover", (e) => {
    e.preventDefault(); // Prevents default behavior
    box.classList.add("hovered")
  });

  // when a draggable element leaves a box element
  box.addEventListener("dragleave", () => {
    box.classList.remove("hovered")
  });

  // when a draggable element is dropped a box element
  box.addEventListener("drop", () => {
    box.append(images);
    box.classList.remove("hovered")
  })
});
