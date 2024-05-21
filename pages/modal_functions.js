"use strict";

function launchQModal() {

  const openButton = document.querySelector(".modal-button");

  const closeButton = document.getElementById("close-button");
  const modalContainer = document.querySelector(".modal-container");
  const saveCloseButton = document.getElementById("saveClose-button");

  const targetList = [openButton, closeButton, modalContainer, saveCloseButton];

  const handler = e => {
    e.stopPropagation();

    if (targetList.includes(e.target)) {
      modalContainer.classList.toggle("active");
    }
  };

  targetList.forEach(el => el.addEventListener("click", handler));

}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
