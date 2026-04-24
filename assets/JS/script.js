const InputNameTask = document.querySelector("#addTaskNameInput");
const InputDetailTask = document.querySelector("#addTaskDetailsImput");
const CreateBtn = document.querySelector("#createbtn");
const TaskListEl = document.querySelector(".tasklist");
const SearchBtn = document.querySelector("#Searchbtn");

//#region form of new Task
//anty hack
function escapeHtml(str) {
  if (!str) return "";

  const replacements = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  //   return back the emojis
  return str.replace(/[&<>"']/g, function (m) {
    return replacements[m];
  });
}
const createTaskCard = (title, details) => {
  const escapedTitle = escapeHtml(title);
  const escapedDetails = escapeHtml(details);
  return `
        <div class="card bg-dark  text-white text-start taskcard mb-3" data-task-id="${Date.now() + Math.random()}">
          <div class="card-header d-flex gap-3">
            <a href="#" class="task-complete-btn text-decoration-none text-white"><i class="fa fa-check"></i></a>
            <a href="#" class="task-uncomplete-btn text-decoration-none  text-white"><i class="fa fa-times"></i></a>
            <a href="#" class="task-edit-btn text-decoration-none  text-white"><i class="fa fa-pencil"></i></a>
            <a href="#" class="task-delete-btn text-decoration-none  text-white"><i class="fa fa-trash"></i></a>
          </div>
          <div class="card-body">
            <h4 class="card-title">${escapedTitle}</h4>
            <p class="card-text">${escapedDetails}</p>
          </div>
        </div>
      `;
};
const addingTask = () => {
  if (InputNameTask.value.trim().length > 0) {
    const card = createTaskCard(InputNameTask.value, InputDetailTask.value);
    TaskListEl.insertAdjacentHTML("beforeend", card);

    InputNameTask.value = "";
    InputDetailTask.value = "";
  } else {
    alert("How about adding a name for your task?");
  }
};
//#endregion

//#region task change buttons
const completeTask = (closesttaskCard) => {
  closesttaskCard.classList.remove("bg-dark");
  closesttaskCard.classList.remove("bg-danger");
  closesttaskCard.classList.add("bg-success");
};

const unCompleteTask = (closesttaskCard) => {
  closesttaskCard.classList.remove("bg-dark");
  closesttaskCard.classList.remove("bg-success");
  closesttaskCard.classList.add("bg-danger");
};

const editTask = (closesttaskCard) => {
  const titleEl = closesttaskCard.querySelector(".card-title");
  const detailEl = closesttaskCard.querySelector(".card-text");

  const newTitle = prompt(" Enter new Title : ", titleEl.innerText);
  const newDetails = prompt(" Enter new details : ", detailEl.innerText);

  if (newTitle !== null) titleEl.innerText = newTitle;
  if (newDetails !== null) detailEl.innerText = newDetails;
};
const deleteTask = (closesttaskCard) => {
  closesttaskCard.remove();
};

const handleTaskListClick = (event) => {
  event.preventDefault();

  const clickedElement = event.target;
  let button = clickedElement.closest("a");
  if (!button) return;
  const closesttaskCard = button.closest(".taskcard");
  if (!closesttaskCard) return;

  if (button.classList.contains("task-complete-btn")) {
    completeTask(closesttaskCard);
  } else if (button.classList.contains("task-uncomplete-btn")) {
    unCompleteTask(closesttaskCard);
  } else if (button.classList.contains("task-edit-btn")) {
    editTask(closesttaskCard);
  } else if (button.classList.contains("task-delete-btn")) {
    if (confirm("Are you sure you want to delete this task?"))
      deleteTask(closesttaskCard);
  }
};
//#endregion

//#region search part
const searchintasks = () => {
  alert("i didnt do anything about yet :) please wait a bit more!");
};
//#endregion

const alleventlisteners = () => {
  CreateBtn.addEventListener("click", addingTask);
  TaskListEl.addEventListener("click", handleTaskListClick);
  SearchBtn.addEventListener("click", searchintasks);
};

alleventlisteners();
