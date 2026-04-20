//1. Selecting Elements and Buttons
const inputField = document.getElementById("taskInput");
const addButton = document.getElementById("addBtn");
const task = document.getElementById("taskList");
const deleteButton = document.getElementById("deleteBtn");
const clearButton = document.getElementById("clearBtn");

//2. The data: a global Array
let myTasks = [];//this is the user's input storage

//3. when the add task button is clicked, this function will run
addButton.addEventListener('click', () => {
    const newTask = inputField.value;//get input value
    //only add if not empty
    if (newTask !== "") {
        // Method: .push() adds the item to the end of our array
        myTasks.push(newTask);
        //the classic for loop will print a numbered list of tasks in the console
        console.log("Numbered Task List:");
        for (let i = 0; i < myTasks.length; i++) {
            console.log(`${i + 1}. ${myTasks[i]}`);
        }
        task.innerHTML = "";
        //When humans start a list, they start with the number one so that is what we will start with for the display
        let index = 1;
        //the for...of loop will show the numbered list on the webpage
        //loop through each task in the array
        for (let myTask of myTasks) {
            //create a new tasks element for each task
            const taskItem = document.createElement("div");
            taskItem.className =
                "flex items-center gap-3 p-3 bg-white/80 border border-gray-300 rounded-lg shadow-sm " +
                "hover:bg-blue-50 cursor-pointer transition-all duration-200 " +
                "focus:outline-none focus:ring-2 focus:ring-blue-500";

            //add the number and task name as a text
            taskItem.textContent = index + ". " + myTask;
            //add the new element to the webpage
            task.appendChild(taskItem);
            //increase the number fo the next task
            index++;
            console.log("Task added!");
        }

        // Clear the input box for the next entry
        inputField.value = "";

        // Console log so students can see the "Hidden" data growing
        console.log("Current Array:", myTasks);
    }
});

//4. Delete Specific Task Logic
// When the Delete button is clicked, run this function
deleteButton.addEventListener('click', () => {
    // Check if the array is empty
    if (myTasks.length === 0) {
        //Tell the user the task list is empty
        alert("Everything is already Deleted! Add a new task to start your task list!");
        //stop the function so nothing else returns
        return;
    }
    // Check if the user has selected a task to delete
    else if (inputField.value === "") {
        //Tell the user to select a task to delete
        alert("Please select a task to delete by clicking on it in the list!");
        //stop the function so nothing else returns
        console.log("");
    }
    // If the user has selected a task to delete, log it to the console
    else {
        // Log the task to be deleted
        console.log("Deleting task:", inputField.value);
    }
    // Get the task the user selected (now placed in the input box)
    const taskToDelete = inputField.value;
    // Create a new empty array to collect tasks that are NOT deleted
    const updatedList = [];
    // Look at every task in the array
    for (let myTask of myTasks) {
        // If the current task is NOT the one to delete
        if (myTask !== taskToDelete) {
            // Add it to the updated list
            updatedList.push(myTask);
        }
        // If the current task IS the one to delete, skip it and log that it's deleted
        else {
            console.log("Task deleted!");
        }
    };
    // Replace the old array with the updated one
    myTasks = updatedList;
    // Clear the visual list
    task.innerHTML = "";
    // Rebuild the numbered list
    let index = 1;
    // Loop through each task in the updated array
    for (let myTask of myTasks) {
        // Create a new task element for each task
        const taskItem = document.createElement('div');
        // Add the number and task name as text
        taskItem.textContent = index + ". " + myTask;
        // Re‑add the addEventListener feature
        taskItem.addEventListener('click', () => {
            taskItem.className =
                "flex items-center gap-3 p-3 bg-white/80 border border-gray-300 rounded-lg shadow-sm " +
                "hover:bg-blue-50 cursor-pointer transition-all duration-200 " +
                "focus:outline-none focus:ring-2 focus:ring-blue-500";
            // When a task is clicked, place its name in the input box for deletion
            inputField.value = myTask;
            // Log the selected task to the console
            console.log("Selected task:", myTask);
        });
        // Add the task item back to the webpage
        task.appendChild(taskItem);
        // Increase the index for the next task
        index++;
    }
    // Clear the input box
    inputField.value = "";
    // Log the updated list
    console.log("Current Array:", myTasks);
});

// 5. CLEAR ALL LOGIC
//When the clear all button is clicked, this function will run
clearButton.addEventListener('click', () => {
    //check if the array is already empty
    if (myTasks.length === 0) {
        //Tell the user the task list is empty
        alert("Everything is already cleared! Add a new task to start your task list!");
        //stop the function so nothing else returns
        return;
    }
    //if the tasks do exist and the user clicks the clear button, then clear with this it will remove all tasks from the array.
    while (myTasks.length > 0) {
        myTasks.pop();
    }
    // Clear the visual list on the webpage
    task.innerHTML = "";
    //let the user know everthing is cleared
    console.log("All tasks are cleared:", myTasks);
});