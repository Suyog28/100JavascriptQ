//Q43. Write to do list program that allows users to add, remove, and list tasks.

//User Choices:

//1.Add an item
//2.See the list
//3.Delete an item
//4.Exit

//User Input:

const prompt = require("prompt-sync")();
const taskList = [];

let exit = false;

while (!exit) {
    let userChoice = prompt("Enter your choice: 1.Press 1 for add a task, 2.Press 2 to see the task, 3.Press 3 to remove the task, 4. Press 4 to exits ");

    userChoice = parseInt(userChoice);

    if (userChoice === 1) {
        let addTask = prompt("Enter a task: ");
        taskList.push(addTask);
    } else if (userChoice === 2) {
        taskList.forEach(element => {
            console.log(element);
        });
    } else if (userChoice === 3) {
        let removeTask = prompt("Enter a task to remove: ");
        taskList.splice(taskList.indexOf(removeTask), 1);
    } else if (userChoice === 4) {
        exit = true
    }
}




