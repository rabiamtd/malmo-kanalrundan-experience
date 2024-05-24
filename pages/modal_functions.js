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

  statusBox.appendChild(closeButton);
  parentElement.parentNode.insertBefore(statusBox, parentElement.nextSibling);

  statusBox.style.position = "absolute";
  statusBox.style.zIndex = "1000";
  statusBox.style.marginTop = "10px";
  statusBox.style.padding = "10px";
  statusBox.style.border = "1px solid #ccc";
  statusBox.style.borderRadius = "5px";
  statusBox.style.backgroundColor = "#fff";
  statusBox.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";

  const arrow = document.createElement("div");
  arrow.classList.add("status-box-arrow");
  arrow.style.position = "absolute";
  arrow.style.top = "-10px";
  arrow.style.left = "50%";
  arrow.style.transform = "translateX(-50%)";
  arrow.style.width = "0";
  arrow.style.height = "0";
  arrow.style.borderLeft = "10px solid transparent";
  arrow.style.borderRight = "10px solid transparent";
  arrow.style.borderBottom = "10px solid #fff";

  statusBox.appendChild(arrow);

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
