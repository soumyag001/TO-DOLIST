let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let addBtn = document.getElementById("addBtn");

// Event listener for Add button
addBtn.addEventListener("click", Add);

// Function to add a new task
function Add() {
  if (inputs.value.trim() === "") {
    alert("Please Enter Task");
    return;
  }

  // Create list element
  let newEle = document.createElement("ul");

  // Create list item with checkbox, task text, and delete button
  newEle.innerHTML = `
    <li>
      <input type="checkbox" class="check">
      <span>${inputs.value}</span>
      <button class="delete-btn">Delete</button>
    </li>
  `;

  // Append new task to task container
  text.appendChild(newEle);
  inputs.value = "";

  // Delete button action
  newEle.querySelector(".delete-btn").addEventListener("click", function () {
    newEle.remove();
  });

  // Checkbox action
  newEle.querySelector(".check").addEventListener("change", function (e) {
    let taskItem = newEle.querySelector("li");
    if (e.target.checked) {
      taskItem.classList.add("completed");
    } else {
      taskItem.classList.remove("completed");
    }
  });
}
