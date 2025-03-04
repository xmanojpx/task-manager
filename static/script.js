function addTask() {
    let taskInput = document.getElementById("new-task");
    let taskText = taskInput.value.trim();

    if (taskText === "") return; // Prevent adding empty tasks

    let taskList = document.getElementById("task-list");

    let taskItem = document.createElement("li");

    // Create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            taskLabel.classList.add("completed");
        } else {
            taskLabel.classList.remove("completed");
        }
    });

    // Create task label
    let taskLabel = document.createElement("span");
    taskLabel.textContent = taskText;

    // Append elements
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskLabel);
    taskList.appendChild(taskItem);

    // Clear input field
    taskInput.value = "";
}
