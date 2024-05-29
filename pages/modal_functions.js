"use strict";

function launchQModal() {
  const openButton = document.querySelector(".modal-button");
  const closeButton = document.getElementById("close-button");
  const modalContainer = document.querySelector(".modal-container");
  const saveCloseButton = document.getElementById("saveClose-button");

  const modalButtonHandler = () => {
    modalContainer.classList.toggle("active");
    toggleModalButton(); // Toggle modal button visibility
  };

  const closeButtonHandler = () => {
    modalContainer.classList.remove("active");
    toggleModalButton(); // Toggle modal button visibility
  };

  // Add event listeners
  openButton.addEventListener("click", modalButtonHandler);
  closeButton.addEventListener("click", closeButtonHandler);
  saveCloseButton.addEventListener("click", closeButtonHandler);

  // Function to toggle modal button visibility
  function toggleModalButton() {
    openButton.classList.toggle("hidden");
  }
}


function displayStatusBox(message, parentElement) {
  const existingStatusBox = document.querySelector(".status-box");
  if (existingStatusBox) {
    existingStatusBox.remove();
  }

  const statusBox = document.createElement("div");
  statusBox.classList.add("status-box");
  statusBox.textContent = message;

  const closeButton = document.createElement("button");
  closeButton.textContent = "Stäng";
  closeButton.addEventListener("click", () => {
    statusBox.remove();
  });

  const arrow = document.createElement("div");
  arrow.classList.add("status-box-arrow");

  statusBox.appendChild(closeButton);
  statusBox.appendChild(arrow);
  parentElement.parentNode.insertBefore(statusBox, parentElement.nextSibling);

  const parentRect = parentElement.getBoundingClientRect();
  statusBox.style.left = `${parentRect.left}px`;
  statusBox.style.top = `${parentRect.bottom}px`;
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
